import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import moveEffects  from "./moveEffects.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';
import bezieLine from './bezieLine';

//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it
Snap.plugin((Snap, Element, Paper, global)=>{
  Snap.Set.prototype.draggableSet = function (setObj,type) {
    let  thisSet = this;
    let thisElem;
   this.origTransform;
  //let bbox=this.getBBox();
  //this.curenLineLocal;
  var moveFnc = function (dx, dy) {

    var _this = this;
    if(thisElem){// if circle we drag we run function to create line
        new drawLineFromTo().moveLine(thisElem,dx,dy,thisSet);
    }
    else if (this.node.nodeName!= 'circle')
    {

    //this.fx = this.ox + dx;
    //this.fy = this.oy + dy;


    thisSet.forEach((item, i)=> {
      if(type=="effects"){
//console.log(thisSet);
        EffectMove(thisSet, item, i, _this, dx, dy);
      }
      else if(type=="commonControls"||type=="multiplier"){
console.log('MOVEEEE');
        CommonControlsMove(thisSet, item, i, _this, dx, dy);
      }
      if(type=="distributor"){
      //console.log(item);
        //console.log(i);
        //console.log(_this);
          DistributorRootMove(item, i, _this, dx, dy);
      }

    });
  }

  },

  startFnc = function startFnc(poin1,point2,event) {
  let thisGroupCoord;
  GlobalStorage.input.css({display:'none'});
    //let bBoxCoordSet=R.set();
    if(thisSet.thisCommonContrlName){
      thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Common Control group
    }
  else{
    thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Effect group
  }

  console.log('START');
  let d = new Date();
  GlobalStorage.clickTime.downTime=d.getTime();//get time of START event in miliseconds and save it in GlobalStorage.clickTime (this data is used in file "MainBlock", function "createBlockCommonControls"  to filter click from mouse event in draggable function)

    if (event.target.nodeName!='circle'&&!event.target.circleName)
    {
      thisElem=undefined;
      this.ox = thisGroupCoord.x;// get central point of this group (X coord)
        this.oy = thisGroupCoord.y;// get central point of this group (Y coord)
    }
    else {// if circle we drag we run function to create line
      thisElem=thisSet[0][3];
      //console.log(thisSet[0][3]);
      //let coord=thisSet[0].getBBox();
      new drawLineFromTo().startdrawLineFromTo(thisElem,thisSet);
    }



  },

  endFnc = function endFnc() {

    console.log('END');
    let d = new Date();
    GlobalStorage.clickTime.upTime=d.getTime();//get time of EVENT event in miliseconds and save it in GlobalStorage.clickTime (this data is used in file "MainBlock", function "createBlockCommonControls"  to filter click from mouse event in draggable function)
        if(thisElem){

          new drawLineFromTo().endDrawLine(thisElem,thisSet);
          thisElem=undefined;
        }
        else{// if circle we drag we run function to create line
          this.origTransform=this.transform().local;
                moveEffects (thisSet);
        }


      //}

    //console.log(GlobalStorage.historyOfObjects);


  }
this.forEach((elem)=>{

  if(elem.node.nodeName=='g'){// if group we drag block
    elem.drag(moveFnc, startFnc, endFnc);
  }

  })
};
/**/

function EffectMove (thisSet, item, i, _this, dx, dy){


  if (item.node.nodeName == 'path') {
    let PathString=Snap.parsePathString(item);
    let offset=item.coordDif*1;
    let MX=PathString[0][1];
    let MY=PathString[0][2];
    let LX=_this.ox+ dx;
    let LY=_this.oy+ dy+15;

    if(thisSet[0].attr('clip-path')!='none'){
        let pathCoords=bezieLine(MX,MY,LX,LY);
      item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});
      //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${_this.oy+ dy+15}`);
    }
    else if(thisSet[0].attr('clip-path')=='none'){
        LY=(LY)+offset
        let pathCoords=bezieLine(MX,MY,LX,LY);
      item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});
      //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${(_this.oy+ dy+15)+offset}`);
    }



  }
  else if(item.node.nodeName == 'g'){
    if(!_this.origTransform){
      _this.origTransform=item.transform().local;
    }
     let groupy=item.attr({transform:_this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy]})
  }


}

function CommonControlsMove(thisSet, item, i, _this, dx, dy){
 if(item.node.nodeName == 'g'){
       if(!_this.origTransform){
         _this.origTransform=item.transform().local;
       }
        let groupy=item.attr({transform:_this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy]})
     }
     else if (item.node.nodeName == 'path') {
       //console.log(item.LineFrom);
       //console.log(item.LineTo);
       //console.log(thisSet);
       let PathString=Snap.parsePathString(item);
       let LX=PathString[1][5];//get coords X of the linked EffectBlock
       let LY=PathString[1][6];//get coords X of the linked EffectBlock
       let MX=PathString[0][1];
       let MY=PathString[0][2];

       if(item.node.lineFromCyrcle=="circleRight"||item.LineFrom==thisSet.currentName)//moving line from right circle of common control  to Effect Block
       {
         let ox=_this.ox+ dx+120;
         let oy=_this.oy+ dy+16;
         let pathCoords=bezieLine(ox,oy,LX,LY);
         item.attr({d:`M${ox} ${oy}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});
         //item.attr("path",`M${ox} ${oy}L${LX} ${LY}`);// move path synchronously with commonControl block
       }
       else if(item.LineTo==thisSet.currentName)//moving line from RootDistributorBlock  to common control
       {
         let destX=_this.ox+ dx+1;
         let destY=_this.oy+ dy+15;
         let pathCoords=bezieLine(MX,MY,destX,destY);
         item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${destX} ${destY}`});
         //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx+1} ${_this.oy+ dy+15}`);
       }

     }


}


});
