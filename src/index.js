import pointCoordsDrag from './controls/pointCoordsDrag.js';
import arrSecondButton from "./startArrays/arrSecondButton";
import csInterface from './csInterface';
import forEachInGroup from './snapCustomFunctions/forEachInGroup';
import toogleAttr from './snapCustomFunctions/toogleAttr';
import toFrontToBack from './snapCustomFunctions/toFrontToBack';
import R from "./raphaelContainer.js";
import catchPressButtonDelete from "./helperFunctions/catchPressButtonDelete";
import deleteBlockEvent from "./customEvents/deleteEventListener";
import GlobalStorage from './storage';
import checkBackEnd from "./helperFunctions/checkBackEnd";
import renameBlock from "./helperFunctions/renameBlock";
import leftMenu from "./menu/leftMenu";
import topMenu from "./menu/topMenu";
import rightMouseClick from "./helperFunctions/rightMouseClick";
import createControlsWindows from './controls/createControlsWindows.js';
import '../css/master.scss'


let myReq;
let status=false;
let AnimationFrame;
let filePresetObject;
let multiplierArr;
let effectNameLocal;
let controlPropName;
let thisPropName;
let type;
let systemPathOS;
let path;
let readDir;


let jsonString=`[{"keyCode": 	46},{"keyCode": 46,"ctrlKey": true}]`;
csInterface.registerKeyEventsInterest(jsonString);//register buttons to use in HTML5 panel
rightMouseClick();
GlobalStorage.container=$("#container");
GlobalStorage.input=$("<input type='text' id='input'/>");
GlobalStorage.container.append(GlobalStorage.input);
new createControlsWindows().createGround();
GlobalStorage.input.keydown((event)=>{
  //console.log(event);
if(GlobalStorage.renameObj.oldName&&event.keyCode==13){
  //console.log('ENTER');
  GlobalStorage.renameObj.newName=GlobalStorage.input.val();
  //console.log(GlobalStorage.input.val());
  if(GlobalStorage.renameObj.oldName!=GlobalStorage.renameObj.newName){
    renameBlock(GlobalStorage.renameObj.oldName,GlobalStorage.renameObj.newName);
    csInterface.evalScript(`$._ext.renameEffect("${GlobalStorage.renameObj.oldName}","${GlobalStorage.renameObj.newName}")`, (res)=>{

      GlobalStorage.historyOfObjects[res].forEach((i)=>{//Change CommonContrlName in expressions which are connected with this commonControl
        //console.log(GlobalStorage.historyOfObjects[res]);
        multiplierArr=GlobalStorage.historyOfObjects[res].multiplierArr.join(',');
        if(i.node.nodeName=='path'&&i.node.lineFromCyrcle=="circleRight"){
          type=GlobalStorage.historyOfObjects[res].shortName;
          if(type&&GlobalStorage.historyOfObjects[i.LineTo]){
            effectNameLocal=i.LineTo;
            controlPropName=res;
            thisPropName=i.propertyOfEffect;
            //console.log(effectNameLocal);
            //console.log(controlPropName);
            //console.log(thisPropName);

            csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${thisPropName}","${controlPropName}","${type}","${multiplierArr}")`);
            //csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${thisPropName}","${controlPropName}","${type}")`);
          }
          else if(i.LineTo&&!GlobalStorage.historyOfObjects[i.LineTo]){
            delete i.LineTo;
          }

        }
      });

    });
  }

  GlobalStorage.input.css({top:0, left:0, position:'absolute', display:'none'});
}
});
GlobalStorage.input.blur(()=>{GlobalStorage.input.css({display:'none'})});


systemPathOS=csInterface.getSystemPath(SystemPath.EXTENSION);//path to files

path = csInterface.getSystemPath(SystemPath.EXTENSION)+"/presets/";// here we get information from JSON files
//console.log(path);
readDir = window.cep.fs.readdir(path);
if(readDir.err === 0)
{
  let arrFiles=readDir.data;
  arrFiles.forEach((file)=>{
    //console.log(file);
    let filePath=path+file
    let result = window.cep.fs.readFile(filePath);
    if(result.err === 0)
    {
//console.log(result.data);
      try {
      filePresetObject=JSON.parse(result.data);
      //console.log('filePresetObject',filePresetObject);
      arrSecondButton.presets.push({name:filePresetObject.name})
      GlobalStorage.arrOfPresetsEffects[filePresetObject.name]={};
      GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propsArray=[];
      filePresetObject.arrOfPresetsEffects.forEach((index,i)=>{
        for (var key in index) {
          let obj={[`"${key}"`]:index[key]};
          GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propsArray.push(obj);
        }
      });

      } catch (err) {
      console.log(err);
      }
    }
    else
    {

    }
  });

     //console.log(readDir.data);
     //let readDir = window.cep.fs.readFile(path);
} else
{

}

/**/
let createTopMenu = new topMenu();

let createLeftMenu = new leftMenu();

let checkStart=new checkBackEnd();

//pattern for radio buttons
/*let imageOFF=R.image('img/radio-button-off.png',6,6,12,12).pattern(6,6,12,12);
GlobalStorage.radioOFF=R.circle(0,0,6).attr({
  fill:imageOFF
}).toDefs();
let imageON=R.image('img/radio-button-on.png',6,6,12,12).pattern(6,6,12,12);
GlobalStorage.radioON=R.circle(0,0,6).attr({
  fill:imageON
}).toDefs();*/
/*let radioOFF=S.rect(0,0,120,32,5).attr({
fill:image
}).toDefs();*/


document.getElementsByTagName('svg')[0].addEventListener('click',(e)=>{

  if(e.target.nodeName==='svg'){

    if(GlobalStorage.toDelete!=undefined&&GlobalStorage.toDelete[1]){
      GlobalStorage.toDelete[1].attr(
        {stroke: "none"}
      );
    }

    if(GlobalStorage.toDelete&&GlobalStorage.prevActive&&GlobalStorage.toDelete[1].node&&GlobalStorage.prevActive[1].node&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){

      GlobalStorage.prevActive[1].attr(
        {stroke: "none"}
      );
    }

    //GlobalStorage.toDelete=undefined;


  }

});
