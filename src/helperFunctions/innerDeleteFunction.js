import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";

//We use this function in files "customEvents/customEventListeners.js" and "helperFunctions/deleteFunctions.js"

function innerDeleteFunction(nameOfBlock){
  //Remove Controls Windows if they are opened
  GlobalStorage.greyGround.hide();
  GlobalStorage.container.children('#slider-wrap').remove();
  GlobalStorage.container.children('#point-wrap').remove();
  GlobalStorage.container.children('#angle-wrap').remove();
  //
  let promise= new Promise((resolve)=>{
    GlobalStorage.overMouseSet=null;
    //let effectName=GlobalStorage.toDelete.setEffectName;
    if(GlobalStorage.toDelete&&GlobalStorage.toDelete.setEffectName&&GlobalStorage.historyOfObjects[nameOfBlock]){//Remove EffectBlock
      let effectName=GlobalStorage.toDelete.setEffectName;
      delete GlobalStorage.historyOfObjects[effectName];

      //Call to ExtScript
                  csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                    console.log(res);
                    if (res=='Mantra VR'){
                      let glassId=document.getElementById("glass");
                      glassId.style.display="block"
                      GlobalStorage.hasVR=false;
                    }
                    let remove=GlobalStorage.toDelete.remove()
                    resolve(remove);
                  });
      //

    }
    else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName&&GlobalStorage.historyOfObjects[nameOfBlock]&&GlobalStorage.toDelete.fullCommonContrlName!="multiplier"){//Remove CommonControls
        console.log(GlobalStorage.historyOfObjects[nameOfBlock]);
        let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
        let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
        let itemsArray=GlobalStorage.toDelete.items;

        let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
          if(i.node.nodeName=="path"){
            if(GlobalStorage.historyOfObjects[i.LineTo]&&GlobalStorage.toDelete.currentName!=i.LineTo){
              let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0];
              for (let key in elemObj){
                if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){//Here we change class of circle from 'red' to 'grey'
                  elemObj[key].node.previousElementSibling.classList.remove('true');
                  elemObj[key].node.previousElementSibling.classList.add('false');
                }
              }
              return i.LineTo;
            }
          }
        });


        let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
              let jsonObject;
                jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
            return jsonObject;

          });

      let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
      csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
        let remove=GlobalStorage.toDelete.remove()
        delete GlobalStorage.historyOfObjects[nameOfBlock];
      resolve(remove);

      });
    }

    else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName&&GlobalStorage.historyOfObjects[nameOfBlock]&&GlobalStorage.toDelete.fullCommonContrlName=="multiplier"){//Remove Multiplier block
        //console.log(GlobalStorage.historyOfObjects[nameOfBlock]);

        let multiplierName= GlobalStorage.toDelete.thisCommonContrlName;
        GlobalStorage.toDelete.forEach((item)=>{
          if(item.type=="path"){
            let preMultiplierArr=[];
              console.log(preMultiplierArr);
            let type=GlobalStorage.historyOfObjects[item.LineTo].shortName;
            let thisPropName=GlobalStorage.historyOfObjects[item.LineTo].thisCommonContrlName;
            GlobalStorage.historyOfObjects[item.LineTo].forEach((i,num)=>{
              //console.log(i);
              if(i.type=="path"&&i.LineFrom==multiplierName){
                //console.log(i);
                i.remove();
                delete GlobalStorage.historyOfObjects[item.LineTo][num];
                console.log(GlobalStorage.historyOfObjects[item.LineTo]);
              }
              else if(i.type=='path'&&i.LineFrom!=multiplierName&&i.node.lineFromCyrcle!="circleRight"&&typeof GlobalStorage.historyOfObjects[item.LineTo][num]!=="undefined"){
                //console.log(typeof GlobalStorage.historyOfObjects[item.LineTo][num] );
                preMultiplierArr.push(i.LineFrom);
              }

            })
              GlobalStorage.historyOfObjects[item.LineTo].forEach((i)=>{
                if(i.type=="path"&&i.node.lineFromCyrcle=="circleRight"){
                  let controlPropName=i.propertyOfEffect;
                  let effectNameLocal=i.LineTo;
                  console.log(preMultiplierArr);
                    console.log('RESULT');
                  csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${preMultiplierArr.join(',')}")`,()=>{
                      preMultiplierArr.length=0;
                  });

                }
              });
            //console.log(preMultiplierArr);
          }
        });

        let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
        //let itemsArray=GlobalStorage.toDelete.items;
        console.log(thisCommonContrlName);

        csInterface.evalScript(`$._ext.deleteEffect("${multiplierName}")`,(res)=>{//Remove effects from After Effects
          console.log('REMOVE');
          let remove=GlobalStorage.toDelete.remove();
          delete GlobalStorage.historyOfObjects[nameOfBlock];
          //preMultiplierArr=[];
        resolve();
        });

        /*let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
          if(i.node.nodeName=="path"){
            if(GlobalStorage.historyOfObjects[i.LineTo]&&GlobalStorage.toDelete.currentName!=i.LineTo){
              let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0];
              for (let key in elemObj){
                if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){
                  elemObj[key].node.previousElementSibling.classList.remove('true');
                  elemObj[key].node.previousElementSibling.classList.add('false');
                }
              }
              return i.LineTo;
            }
          }
        });*/


        /*let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
              let jsonObject;
                jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
            return jsonObject;

          });*/

    /*  let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
      /*csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
        let remove=GlobalStorage.toDelete.remove()
        delete GlobalStorage.historyOfObjects[nameOfBlock];
      resolve(remove);

    });*/
    }

    })
    .then((resolve)=>{

    resolve=undefined;
    GlobalStorage.toDelete=undefined;
    GlobalStorage.prevActive=undefined;


    });

}

export default innerDeleteFunction;
