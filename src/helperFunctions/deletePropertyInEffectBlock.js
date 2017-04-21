import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";

function deletePropertyInEffectBlock(propertyBlock, workBlockSet){
  propertyBlock.node.oncontextmenu=function(e){// handle click of a mouse right button
    e.preventDefault();
    let effectName=workBlockSet.setEffectName;
    let propertyName=GlobalStorage.controlProp.name;
    let itemLineFrom;
    console.log(GlobalStorage.controlProp);
    csInterface.evalScript(`$._ext.deletePropExpression("${effectName}","${propertyName}")`,(res)=>{//Remove property expression from  EffectBlock
      workBlockSet.forEach((item,num)=>{
        if(item.node.nodeName=="path"&&item.LineTo==effectName&&item.propertyOfEffect==propertyName){
          //console.log(GlobalStorage.historyOfObjects[item.LineTo][GlobalStorage.controlProp.type][GlobalStorage.controlProp.name]);
          itemLineFrom=item.LineFrom;
          GlobalStorage.historyOfObjects[item.LineTo][GlobalStorage.controlProp.type][GlobalStorage.controlProp.name]=false;

          item.remove();
            delete GlobalStorage.historyOfObjects[item.LineTo][num];
          GlobalStorage.controlProp.circle.classList.remove('true');
          GlobalStorage.controlProp.circle.classList.add('false');
        }
      })

      GlobalStorage.historyOfObjects[itemLineFrom].forEach((item,num)=>{
          if(item.type=="path"&&item.node.lineFromCyrcle=="circleRight"&&item.propertyOfEffect==propertyName&&item.LineTo==effectName){
            //console.log(item);
            //console.log(GlobalStorage.historyOfObjects[itemLineFrom][num]);
            delete GlobalStorage.historyOfObjects[itemLineFrom][num];
          }
      });
    });

  }
}

export default deletePropertyInEffectBlock;
