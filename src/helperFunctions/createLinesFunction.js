import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import arrSecondButton from "../startArrays/arrSecondButton";
import bezieLine from './bezieLine';
//This function is used in files "checkBackEnd" and "presetsBlocks"
function createLinesFunction(linesObj){
  let coordDif;
  let objElem;
  let LineFromX;
  let LineFromY;
  let LineToX;
  let LineToY;
  let MX;
  let MY;
  let LX;
  let LY;
  let pathCoords;
  let connectPath;
  linesObj.forEach((i, num)=>{//Create lines beetween a commonControl Block and an Effect Block

    for(let keyP in GlobalStorage.historyOfObjects[i.LineTo][0][0]){
      objElem=GlobalStorage.historyOfObjects[i.LineTo][0][0][keyP]

      if(objElem.node&&objElem.node.nodeName=='rect'&&objElem.attr('coordDif')&&objElem.attr('propDataName')==i.propertyOfEffect){
        objElem.node.previousElementSibling.classList.remove('false');
        objElem.node.previousElementSibling.classList.add('true');
        coordDif=objElem.attr('coordDif');
      }

    }

    if(GlobalStorage.historyOfObjects[i.LineTo].point.hasOwnProperty(i.propertyOfEffect)){

    }
    else if(GlobalStorage.historyOfObjects[i.LineTo].slider.hasOwnProperty(i.propertyOfEffect)){

      GlobalStorage.historyOfObjects[i.LineTo].slider[i.propertyOfEffect]=true;
    }
    else if(GlobalStorage.historyOfObjects[i.LineTo].angle.hasOwnProperty(i.propertyOfEffect)){

    }

    LineFromX= GlobalStorage.historyOfObjects[i.LineFrom][0].getBBox().x;

    LineFromY= GlobalStorage.historyOfObjects[i.LineFrom][0].getBBox().y;
    GlobalStorage.historyOfObjects[i.LineTo];

    LineToX=GlobalStorage.historyOfObjects[i.LineTo][0][1].getBBox().x;

    LineToY=GlobalStorage.historyOfObjects[i.LineTo][0][1].getBBox().y;

    MX=LineFromX+120;
    MY=LineFromY+16;
    LX=LineToX;
    LY=LineToY+15;
    pathCoords=bezieLine(MX,MY,LX,LY);
    
    connectPath = R.path(`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`);
    connectPath.attr({stroke:"black"});
    connectPath.toBack();

    connectPath.LineFrom=i.LineFrom;
    connectPath.LineTo=i.LineTo;
    connectPath.propertyOfEffect=i.propertyOfEffect;
    connectPath.coordDif=coordDif;
    connectPath.node.lineFromCyrcle="circleRight";
    GlobalStorage.historyOfObjects[i.LineFrom].push(connectPath);
    GlobalStorage.historyOfObjects[i.LineTo].push(connectPath);
    let itemArr=arrSecondButton.commonControls.filter((obj)=>{
      return obj.fullname==i.baseEffect;
    });

  });
}

export default createLinesFunction;
