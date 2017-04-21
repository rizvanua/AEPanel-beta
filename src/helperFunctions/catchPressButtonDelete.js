import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import innerDeleteFunction from "./innerDeleteFunction";

//Function which cathc pressing of "Delete" button

let catchPressButtonDelete = window.addEventListener("keydown",function(event){
    //event.preventDefault();
    console.log(event.target.nodeName!='INPUT');
    if(GlobalStorage.toDelete&&GlobalStorage.toDelete.currentName&&GlobalStorage.toDelete.currentName=="Master"){
      return false;
    }
//console.log(event);
  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
  //csInterface.registerKeyEventsInterest(keyEventsInterest);

//console.log(GlobalStorage.distribitorObjectsStorage[genId]);

if(GlobalStorage.toDelete!=undefined&&event.target.nodeName!='INPUT'&&event.keyCode==46)
  {
    let nameOfBlock;
    if(GlobalStorage.toDelete.setEffectName){
      nameOfBlock=GlobalStorage.toDelete.setEffectName;
    }
    else if(GlobalStorage.toDelete.fullCommonContrlName)
    {
      nameOfBlock=GlobalStorage.toDelete.thisCommonContrlName;
    }
    //let effectName=GlobalStorage.toDelete.setEffectName;
    innerDeleteFunction(nameOfBlock);

}
    /*let promise= new Promise((resolve)=>{
      GlobalStorage.overMouseSet=null;
      let effectName=GlobalStorage.toDelete.setEffectName;
      innerDeleteFunction(effectName);
      if(GlobalStorage.toDelete.genId){ //Remove whole Distributor Blocks with all childs
        let genId=GlobalStorage.toDelete.genId;
          let distribitorObject=GlobalStorage.distribitorObjectsStorage[genId];
          let remove=GlobalStorage.toDelete.remove();
          Object.keys(distribitorObject).map((objectKey, index)=> {
            //console.log(objectKey);
            if(GlobalStorage.historyOfObjects[objectKey]){// check if object with this name exists in historyOfObjects
              delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
              //Call to ExtScript

                          csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects
                            console.log("REMOVE");
                            let remove=GlobalStorage.toDelete;
                            resolve(remove);
                          });

              //
            }
                          if(objectKey!="countTypeOfEffects"){
                              GlobalStorage.distribitorObjectsStorage[genId][objectKey].remove();//Remove this object from GlobalStorage.distribitorObjectsStorage
                          }
          });
      }

      else if(GlobalStorage.toDelete.setEffectName){//Remove ordinar effects (not chained with Distributor)
        let effectName=GlobalStorage.toDelete.setEffectName;
        delete GlobalStorage.historyOfObjects[effectName];

        //Call to ExtScript

                    csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                      let remove=GlobalStorage.toDelete.remove()
                      resolve(remove);
                    });

        //

      }
      else if(GlobalStorage.toDelete.fullCommonContrlName){//Remove CommonControls
        let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
        let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
        let itemsArray=GlobalStorage.toDelete.items;

        let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )

          if(i.node.nodeName=="path"&&!i.DistributorEffects){
            //console.log(i.LineTo);
            return i.LineTo;
          }
          else if(i.node.nodeName=="path"&&i.DistributorEffects){
              return i.DistributorEffects;

          }


        });


        //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
        //    if(i.DistributorEffects){
        //      return i.DistributorEffects.join(';')
        //    }
        //    return i.LineTo;
 //
        //});
        let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
              if(i.DistributorEffects){
                return i.DistributorEffects.join(';')
              }
              let jsonObject;
                jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
            return jsonObject;

          });

let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
          //Call to ExtScript
//console.log(arrayOfLinkedEffectsString);
                      //console.log(GlobalStorage.toDelete.thisCommonContrlName);

switch (GlobalStorage.toDelete[0].node.effectName) {
  case "Strength":
  //console.log(thisCommonContrlName);
  csInterface.evalScript(`$._ext.deleteCommonControl("Strength","${arrayOfLinkedEffectsString}","${thisCommonContrlName}")`,(res)=>{

  let remove=GlobalStorage.toDelete.remove()
  resolve(remove);

});
    break;
  default:
  console.log(CommonContrlName);

console.log(thisCommonContrlName);

  csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{

  let remove=GlobalStorage.toDelete.remove()
  resolve(remove);

});
}


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


});*/

//function deleteEffects(){

});

export default catchPressButtonDelete;
