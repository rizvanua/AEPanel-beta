import R from "../raphaelContainer.js";
import csInterface from "../csInterface.js";
import draggableSet from "../helperFunctions/draggableSet.js";
import drawLineFromTo  from "../helperFunctions/drawLineFromTo.js";
/*import deleteFunctions from "../helperFunctions/deleteFunctions.js"*/
//import deleteInOneClick from "../helperFunctions/deleteInOneClick.js"
import activeBlockFunctionsClass from '../helperFunctions/activeBlockFunction';
import deletePropertyInEffectBlock from '../helperFunctions/deletePropertyInEffectBlock';
import GlobalStorage from '../storage';
import bezieLine from '../helperFunctions/bezieLine';
import createControlsWindows from '../controls/createControlsWindows'

// This class works with mainBlocks (Effects, commonControls, Distributor) and add eventListebers (click,mouseover etc) to them

class mainBlock{
  constructor(){
    let str_gradientGrayLight = "l(0,0,0,1)rgb(140,149,158):5-rgb(44,53,63):95";
    let str_gradientGrayDark = "l(0,0,0,1)rgb(140,149,158):5-rgb(44,53,63):95";
    let gradientGrayLight = R.gradient(str_gradientGrayLight);
    let gradientGrayDark = R.gradient(str_gradientGrayDark);
    this.pathCoords;
  }
  createBlockEffects(x,y,item,obj){
    let blockEffectName=obj.name;
    let workBlockSet=Snap.set();
    let typeNode="effects";
    let EffectName;
    let innerHTML;
    let PathString;
    let offset;
    let MX;
    let MY;
    let LX;
    let LY;
    let pathCoords;
    let target;
    workBlockSet.setEffectName=blockEffectName;
    workBlockSet.baseEffect=item.name;
    workBlockSet.point=obj.point;
    workBlockSet.angle=obj.angle;
    workBlockSet.slider=obj.slider;
    /*workBlockSet.poi=item.poi;
    workBlockSet.fov=item.fov;
    workBlockSet.strength=item.strength;
    workBlockSet.waves=item.waves;*/

    //Create Clip Mask
    let clipR=R.rect(x,y, 200, 32,5);
    let defEl=clipR.toDefs();
    //
    //Create pattern
    let pattern = R.image("img/effect-background.png",x,y,210,329)
   .pattern(x,y,210,329);
    //
    let dummy=R.rect(x,y, 200, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });
            dummy.node.effectName=blockEffectName;
            //workBlockSet.push(dummy);

          GlobalStorage.lastEffectBlock.y=y+32;
    /*let workBlock=R.rect(x,y, 180, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              stroke: "none",
              class:''
          });*/
    let distrCount='0';

    let distrCountText= R.text(x+11, y+16, distrCount)
    .attr({
            //fontSize: 15,
            textAnchor: "start",
            alignmentBaseline:"middle",
            opacity: 0
          });
          if(obj.distrInst){
            let distrInst='01';
            if((obj.distrInst*1)<10){
              distrInst=`0${obj.distrInst}`;
            }
            else{
              distrInst=obj.distrInst;
            }
            distrCountText.attr({
              text:distrInst,
              opacity: 1,
            });
          }

    let title= R.text(x+44, y+16, blockEffectName)
    .attr({
            //fontSize: 15,
            textAnchor: "start",
            alignmentBaseline:"middle"
          });

                //title.node.effectName=blockEffectName;
                //workBlockSet.push(title);

          //workBlock.node.effectName=blockEffectName;
          //let group=R.g(workBlock, title, dummy);
          //workBlockSet.push(group);
          //Create options angle, slider, angel
//console.log(obj.propArray);
            let propGroup=CreateProperties(obj.propArray);


        let mainGroup=R.g(/*workBlock,*/ distrCountText,title, dummy);
        let wrapGroup=R.g(propGroup,mainGroup);
        wrapGroup.attr({ clipPath: clipR});//apply clip-path mask
        /*wrapGroup.click(()=>{
          wrapGroup.toogleAttr(wrapGroup,clipR,'clip-path');
          wrapGroup.toFront();
        });*/
        //wrapGroup.mouseover(()=>{console.log(wrapGroup);});
        mainGroup.dblclick(()=>{
          EffectName=workBlockSet.setEffectName;
          GlobalStorage.input.css({top:GlobalStorage.historyOfObjects[EffectName][0].getBBox().y+28, left: GlobalStorage.historyOfObjects[EffectName][0].getBBox().x+35, width:"160px", height: "26px", position:'absolute', display:'block'});
          //console.log(GlobalStorage.historyOfObjects);
          //console.log(workBlockSet.setEffectName);
          innerHTML=mainGroup[1].node.innerHTML;
          GlobalStorage.renameObj.oldName=innerHTML;
          GlobalStorage.input.val(innerHTML);
        });
        wrapGroup.mouseover(()=>{
          //if(GlobalStorage.currentLine)
          //{
            wrapGroup.node.removeAttribute('clip-path');
            wrapGroup.toFront();//push the current group to the front of SVG composition
            if(GlobalStorage.currentLine){
              GlobalStorage.currentLine.toFront();
            }
            workBlockSet.forEach((item, i)=> {
              if (item.node.nodeName == 'path') {
                PathString=Snap.parsePathString(item);//get coordunates of line
                offset=item.coordDif*1;
                MX=PathString[0][1];
                MY=PathString[0][2];
                LX=PathString[1][5];
                LY=PathString[1][6];
                LY=(LY)+offset;

                //console.log(PathString);
                pathCoords=bezieLine(MX,MY,LX,LY);
                //this.pathCoords=bezieLine(this.ox,this.oy,destx,desty);
                item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});//shift the line to the current propertyBlock
                //item.attr("path",`M${MX} ${MY}L${LX} ${(LY)+offset}`);//shift the line to the current propertyBlock
              }
            });
            for(let key in propGroup){
              if(GlobalStorage.currentLine&&propGroup[key].type=="rect"&&propGroup[key].attr('class')!=='prop-wrapper'&&propGroup[key].attr("propDataType")!=GlobalStorage.currentLine.node.shortControlName){
                  propGroup[key].attr({"fill-opacity":0.7, fill:'rgb(95,95,95)'})
              }
            }
          //}

        });
        propGroup.mouseover((event)=>{
          target=event.target;
        if(target.tagName == 'rect'&&target.className!=='prop-wrapper')
          {
            if(GlobalStorage.currentLine&&target.getAttribute('propDataType')==GlobalStorage.currentLine.node.shortControlName ){//highlight of the current property block
                            target.style.fillOpacity='0.1';
                            target.style.fill='rgb(255,255,255)';
          }

              GlobalStorage.controlProp={
                type:target.getAttribute('propDataType'),//type of common control ('point' or 'angle' or 'slider')
                name:target.getAttribute('propDataName'),// name of commonControls property (for example 'Point of Interest')
                circle:target.previousElementSibling,// link to the sibling circle to toogle className
                coordDif:target.getAttribute('coordDif')//different in number between getBBox().y of CommonControlBlock and this property block
              }


              //if(GlobalStorage.currentLine.node.shortControlName==GlobalStorage.controlProp.type){
                //target.previousElementSibling.classList.toggle('true');
              //}

          }
          else{
            GlobalStorage.controlProp={//set the object to the initial state
              type:null,
              name:null,
              circle:null,
              coordDif:null
            };
          }



        });
        wrapGroup.mouseout(()=>{
          //if(GlobalStorage.currentLine)
          //{
          wrapGroup.attr({ clipPath: clipR });
          GlobalStorage.controlProp={
            type:null,
            name:null,
            circle:null,
            coordDif:null
          };
        //}
        //console.log(GlobalStorage.currentLine);
          workBlockSet.forEach((item, i)=> {
            if (item.node.nodeName == 'path') {
              PathString=Snap.parsePathString(item);
              offset=item.coordDif*1;
              //console.log(PathString);
              MX=PathString[0][1];
              MY=PathString[0][2];
              LX=PathString[1][5];
              LY=PathString[1][6];
              LY=(LY)-offset

              //console.log(offset);
              pathCoords=bezieLine(MX,MY,LX,LY);
              item.attr({d:`M${MX} ${MY}C${pathCoords.cp1x} ${pathCoords.cp1y} ${pathCoords.cp2x} ${pathCoords.cp2y} ${LX} ${LY}`});
              //item.attr("path",`M${MX} ${MY}L${LX} ${(LY)-offset}`);
            }
          });

          for(let key in propGroup){
            if(propGroup[key].type=="rect"&&propGroup[key].attr('class')!=='prop-wrapper'){
                propGroup[key].attr({"fill-opacity":0})
            }
          }

        });
        workBlockSet.push(wrapGroup);
          //let slider=CreateProperties(obj.slider);
          //let angle=CreateProperties(obj.angle);
            //console.log(workBlockSet);
          function CreateProperties(propertyArr){
            console.log(propertyArr);
            let propertyBlock;
            let propertyText;
            let propertyCircle;
            let propDataType;
            let localY=y+32
            //let f=2;
            let groupOfProp=R.g();
            //console.log(propertyArr)
            //let bacgroundHeight=(item.properties.length*20)+42;
            let propBackground=R.rect(x,y, 200,0,5)
            .attr({   //fill: "rgb(64, 64, 64)",
                      fill:pattern,
                      stroke: "none",
                      class:'prop-wrapper'
                  });
            groupOfProp.add(propBackground);
            let count=0;
            if(propertyArr!=undefined){
              for(let a=0; a<propertyArr.length;a++)
              {
                if(propertyArr.length!=0){



                let item=propertyArr[a];


                  if(a!=0){
                    localY+=20;
                  }
                  else{
                    localY+=10;
                  }

                  propertyText= R.text(x+22,localY-5, item.name)
                  .attr({
                          //fontSize: 14,
                          textAnchor: "start",
                          alignmentBaseline:"hanging"
                        });
                  propertyCircle=R.circle(x+10, localY, 6).attr({
                    class:'false'
                  });

                  propertyBlock= R.rect(x, localY-8, 200,16)
                  .attr({
                          "fill-opacity":0,
                          opacity: 1,
                          stroke: "none",
                          class:'prop',
                          propDataName:item.name,
                          propDataType:item.type,
                          coordDif:(localY-12)-y
                        });
                    //console.log(propertyBlock.node.oncontextmenu);
                    deletePropertyInEffectBlock(propertyBlock, workBlockSet);
                    groupOfProp.add(propertyText,propertyCircle,propertyBlock);

                    groupOfProp.add(propertyText,propertyCircle,propertyBlock);


                  }
                }
                let bacgroundHeight=(propertyArr.length*20)+52;
                propBackground.attr({
                  height:bacgroundHeight
                })
            }
            else{
              let bacgroundHeight=52;
              propBackground.attr({
                height:bacgroundHeight
              })
            }

              //console.log(groupOfProp.node);
              //console.log(groupOfProp.node.children);
              //console.log(groupOfProp.node.children.length);

            return groupOfProp;

          }



          //dummy.toFront();


    /*let circleLeft=R.circle(x+1, y+15, 6);// If you need left circle for this block uncomment it
          circleLeft.node.effectName=item.name;
          circleLeft.node.circleName="circleLeft";
          workBlockSet.push(circleLeft);*/

          let toType = function(obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
          };




    GlobalStorage.historyOfObjects[blockEffectName]=workBlockSet;
    //console.log(GlobalStorage.historyOfObjects);
    workBlockSet.draggableSet(workBlockSet,typeNode);
    wrapGroup.click(()=>{new activeBlockFunctionsClass().activeEffectBlock(workBlockSet,blockEffectName);});



    wrapGroup.mouseover(function(){
      //GlobalStorage.toDelete=workBlockSet;
      //console.log(GlobalStorage.currentLine);
      //console.log("OVER");
      //console.log(workBlockSet);
      //console.log(this);
        //workBlockSet.deleteInOneClick(workBlockSet);
    if (GlobalStorage.currentLine){
      let typeOfControll=GlobalStorage.currentLine.node.shortControlName;
          if(GlobalStorage.currentLine&&workBlockSet[typeOfControll]===false){

            workBlockSet.attr({cursor: "no-drop"});
          }
          else{
            workBlockSet.attr({cursor: "move"});
          }
        }

      GlobalStorage.overMouseSet=workBlockSet;//Push this set into temporary object for compere reasone
    });
  wrapGroup.mouseout(function(){
      //console.log("OUT");
        GlobalStorage.toDelete=undefined;
        workBlockSet.attr({cursor: "move"})
        GlobalStorage.overMouseSet=null;//Clear interim object if mouse get out
    });
    return workBlockSet;
  }

  createBlockCommonControls(x,y,item,distributor,res){
    let dblClickCheck=false;//to check where is double click where is alone click
    let thisItemName=res;
  /*  if(res){
      let index=res.length-1;

      let number=res.charAt(index)*1;
      if (number){
      thisItemName=`${item.name} ${number}`;
      }
    }*/
    //Create pattern
    let pattern = R.image("img/orange-button.png",x,y,180,32)
   .pattern(x,y,180,32);
    //

    let workBlockSet=Snap.set();
    let typeNode="commonControls";

    let dummy=R.rect(x,y, 120, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });
          //workBlockSet.push(dummy);
          //dummy.node.effectName=item.effectName;

          let workBlock=R.rect(x,y, 120, 32,5)
          .attr({   //fill: "rgb(64, 64, 64)",
                    fill:pattern,
                    stroke: "none",
                    cursor: "move",
                    class:"commonControl"
                });
          //workBlock.node.effectName=item.effectName;

    let title= R.text(x+60, y+16, thisItemName)
    .attr({
      //fontSize: 15,
      textAnchor: "middle",
      alignmentBaseline:"middle"
    });

          //title.node.effectName=item.effectName;


          //console.log(item);
          workBlockSet.shortName=item.shortName;
          workBlockSet.currentName=thisItemName;
          workBlockSet.multiplierArr=[];
          //workBlockSet.push(workBlock);



          //dummy.toFront();

    /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
          circleLeft.node.effectName=item.name;
          workBlockSet.push(circleLeft);
          circleLeft.node.circleName="circleLeft";*/

        //if(distributor==false){

        //}
        let circleRight=R.circle(x+120, y+15, 6);
        let group=R.g(workBlock, title, dummy,circleRight);
        workBlockSet.push(group);

              circleRight.node.effectName=item.name;
              //workBlockSet.push(circleRight);
              circleRight.node.circleName="circleRight";
        //workBlockSet.push(circleRight);
    GlobalStorage.historyOfObjects[res]=workBlockSet;
    workBlockSet.fullCommonContrlName=item.fullname;
    workBlockSet.thisCommonContrlName=res;
    group.click(()=>{new activeBlockFunctionsClass().activeNotEffectBlock(workBlockSet);});
    workBlockSet.draggableSet(workBlockSet,typeNode);
    //console.log(group.getBBox());
    group.mouseover(function(){
      GlobalStorage.toDelete=workBlockSet;
      GlobalStorage.overMouseSet=workBlockSet;//Push this set into temporary object for compere reasone
    });
    group.mouseout(function(){
      GlobalStorage.toDelete=undefined;
        GlobalStorage.overMouseSet=null;//Clear interim object if mouse get out
    });

    group.dblclick(()=>{
      dblClickCheck=true;
      let EffectName=workBlockSet.thisCommonContrlName;
      //console.log('EffectName',EffectName);
      GlobalStorage.input.css({top:GlobalStorage.historyOfObjects[EffectName][0].getBBox().y+28, left: GlobalStorage.historyOfObjects[EffectName][0].getBBox().x, width:"115px", height: "26px", position:'absolute', display:'block'});
      //console.log(GlobalStorage.historyOfObjects);
      //console.log(workBlockSet.setEffectName);
      let innerHTML=group[1].node.innerHTML;
      //console.log(innerHTML);
      GlobalStorage.renameObj.oldName=innerHTML;
      GlobalStorage.input.val(innerHTML);
    });

    group.click((e)=>{
      setTimeout(()=>{
        let TimeDifferent=(GlobalStorage.clickTime.upTime-GlobalStorage.clickTime.downTime);
        if(!dblClickCheck&&e.detail!=2&&TimeDifferent<300){
          GlobalStorage.greyGround.show();
          //console.log("height",$(window).height());
          //console.log("ThisY",group.getBBox().y+28+32+112);
          if(group.getBBox().y-60<28){
            GlobalStorage.testDataY=28;

          }
          else if(group.getBBox().y+28+32+112>$(window).height()){
              GlobalStorage.testDataY=$(window).height()-224;
          }
          else{
            GlobalStorage.testDataY=group.getBBox().y-60;
          }

          switch (item.shortName) {
            case 'slider':
            //GlobalStorage.testDataY=group.getBBox().y-60;
              new createControlsWindows().createSliderWindow(workBlockSet.thisCommonContrlName);
              break;
            case 'point':
            //GlobalStorage.testDataY=group.getBBox().y-60;
              new createControlsWindows().createPointsWindow(workBlockSet.thisCommonContrlName);
              break;
            case 'angle':
            //GlobalStorage.testDataY=group.getBBox().y-60;
              new createControlsWindows().createAngleWindow(workBlockSet.thisCommonContrlName)
              break;
            default:
          }
        }else if(e.detail==2){
          dblClickCheck=false;
        }
      },300);

      //console.log('ONE CLICK',item.shortName);
    });

    return workBlockSet;

  }
  createBlockMaster(x,y,item,distributor,res){

    let thisItemName=res;
    let pattern = R.image("img/red-button.png",x,y,180,32)
    .pattern(x,y,180,32);

    let workBlockSet=Snap.set();
    let typeNode="commonControls";
    let dummy=R.rect(x,y, 120, 32,5)
    .attr({
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });


          let workBlock=R.rect(x,y, 120, 32,5)
          .attr({   //fill: "rgb(64, 64, 64)",
                    fill:pattern,
                    stroke: "none",
                    class:"multiplier"
                });


    let title= R.text(x+60, y+15, "Master")
    .attr({
      //fontSize: 15,
      textAnchor: "middle",
      alignmentBaseline:"middle"
    });


          //workBlockSet.shortName=item.shortName;
          workBlockSet.currentName=thisItemName;

          let group=R.g(workBlock, title, dummy);
          workBlockSet.push(group);

    GlobalStorage.historyOfObjects[res]=workBlockSet;
    workBlockSet.fullCommonContrlName=item.fullname;
    workBlockSet.thisCommonContrlName=res;
    group.click(()=>{new activeBlockFunctionsClass().activeNotEffectBlock(workBlockSet);
      GlobalStorage.container.children('#grey-ground').show();
      GlobalStorage.testDataY=28;
      new createControlsWindows().createMasterSliderWindow(thisItemName);
    });
    workBlockSet.draggableSet(workBlockSet,typeNode);
    group.mouseover(function(){
      GlobalStorage.toDelete=workBlockSet;
    });
      group.mouseout(function(){
        GlobalStorage.toDelete=undefined;
      });
    return workBlockSet;

  }

  //CREATE MultiplierBLOCK

  createBlockMultiplier(x,y,item,res){

    let thisItemName=res;
  /*  if(res){
      let index=res.length-1;

      let number=res.charAt(index)*1;
      if (number){
      thisItemName=`${item.name} ${number}`;
      }
    }*/
    //Create pattern
    let pattern = R.image("img/red-button.png",x,y,180,32)
   .pattern(x,y,180,32);
    //

    let workBlockSet=Snap.set();
    let typeNode=item.shortName;

    let dummy=R.rect(x,y, 120, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });
          //workBlockSet.push(dummy);
          //dummy.node.effectName=item.effectName;

          let workBlock=R.rect(x,y, 120, 32,5)
          .attr({   //fill: "rgb(64, 64, 64)",
                    fill:pattern,
                    stroke: "none",
                    cursor: "move",
                    class:"multiplier"
                });
          //workBlock.node.effectName=item.effectName;

    let title= R.text(x+60, y+16, thisItemName)
    .attr({
      //fontSize: 15,
      textAnchor: "middle",
      alignmentBaseline:"middle"
    });

          //title.node.effectName=item.effectName;


          //console.log(item);
          workBlockSet.shortName=item.shortName;
          workBlockSet.currentName=thisItemName;
          //workBlockSet.push(workBlock);



          //dummy.toFront();

    /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
          circleLeft.node.effectName=item.name;
          workBlockSet.push(circleLeft);
          circleLeft.node.circleName="circleLeft";*/

        //if(distributor==false){

        //}
        let circleRight=R.circle(x+120, y+15, 6);
        let group=R.g(workBlock, title, dummy,circleRight);
        workBlockSet.push(group);

              circleRight.node.effectName=item.name;
              //workBlockSet.push(circleRight);
              circleRight.node.circleName="circleRightMulti";
        //workBlockSet.push(circleRight);
    GlobalStorage.historyOfObjects[res]=workBlockSet;
    workBlockSet.fullCommonContrlName=item.shortName;
    workBlockSet.thisCommonContrlName=res;
    group.click(()=>{new activeBlockFunctionsClass().activeNotEffectBlock(workBlockSet);});
    workBlockSet.draggableSet(workBlockSet,typeNode);
    group.mouseover(function(){
      GlobalStorage.toDelete=workBlockSet;
      GlobalStorage.overMouseSet=workBlockSet;
    });
    group.mouseout(function(){
      GlobalStorage.toDelete=undefined;
        GlobalStorage.overMouseSet=null;//Clear interim object if mouse get out
    });
    group.dblclick(()=>{
      let EffectName=workBlockSet.thisCommonContrlName;
      GlobalStorage.input.css({top:GlobalStorage.historyOfObjects[EffectName][0].getBBox().y, left: GlobalStorage.historyOfObjects[EffectName][0].getBBox().x, width:"115px", height: "26px", position:'absolute', display:'block'});
      //console.log(GlobalStorage.historyOfObjects);
      //console.log(workBlockSet.setEffectName);
      let innerHTML=group[1].node.innerHTML;
      //console.log(innerHTML);
      GlobalStorage.renameObj.oldName=innerHTML;
      GlobalStorage.input.val(innerHTML);
    });

    return workBlockSet;

  }



}

 export  default mainBlock;
