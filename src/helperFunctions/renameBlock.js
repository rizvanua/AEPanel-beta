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

    let thisNewName=newName;

    GlobalStorage.historyOfObjects[oldName].currentName=thisNewName;
    GlobalStorage.historyOfObjects[thisNewName]=GlobalStorage.historyOfObjects[oldName];
    delete GlobalStorage.historyOfObjects[oldName];
    
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
