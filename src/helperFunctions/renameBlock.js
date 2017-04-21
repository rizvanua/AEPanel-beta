import GlobalStorage from '../storage';
//Function to rename Block.  This function is used in files "helperFunctions/checkBackEnd","index.js"
function renameBlock(oldName,newName){

    if(GlobalStorage.historyOfObjects[oldName].setEffectName){//Rename EffectBlock
    GlobalStorage.historyOfObjects[oldName][0][1][1].attr({text:newName});
    GlobalStorage.historyOfObjects[oldName].setEffectName=newName;
    GlobalStorage.historyOfObjects[newName]=GlobalStorage.historyOfObjects[oldName];
    delete GlobalStorage.historyOfObjects[oldName];
    GlobalStorage.historyOfObjects[newName].forEach((i)=>{
      if(i.node.nodeName=='path'){
        i.LineTo=newName;
      }
    });

  }
  else if(GlobalStorage.historyOfObjects[oldName].thisCommonContrlName){//Rename CommonControlBlock
    GlobalStorage.historyOfObjects[oldName][0][1].attr({text:newName});
    GlobalStorage.historyOfObjects[oldName].thisCommonContrlName=newName;
    //console.log(GlobalStorage.historyOfObjects[oldName]);
    //let thisNewName=newName.replace(" Control", "");
    let thisNewName=newName;
    //console.log(GlobalStorage.historyOfObjects[oldName][2]);
    //GlobalStorage.historyOfObjects[oldName][2].attr({text:thisNewName})
    GlobalStorage.historyOfObjects[oldName].currentName=thisNewName;
    GlobalStorage.historyOfObjects[thisNewName]=GlobalStorage.historyOfObjects[oldName];
    delete GlobalStorage.historyOfObjects[oldName];
    //console.log(GlobalStorage.historyOfObjects[thisNewName]);
    GlobalStorage.historyOfObjects[thisNewName].forEach((i)=>{
      if(i.node.nodeName=='path'&&i.node.lineFromCyrcle=="circleRight"){
        i.LineFrom=thisNewName;
      }
      else if(i.node.nodeName=='path'&&i.node.lineFromCyrcle!="circleRight"){
          i.LineTo=thisNewName;
      }
    });
  }
}

export default renameBlock
