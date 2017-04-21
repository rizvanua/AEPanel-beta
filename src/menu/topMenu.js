//import arrButton from "./startArrays/arrButtonMain.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import mainBlock from "../mainBlock/mainBlock.js";
//import secondSideBarBlocks from "./secondSideBarBlocks.js";
import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';
import moveEffects  from "../helperFunctions/moveEffects.js";
import presetsBlocks from "../mainBlock/presetsBlocks.js";

class topMenu {
  constructor(){
    let wrapUl=$('<ul>',{
      id:"nav"
    });
//blocks of First Menue
  let commonControls=$('<li>',{
    id:'commonControls'
  }).append("<div class='bage-small'>Controls</div>");
  let commonControlsUl=commonControls.append("<ul class='subs'></ul>");
  wrapUl.append(commonControls);

  let effects=$('<li>',{
    id:'effects'
  }).append("<div class='bage-small'>Effects</div>");
  let effectsUl=effects.append("<ul class='subs'></ul>");
  wrapUl.append(effects);



//blocks of second Menue with draggable
    arrSecondButton.effects.forEach((item,i)=>{
      if(item.name=="Mettle Mantra VR"){
        return false
      }
      let effectLi=$('<li>',{
        id:item.name,
        text:item.name,
        dataPoi:item.poi,
        class:'effects'
      });

    effectLi.click(()=>{
        //let cordX=250;
        csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{//push data into extend script
          let obj=JSON.parse(res);
          console.log(obj);
          let workBlock=new mainBlock().createBlockEffects(GlobalStorage.effectsCordX,GlobalStorage.undermostEffectBlock.y+=40,item,obj);
          moveEffects(workBlock);
          //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
      });
    });
      effects.children('ul').append(effectLi);
      //console.log(item);
    });

    arrSecondButton.commonControls.forEach((item,i)=>{
      let commonControlLi=$('<li>',{
        id:item.name,
        text:item.name
      });
      commonControlLi.click(()=>{
          //let cordX=100;
          csInterface.evalScript(`$._ext.createControl("${item.name}")`,(res)=>{//push data into extend script
            //console.log(res);
            let workBlock=new mainBlock().createBlockCommonControls(GlobalStorage.controlsCordX,GlobalStorage.undermostCommonControlBlock.y+=40,item,false, res);
            moveEffects(workBlock);
            //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
        });
      });
      commonControlsUl.children('ul').append(commonControlLi);
      //console.log(item);
    });



    let menuDiv=$('#menutop').append(wrapUl);
    }



}

export default topMenu;
