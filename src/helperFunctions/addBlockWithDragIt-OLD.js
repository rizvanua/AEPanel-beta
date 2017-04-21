import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import mainBlock from "../mainBlock/mainBlock.js";
import distributorBlocks from "../mainBlock/disributorBlocks";
import csInterface from '../csInterface';
import moveEffects  from "./moveEffects.js";
import presetsBlocks from "../mainBlock/presetsBlocks.js";
// Here we handle drag of blocks from secondMenu and add blocks on the main workspace
Raphael.st.simpleDraggable = function(storageName,item) {
  //console.log(item);
  //let itemH = item;
  let initialX;
  let me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc = function() {
        initialX=me.getBBox().x;
        //console.log(me[1].node.StaticGroupTipe);
        if(me[1].node.StaticGroupTipe=='effects'){
          GlobalStorage.effectCreateDrag.active=true;
          GlobalStorage.effectCreateDrag.effectType=me[2].node.id;
          GlobalStorage.effectCreateDrag.poi=me[2].node.poi;
        }


      },
      endFnc = function() {


//console.log(itemH);
        if(GlobalStorage.effectCreateDrag.active===true&&GlobalStorage.effectCreateDrag.distribitorMouseOver!==null&&GlobalStorage.effectCreateDrag.poi){//ADD effects blocks into DISTRIBITOR
//console.log(GlobalStorage.effectCreateDrag.distribitorMouseOver);
//console.log(GlobalStorage.effectCreateDrag);
          let cordX;
          let cordY;
          let connectPath;
          let workBlock;
          //let item=itemH;

          let genId=GlobalStorage.effectCreateDrag.distribitorMouseOver;//get an Unic Id of Distributor over which one mouse being
          let distribitorObject=GlobalStorage.distribitorObjectsStorage[genId];//get object with this key
          let distributorType=distribitorObject.rootBlockSet.distributorType;
          let countTypeOfEffects=distribitorObject.countTypeOfEffects+=1;
          let distrObjectArray=Object.keys(distribitorObject)
          let distrObjectArrayFiltered=distrObjectArray.filter((name)=>{return name==distribitorObject[name].poiName});
            //console.log(distrObjectArrayFiltered);
          distrObjectArrayFiltered.map((objectKey, index)=> {
            //filter object priperty to get object with poiName only
//console.log(index);
                let poiSet=distribitorObject[objectKey];//get set with this key
                //console.log(index);
              csInterface.evalScript(`$._ext.applyEffectDistributor("${item.name}","${distributorType}",${index})`,(res)=>{// send data to extendScript

                let promise = new Promise(
                        (resolve) => {
                          let value = distribitorObject[objectKey].poiName;// get name of object
                          cordX=distribitorObject[objectKey][1].attr("x");// get coordinates of correspond POI block
                          cordY=distribitorObject[objectKey][1].attr("y");// get coordinates of correspond POI block
                          workBlock=new mainBlock().createBlockEffects((cordX+(130*countTypeOfEffects)),cordY,item,res);// create effect block

                          resolve(workBlock);
                        }
                      );
                      promise.then (
                        (resolve)=>{
                          moveEffects(workBlock);// range an order of this effect
                          connectPath = R.path( ["M", cordX+80,cordY+16, "L", (cordX+(130*countTypeOfEffects)),(cordY+16) ] );//create line between POI and effect blocks
                          connectPath.node.lineFromCyrcle="circleRight";//asign name of the line for POI blocks
                          resolve.push(connectPath);
                          poiSet.push(connectPath);
                          GlobalStorage.distribitorObjectsStorage[genId][resolve.setEffectName]=resolve;
                          GlobalStorage.effectCreateDrag.active=false;//put effectCreateDrag.active in false. This means that an effect was successfully added to the dispatcher.
                        }

                      );




              });


              //workBlock=new mainBlock().createBlockEffects((cordX+130),cordY,item,res);//only for test in browser


});


        }
        else if(GlobalStorage.effectCreateDrag.active===true&&GlobalStorage.effectCreateDrag.distribitorMouseOver!==null&&GlobalStorage.effectCreateDrag.poi===false)
        {
          GlobalStorage.effectCreateDrag.active=false;//put effectCreateDrag.active in false.
        }

        GlobalStorage.effectCreateDrag.effectType=null;
        let cordY=me.getBBox().y;
        let cordX=me.getBBox().x;
        //let item=itemH;

        if((cordX-initialX)<100)
        {
          cordX+=120;
        }
        else{
          cordX
        }

//console.log(me);

      if(this.node.StaticGroupTipe=='effects'&&GlobalStorage.effectCreateDrag.distribitorMouseOver===null){// check if this block is effect and distribitorMouseOver is null if this is true that means we want add ordinar effect not assign effect to dispacther.

                  csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{//push data into extend script
                    let obj=JSON.parse(res);
                    console.log(obj);
                    
                    let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,obj);
                    moveEffects(workBlock);
                    GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
                });


        //-let res=item.name;//only for test in browser
              //-let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,res);//only for test in browser
      }
      else if(this.node.StaticGroupTipe=='commonControls'){

        //console.log(item);
//console.log(this[0].id);

        if (item.name=="POI"){

            csInterface.evalScript(`$._ext.createControlPoint()`,(res)=>{//push data into extend script

              let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
              moveEffects(workBlock);// range an order of this effect
            });
        }
        else if (item.name=="FOV"){

          csInterface.evalScript(`$._ext.createControlFOV()`,(res)=>{//push data into extend script

            let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
            moveEffects(workBlock);// range an order of this effect
          });
        }
        else if(item.name=="Strength"){
          csInterface.evalScript(`$._ext. createControlStrength()`,(res)=>{//push data into extend script
            let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
            moveEffects(workBlock);// range an order of this effect
          });

        }
        else if(item.name=="Waves"){
          let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false);
        }

      }
      else if(this.node.StaticGroupTipe=='distributor'){
        new distributorBlocks(cordX,cordY,item);


        //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
      }
      else if (this.node.StaticGroupTipe=='presets'){
        //console.log(GlobalStorage.arrOfPresetsEffects);
        let lowestCoordY=GlobalStorage.undermostEffectBlock.y;
        new presetsBlocks().createPresetsBlocks(cordX,lowestCoordY,item);
      }

      GlobalStorage.storageOfSecondMenuSets[storageName].hide();//hide the menu panel
        me.transform('t' + 0 + ',' + 0);//return a block from secondMenu to an enitial place
      };


  this.drag(moveFnc, startFnc, endFnc);
};
