import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';
import bezieLine from './bezieLine';

// Class which DRAWS CONNECTIONS line from/to blocks. We use this in files: "draggableSet.js

class drawLineFromTo{

  constructor(){
    this.ox;
    this.oy;
   }

  startdrawLineFromTo(_this,thisSet){
    //console.log(thisSet);
    this.ox=thisSet[0].getBBox().x+120;
    this.oy=thisSet[0].getBBox().y+15;



    /*let connectPath = R.path( ["M", _this.ox, _this.oy, "L", _this.ox, _this.oy ] )*/
    let connectPath = R.path(`M${this.ox} ${this.oy}L${this.ox} ${this.oy}`).attr({stroke:"blue"});
    connectPath.node.lineFromCyrcle=_this.node.circleName;//Here we asign from which one circle goes the Line (Right cyrcle or LeftCyrcle)
    connectPath.node.shortControlName=thisSet.shortName;
    connectPath.node.displayControlname=thisSet.currentName;//display the name of control or Multiplier
    connectPath.node.nameOfControl=thisSet.fullCommonContrlName//the name of current commonControls
    GlobalStorage.currentLine=connectPath;//Send just created Line into GlobalStorage object currentLine
    //console.log(GlobalStorage.currentLine);
    this.multiplierArr;
    thisSet.push(GlobalStorage.currentLine);

  }

  moveLine(_this,dx,dy,thisSet){
    //console.log(GlobalStorage.controlProp);
    //console.log(GlobalStorage.overMouseSet);
//console.log(GlobalStorage.currentLine.node.shortControlName);
//console.log(event.target);
//console.log(`M${_this.ox} ${_this.oy}L${(_this.ox*1+dx)-5} ${(_this.oy*1+dy)-5}`);
//console.log(_this.ox);
//console.log(_this.oy);
//console.log(dx);
//console.log(dy);

this.ox=thisSet[0].getBBox().x+120;
this.oy=thisSet[0].getBBox().y+15;
let destx = (this.ox * 1 + dx - 5);
let desty = (this.oy * 1 + dy - 5);

let pathCoords=bezieLine(this.ox,this.oy,destx,desty);

  GlobalStorage.currentLine.attr({d:`M${this.ox} ${this.oy}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${destx} ${desty}`});  
  /*var typeOfControll=GlobalStorage.currentLine.node.shortControlName;

    if(GlobalStorage.overMouseSet&&GlobalStorage.currentLine&&GlobalStorage.overMouseSet[typeOfControll]===true){
      console.log(GlobalStorage.overMouseSet[typeOfControll]);
      GlobalStorage.currentLine.attr({cursor: "no-drop"});
    }
    else{
      GlobalStorage.currentLine.attr({cursor: "default"});
    }*/

  }

  endDrawLine(_this,thisSet){
    //console.log(GlobalStorage.overMouseSet);


    if(GlobalStorage.currentLine){
      let typeOfControll=GlobalStorage.currentLine.node.shortControlName;
      //console.log(typeOfControll);

      //console.log(GlobalStorage.currentLine);

    if (GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null&&!GlobalStorage.overMouseSet.fullCommonContrlName&&GlobalStorage.controlProp.type==GlobalStorage.currentLine.node.shortControlName){// in this case the current Line has connection from CommonControl to EffectBlock

      GlobalStorage.controlProp.circle.classList.remove('false');
      GlobalStorage.controlProp.circle.classList.add('true');

      let controlPropName=GlobalStorage.controlProp.name;
      //console.log(GlobalStorage.controlProp);
      if(GlobalStorage.overMouseSet[typeOfControll][controlPropName]===true){
        //console.log(GlobalStorage.overMouseSet[typeOfControll]);
        GlobalStorage.overMouseSet.forEach((item,num)=>{
          //console.log(item);
          //console.log(item.type=="path");
          //console.log("TRUE");
          //console.log(item.propertyOfEffect);
          //console.log(controlPropName);
          if(item.type=="path"&&item.propertyOfEffect==controlPropName){
            //console.log(item);
            item.remove();
          }
        });
      }

      GlobalStorage.currentLine.attr({stroke:"black"});//add black color for already successfully connected line
      let overMouseSet=GlobalStorage.overMouseSet;
      let effectNameLocal=overMouseSet.setEffectName;
      console.log();

      //console.log(GlobalStorage.currentLine.attr("path"));
      //adjust coords of path to draw line into center of block
      let PathString=Snap.parsePathString(GlobalStorage.currentLine);
      console.log(PathString);
      let MX=PathString[0][1];//get coords X of the linked CommonControlBlock
      let MY=PathString[0][2];//get coords Y of the linked CommonControlBlock
      let LX=overMouseSet[0].getBBox().x;//get coords X of the linked EffectBlock
      let LY=overMouseSet[0].getBBox().y;//get coords Y of the linked EffectBlock
          LY=LY+16+(GlobalStorage.controlProp.coordDif*1);
      let pathCoords=bezieLine(MX,MY,LX,LY);
      console.log(pathCoords);
      GlobalStorage.currentLine.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});// apply new coords
      //GlobalStorage.currentLine.attr("path",`M${MX} ${MY}L${LX} ${LY+16+(GlobalStorage.controlProp.coordDif*1)}`);// apply new coords
      //
      console.log(_this.node.effectName);
      GlobalStorage.currentLine.LineFrom=thisSet.thisCommonContrlName;//add which effect has been connected with this line
      GlobalStorage.currentLine.LineTo=effectNameLocal;
      GlobalStorage.currentLine.coordDif=GlobalStorage.controlProp.coordDif;
      GlobalStorage.currentLine.baseEffect=overMouseSet.baseEffect;// base name of an effect
      GlobalStorage.currentLine.propertyOfEffect=controlPropName;//name of property (for example "Point of Interest", "FOV" etc)
      //console.log(GlobalStorage.currentLine);
      //console.log(GlobalStorage.overMouseSet);
      let propName=thisSet.fullCommonContrlName;
      let thisPropName=thisSet.thisCommonContrlName;
      let promise= new Promise((resolve)=>{
              //resolve(overMouseSet.push(GlobalStorage.currentLine).toBack());//Push curent Line into destination set
              resolve(GlobalStorage.overMouseSet.push(GlobalStorage.currentLine));//Push curent Line into destination set
                //console.log(GlobalStorage.overMouseSet[typeOfControll]);
              GlobalStorage.overMouseSet[typeOfControll][controlPropName]=true;
              //console.log(thisSet.multiplierArr);
            }).then((resolve)=>{
              return GlobalStorage.overMouseSet=null;//clear objects in global storage
            }).then((res)=>{
              GlobalStorage.currentLine.toBack();//send line to back
              GlobalStorage.currentLine=null;//clear objects in global storage
              //Call to ExtScript
//console.log(effectNameLocal);
//console.log(thisPropName);


let type=thisSet.shortName;
let preMultiplierArr=[];
thisSet.forEach((item,num)=>{
  if(item.type=='path'&&item.node.lineFromCyrcle!="circleRight"&& typeof thisSet[num]!=="undefined"){
    preMultiplierArr.push(item.LineFrom);
  }
});
this.multiplierArr=preMultiplierArr.join(',');
console.log(this.multiplierArr);
csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${this.multiplierArr}")`);
//console.log(GlobalStorage.controlProp.type);
//console.log(GlobalStorage.controlProp.name);

/*//console.log(overMouseSet[0].getBBox());
                  switch (thisSet.shortName) {
                    case "point":

                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${this.multiplierArr}")`);
                      break;
                    case "angle":

                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${this.multiplierArr}")`);
                      break;
                    case "slider":

                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${this.multiplierArr}")`);
                      break;
                    case "Strength":
                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","Strength","${thisPropName}")`);
                      break;
                    default:
                    GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
                    thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
                    GlobalStorage.currentLine=null;//clear objects in global storage
                  }*/

              //
            });


    }
    else if(GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null&&GlobalStorage.overMouseSet.fullCommonContrlName&&GlobalStorage.currentLine.node.nameOfControl=='multiplier'&&GlobalStorage.currentLine.node.displayControlname!==GlobalStorage.overMouseSet.currentName){//connect line from Multiplier to CommonContrl
            //console.log(GlobalStorage.overMouseSet.currentName);
            //console.log(GlobalStorage.currentLine.node.displayControlname);
            //GlobalStorage.currentLine.toBack();
            let preMultiplierArr=[];
              let promise= new Promise((resolve)=>{
                GlobalStorage.currentLine.LineFrom=GlobalStorage.currentLine.node.displayControlname;//add which CommonContrlol is connected with this line
                GlobalStorage.overMouseSet.push(GlobalStorage.currentLine)//Push curent Line into destination set
                //GlobalStorage.overMouseSet.multiplierArr.push(GlobalStorage.currentLine.LineFrom);
                console.log(GlobalStorage.overMouseSet.shortName);
                GlobalStorage.overMouseSet.forEach((item,num)=>{
                  if(item.type=='path'&&item.node.lineFromCyrcle!="circleRight"&&typeof GlobalStorage.overMouseSet[num]!=="undefined"){
                    preMultiplierArr.push(item.LineFrom);
                  }
                });
                this.multiplierArr=preMultiplierArr.join(',');
                console.log();
                //this.multiplierArr=GlobalStorage.overMouseSet.multiplierArr;
                let type=GlobalStorage.overMouseSet.shortName;
                let thisPropName=GlobalStorage.overMouseSet.thisCommonContrlName;
                GlobalStorage.overMouseSet.forEach((item)=>{
                  if(item.type=="path"&&item.node.lineFromCyrcle=="circleRight"){
                    let controlPropName=item.propertyOfEffect;
                    console.log(item.propertyOfEffect);
                    //let controlPropName=item.LineFrom;
                    let effectNameLocal=item.LineTo;
                    console.log();
                    csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}","${this.multiplierArr}")`);
                  };
                });
                GlobalStorage.currentLine.LineTo=GlobalStorage.overMouseSet.currentName;
                GlobalStorage.currentLine.attr({stroke:"black"}); //add black color for already successfully connected line
                resolve('set');
              });
              promise.then((resolve)=>{
                GlobalStorage.overMouseSet=null;//clear objects in global storage
                GlobalStorage.currentLine.toBack();//send line to back
                GlobalStorage.currentLine=null;//clear objects in global storage
              });



    }
    else if(GlobalStorage.overMouseSet===null&&GlobalStorage.currentLine!==null){//in this case the current Line dosen't has a destination block
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage

    }
    else if(GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null){
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage
    }

      }

  }


}
export default drawLineFromTo;
