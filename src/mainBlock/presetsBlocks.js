import R from "../raphaelContainer.js";
import mainBlock from "./mainBlock.js";
import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import moveEffects  from "../helperFunctions/moveEffects.js";
import createLinesFunction from '../helperFunctions/createLinesFunction';



class presetsBlocks{

  createPresetsBlocks(cordX,presetsType){
    //console.log(presetsType);
      this.createPresetsEffects(cordX,presetsType);
  }


  createPresetsEffects(cordX,presetsType){
    let workBlock;
    let itemArr;
    let objPreset;
    let propertyOfEffectString;
    let promise;
    //let lowestCoordY=GlobalStorage.undermostEffectBlock.y;
    //console.log(GlobalStorage.arrOfPresetsEffects[presetsType.name]);
  //  GlobalStorage.arrOfPresetsEffects[presetsType.name].forEach((itemName)=>{
  let effectBlocks=GlobalStorage.arrOfPresetsEffects[presetsType.name].propsArray;
  //console.log(effectBlocks);
  effectBlocks.forEach((obj, num)=>{
//console.log(obj);
    //console.log(this.innerForEach(obj));
    /*let itemArr=arrSecondButton.effects.filter((a, index)=>{
      let keyName=Object.keys(obj)[0].replace (/(^")|("$)/g, '')
      console.log(keyName);
      return arrSecondButton.effects[index].name==keyName;
      //return arrSecondButton.effects[index].name==keyName.slice(0, -1);
    });*/

    let item=Object.keys(obj)[0].replace (/(^")|("$)/g, '');
    propertyOfEffectString=this.innerForEach(obj);
      //console.log(" propertyOfEffectString ",propertyOfEffectString);
        csInterface.evalScript(`$._ext.applyEffectPresets("${item}",${propertyOfEffectString})`,(res)=>{//push data into extend script
        //let lowestCoordY=GlobalStorage.undermostEffectBlock.y+=40;
        objPreset=JSON.parse(res);
        console.log(" objPreset /// ",objPreset);
        console.log(item);
        promise = new Promise(function(resolve, reject) {
          if(item!='Slider Control'&&item!='Angle Control'&&item!='Point Control'){
            workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,objPreset);
          }
          else{
            itemArr=arrSecondButton.commonControls.filter((a, index)=>{
              return arrSecondButton.commonControls[index].name==item;
            });
            console.log(itemArr);
            workBlock=new mainBlock().createBlockCommonControls(GlobalStorage.controlsCordX,GlobalStorage.undermostCommonControlBlock.y+=40,itemArr[0],false,objPreset.name);
          }
          resolve(objPreset.linesObj);
        });
        promise.then(resolve=>{
          if (resolve!=0){
            createLinesFunction(resolve);
          }
        });

          //console.log(workBlock);
          moveEffects(workBlock);
          GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
      });

    /*else{
      //console.log(propertyOfEffectString);
      csInterface.evalScript(`$._ext.applyEffectPresets("${item}",${propertyOfEffectString})`,(res)=>{//push data into extend script
      //let lowestCoordY=GlobalStorage.undermostEffectBlock.y+=40;
      let objPreset=JSON.parse(res);
      console.log('objPreset',objPreset);
        //let workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,objPreset);
        let workBlock=new mainBlock().createBlockCommonControls(GlobalStorage.controlsCordX,GlobalStorage.undermostCommonControlBlock.y+=40,item,false, objPreset);
        //console.log(workBlock);
        moveEffects(workBlock);
        GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
    });
  }*/


  });
    //for (var key in effectBlocks) {



      //let propertyOfEffectString=JSON.stringify(effectBlocks[key]);

      //console.log(propertyOfEffectString);
      /*csInterface.evalScript(`$._ext.applyEffectPresets("${item.name}",${propertyOfEffectString})`,(res)=>{//push data into extend script
      lowestCoordY+=40
        let workBlock=new mainBlock().createBlockEffects(cordX,lowestCoordY,item,res);
        console.log(workBlock);
        moveEffects(workBlock);
        GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
    });*/

    //}

      let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name];
      /*console.log(propertyOfEffect);
      function stringProp (obj){
        let ObjOfString={};
      for (var key in obj) {

                   ObjOfString[`"${key}"`]=`${obj[key]}`;
        }
        return ObjOfString;
      }*/
      //let testData=stringProp(propertyOfEffect);
      //let propertyOfEffectString=JSON.stringify(stringProp(propertyOfEffect));

      /*let testX=JSON.stringify(testData);
      let objParsed=JSON.parse(testX);
      console.log(objParsed["Mobius Zoom"].split(';'))*/
      //let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name][itemName].join(';');
      /*console.log(propertyOfEffect.forEach((i)=>{
        console.log(i);
      }));*/


    //});
  }
  innerForEach (obj){
    let objToStringlify={};
    let objName=Object.keys(obj)[0];
    obj[objName].forEach((innerObj, innerNum)=>{
      //let innerObjName=Object.keys(innerObj)[0];
      //console.log('innerForEach',Object.keys(innerObj));
      //let innerObjName=Object.keys(innerObj)[0];
      let innerObjName=Object.keys(innerObj).forEach((item)=>{
        objToStringlify[item]=innerObj[item];
      });
      //console.log(innerObjName);
      //console.log(innerObj[innerObjName]);
    })
    return JSON.stringify(objToStringlify);
  }

};

export default presetsBlocks;
