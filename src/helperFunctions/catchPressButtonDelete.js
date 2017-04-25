import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import innerDeleteFunction from "./innerDeleteFunction";

//Function which cathc pressing of "Delete" button

let catchPressButtonDelete = window.addEventListener("keydown",function(event){
    //event.preventDefault();
    let nameOfBlock;
    //console.log(event.target.nodeName!='INPUT');
    if(GlobalStorage.toDelete&&GlobalStorage.toDelete.currentName&&GlobalStorage.toDelete.currentName=="Master"){
      return false;
    }
//console.log(event);
  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
  //csInterface.registerKeyEventsInterest(keyEventsInterest);

//console.log(GlobalStorage.distribitorObjectsStorage[genId]);

if(GlobalStorage.toDelete!=undefined&&event.target.nodeName!='INPUT'&&event.keyCode==46)
  {
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

});

export default catchPressButtonDelete;
