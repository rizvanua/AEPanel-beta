//import SideBar from "./sideBar/sideBar.js";
//import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";
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


let myReq;
let status=false;
let AnimationFrame;
let filePresetObject;
/**/
/*window.localStorage.hey="one";*/
//console.log(window.localStorage);
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
  console.log('ENTER');
  GlobalStorage.renameObj.newName=GlobalStorage.input.val();
  //console.log(GlobalStorage.input.val());
  if(GlobalStorage.renameObj.oldName!=GlobalStorage.renameObj.newName){
    renameBlock(GlobalStorage.renameObj.oldName,GlobalStorage.renameObj.newName);
    csInterface.evalScript(`$._ext.renameEffect("${GlobalStorage.renameObj.oldName}","${GlobalStorage.renameObj.newName}")`, (res)=>{

      GlobalStorage.historyOfObjects[res].forEach((i)=>{//Change CommonContrlName in expressions which are connected with this commonControl
        //console.log(GlobalStorage.historyOfObjects[res]);
        let multiplierArr=GlobalStorage.historyOfObjects[res].multiplierArr.join(',');
        if(i.node.nodeName=='path'&&i.node.lineFromCyrcle=="circleRight"){
          let type=GlobalStorage.historyOfObjects[res].shortName;
          if(type&&GlobalStorage.historyOfObjects[i.LineTo]){
            let effectNameLocal=i.LineTo;
            let controlPropName=res;
            let thisPropName=i.propertyOfEffect;
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

//window.addEventListener('keydown',function(e){
       //alert("window:keydown detected");
//});

/*document.addEventListener('mouseleave',function(e){
  let effectCheckArr=[]
      setTimeout(function() {

        csInterface.evalScript(`$._ext.checkChangesGlobal()`, (res)=>{
            //console.log(GlobalStorage.historyOfObjects);
            if(res&&res!="undefined"){
              effectCheckArr=res.split(',');
              if(GlobalStorage.effectCheckArr.length>effectCheckArr.length){
                console.log(GlobalStorage.effectCheckArr);
                console.log(effectCheckArr);
                let promise = new Promise(
                          (resolve) => {
                            let blockToRemove=_.difference(GlobalStorage.effectCheckArr, effectCheckArr);
                            GlobalStorage.effectCheckArr=effectCheckArr;
                            GlobalStorage.blockToRemove=blockToRemove[0];
                            resolve(blockToRemove);
                          }
                        );
                        promise.then (
                          (resolve)=>{
                            document.dispatchEvent(deleteBlockEvent);
                            //console.log(effectToRemove[0]);
                          }

                        );


              }
              else{
                console.log(GlobalStorage.effectCheckArr);
                GlobalStorage.effectCheckArr=effectCheckArr;
              }
            }



          //console.log(res);

        });
              requestAnimationFrame(startCheck);

          }, 500);
});*/

/*document.addEventListener('mouseenter',function(e){
       //alert("window:mouseenter detected");
       cancelAnimationFrame(AnimationFrame);
});*/
//let path = "./test.js";
//console.log();
let systemPathOS=csInterface.getSystemPath(SystemPath.EXTENSION);//path to files
//let MantraPath=csInterface.getSystemPath(SystemPath.HOST_APPLICATION).replace("AfterFX.exe", "Plug-ins/Mettle/Mantra/");
/*let readDirMantra = window.cep.fs.readdir(MantraPath);
if(readDirMantra.err === 0)
{
  let arrFilesMantra=readDirMantra.data;
  arrFilesMantra.forEach((file)=>{
    let objMantra={}
    let nameEffect=file.replace("Mantra ", "").replace(".aex", "");
    if (nameEffect=="VR AE")
    {
      nameEffect="Mettle Mantra VR";
    }
    objMantra.name=nameEffect;
    arrSecondButton.effects.push(objMantra);

  });
}*/
let path = csInterface.getSystemPath(SystemPath.EXTENSION)+"/presets/";// here we get information from JSON files
//console.log(path);
let readDir = window.cep.fs.readdir(path);
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
      console.log('filePresetObject',filePresetObject);
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
