import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import arrSecondButton from "../startArrays/arrSecondButton";
import bezieLine from './bezieLine';
//This function is used in files "checkBackEnd" and "presetsBlocks"
function createLinesFunction(linesObj){
  linesObj.forEach((i, num)=>{//Create lines beetween a commonControl Block and an Effect Block
    //console.log(i);
    let coordDif;
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].getBBox());
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0]);
    for(let keyP in GlobalStorage.historyOfObjects[i.LineTo][0][0]){
      let objElem=GlobalStorage.historyOfObjects[i.LineTo][0][0][keyP]

      if(objElem.node&&objElem.node.nodeName=='rect'&&objElem.attr('coordDif')&&objElem.attr('propDataName')==i.propertyOfEffect){
        objElem.node.previousElementSibling.classList.remove('false');
        objElem.node.previousElementSibling.classList.add('true');
        coordDif=objElem.attr('coordDif');
      }
      //console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0][keyP].node.nodeName);
    }
    /*for(let keyH in GlobalStorage.historyOfObjects[i.LineTo][0][0]){
      console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0])
      if(GlobalStorage.historyOfObjects[i.LineTo][0][0][keyH].node=='rect'){
        console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0][keyH].attr('propDataName'))
      }
    }*/
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][i.propertyOfEffect]);
    //console.log(i.propertyOfEffect);
    //console.log(i);
    if(GlobalStorage.historyOfObjects[i.LineTo].point.hasOwnProperty(i.propertyOfEffect)){
      //console.log(GlobalStorage.historyOfObjects[i.LineTo].point[i.propertyOfEffect]);
    //  GlobalStorage.historyOfObjects[i.LineTo].point[i.propertyOfEffect]=true;
    }
    else if(GlobalStorage.historyOfObjects[i.LineTo].slider.hasOwnProperty(i.propertyOfEffect)){
      //console.log(GlobalStorage.historyOfObjects[i.LineTo].slider[i.propertyOfEffect]);
      GlobalStorage.historyOfObjects[i.LineTo].slider[i.propertyOfEffect]=true;
    }
    else if(GlobalStorage.historyOfObjects[i.LineTo].angle.hasOwnProperty(i.propertyOfEffect)){
      //console.log(GlobalStorage.historyOfObjects[i.LineTo].angle[i.propertyOfEffect]);
      //GlobalStorage.historyOfObjects[i.LineTo].angle[i.propertyOfEffect]=true;
    }
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][0][1].getBBox());
    //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("x"));
    let LineFromX= GlobalStorage.historyOfObjects[i.LineFrom][0].getBBox().x;
    //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("y"));
    let LineFromY= GlobalStorage.historyOfObjects[i.LineFrom][0].getBBox().y;
    GlobalStorage.historyOfObjects[i.LineTo];
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("x"));
    let LineToX=GlobalStorage.historyOfObjects[i.LineTo][0][1].getBBox().x;
    //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("y"));
    let LineToY=GlobalStorage.historyOfObjects[i.LineTo][0][1].getBBox().y;
    //let connectPath = R.path( ["M", LineFromX+120, LineFromY+16, "L", LineToX, LineToY+15 ] );
    let MX=LineFromX+120;
    let MY=LineFromY+16;
    let LX=LineToX;
    let LY=LineToY+15;
    let pathCoords=bezieLine(MX,MY,LX,LY);
    //item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${(LY)+offset}`});
    let connectPath = R.path(`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`);
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
