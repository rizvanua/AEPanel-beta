import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';

Raphael.st.deleteInOneClick = function () {

  let deleteFunctions = window.addEventListener("contextmenu",function(event){
      event.preventDefault();



  //console.log(GlobalStorage.toDelete);
    //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
    //csInterface.registerKeyEventsInterest(keyEventsInterest);
    /*event.preventDefault();*/
  //console.log(GlobalStorage.distribitorObjectsStorage[genId]);
  if(GlobalStorage.toDelete!=undefined/*&&event.keyCode==46*/)
    {



      let promise= new Promise((resolve)=>{
        GlobalStorage.overMouseSet=null;
        if(GlobalStorage.toDelete.genId){ //Remove whole Distributor Blocks with all childs
          let genId=GlobalStorage.toDelete.genId;
            let distribitorObject=GlobalStorage.distribitorObjectsStorage[genId];
            Object.keys(distribitorObject).map((objectKey, index)=> {
              //console.log(objectKey);
              if(GlobalStorage.historyOfObjects[objectKey]){// check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
                delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
                //Call to ExtScript

                            csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects

                              let remove=GlobalStorage.toDelete.remove()
                              resolve(remove);
                            });

                //
              }

              GlobalStorage.distribitorObjectsStorage[genId][objectKey].remove();//Remove this object from GlobalStorage.distribitorObjectsStorage
            });
        }

        else if(GlobalStorage.toDelete.setEffectName){//Remove ordinar effects (not chained with Distributor)
          let effectName=GlobalStorage.toDelete.setEffectName;
          delete GlobalStorage.historyOfObjects[effectName];

          //Call to ExtScript

                      csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                        //console.log(GlobalStorage.toDelete);
                        let remove=GlobalStorage.toDelete.remove()
                        resolve(remove);
                      });

          //

        }
        else if(GlobalStorage.toDelete.fullCommonContrlName){//Remove CommonControls (not chained with Distributor)
          let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
          let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
          let itemsArray=GlobalStorage.toDelete.items;
          let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
            if(i.node.nodeName=="path"){

              return i.LineTo;
            }

          });

          let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
              return i.LineTo;

          });
  let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
            //Call to ExtScript

                        //console.log(GlobalStorage.toDelete.thisCommonContrlName);

                        csInterface.evalScript(`$._ext.deleteCommonControl("${CommonContrlName}","${arrayOfLinkedEffectsString}","${thisCommonContrlName}")`,(res)=>{

                        let remove=GlobalStorage.toDelete.remove()
                        resolve(remove);

                      });

            //

        }
        //resolve ()
        })
        .then((resolve)=>{

        resolve=undefined;
        GlobalStorage.toDelete=undefined;
        GlobalStorage.prevActive=undefined;

        });
  }
    /*workBlockSet.remove()*/

  });
}
