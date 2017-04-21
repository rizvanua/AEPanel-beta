//import arrButton from "./startArrays/arrButtonMain.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import mainBlock from "../mainBlock/mainBlock.js";
//import secondSideBarBlocks from "./secondSideBarBlocks.js";
import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';
import moveEffects  from "../helperFunctions/moveEffects.js";
import presetsBlocks from "../mainBlock/presetsBlocks.js";

class leftMenu {
  constructor(){
    let wrapUl=$('<ul>',{
      id:"nav"
    });
//blocks of First Menue
    let clearButton=$('<li>',{
      id:'clear'
    }).append("<div class='bage-small clear'></div>");
    wrapUl.append(clearButton);
    clearButton.click(()=>{
       let toClearArr=GlobalStorage.historyOfObjects.itemArray.map((item)=>{
           return item.name;
       });
       toClearArr=_.without(toClearArr, 'Master', 'Mantra VR');

       if(toClearArr.length>0){
         //toClearArr=toClearArr.join(';');
         //console.log(toClearArr);
         toClearArr.forEach((item)=>{
           if(GlobalStorage.historyOfObjects[item]){
             GlobalStorage.historyOfObjects[item].remove();
             delete GlobalStorage.historyOfObjects[item];
           }
         });
         csInterface.evalScript(`$._ext.clearLayer("${toClearArr}")`);
         var newItemArr=[];
         GlobalStorage.historyOfObjects.itemArray.forEach((item)=>{
           if(item.name=="Mantra VR"||item.name=="Master"){
             newItemArr.push(item)
           }
         });
         //console.log(newItemArr);
          GlobalStorage.historyOfObjects.itemArray=newItemArr;
          GlobalStorage.historyOfObjects.itemArray=_.sortBy(GlobalStorage.historyOfObjects.itemArray, function(item){

              return item.y;// Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
          });
         let lastObj=_.last(GlobalStorage.historyOfObjects.itemArray);
         GlobalStorage.undermostEffectBlock.y=lastObj.y;
         GlobalStorage.undermostCommonControlBlock.y=10;
       }

    })

    let resetButton=$('<li>',{
      id:'reset'
    }).append("<div class='bage-small reset'></div>");
    wrapUl.append(resetButton);
    resetButton.click(()=>{
      let resetArr=[];
      let obj={};
      console.log(GlobalStorage.historyOfObjects);
      for(let key in GlobalStorage.historyOfObjects){
        if(key!="itemArray"){
          obj.name=key;
          if(GlobalStorage.historyOfObjects[key].fullCommonContrlName){
            obj.blockType=GlobalStorage.historyOfObjects[key].fullCommonContrlName;
          }
          else{
            obj.blockType=GlobalStorage.historyOfObjects[key].baseEffect;
          }

        }
      }
      csInterface.evalScript(`$._ext.resetLayer()`);
    });





    let presets=$('<li>',{
      id:'presets'
    }).append("<div class='bage-small presets'></div>");
    let presetsUl=presets.children().append("<ul class='subs'></ul>");
    wrapUl.append(presets);

    arrSecondButton.presets.forEach((item,i)=>{
      let presetLi=$('<li>',{
        id:item.name,
        text:item.name
      });

      presetLi.click(()=>{
          //let cordX=250;
          //console.log(arrSecondButton.presets);
          let workBlock=new presetsBlocks().createPresetsBlocks(GlobalStorage.effectsCordX,item);
      });
      presetsUl.children('ul').append(presetLi);
      //console.log(index);
    });

    let menuDiv=$('#menuleft').append(wrapUl);
    }

}

export default leftMenu;
