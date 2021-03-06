import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";
import mainBlock from "../mainBlock/mainBlock.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import moveEffects  from "../helperFunctions/moveEffects.js";
import deleteBlockEvent from "../customEvents/deleteEventListener.js";
import renameBlock from "../helperFunctions/renameBlock";
import activeBlockFunctionsClass from '../helperFunctions/activeBlockFunction';
import bezieLine from './bezieLine';
import checkMantraVR from '../helperFunctions/checkMantraVR';
import createLinesFunction from '../helperFunctions/createLinesFunction';

class checkBackEnd{
  constructor(){
    this.status=false;
    this.AnimationFrame;
    this.AnimationFrameStart;
    this.effectCheckArr=[];
    this.startCheck();
    this.mouseEnterEvent();
    this.mouseLeaveEvent();
    GlobalStorage.glassId=document.getElementById("glass");
    this.workBlockSet;
    this.startObject;
  };

  startCheck() {

      if(this.status!='true'){//check status if status is not true this means that no one layer is active and we restart function startCheck();
        this.AnimationFrameStart=setTimeout(()=> {

          csInterface.evalScript(`$._ext. initialProjectTest()`, (res)=>{

            this.status=res;//get value for status from ExtendScript ('true' or 'false')
           if(this.status!='true'){
                  checkMantraVR();

           }
          });

                this.startCheck();

            }, 1000);

      }
      else// in this case status is true and we can start to build Panel
      {

            GlobalStorage.hasVR=true;
            checkMantraVR();
            this.createBlock();// get gata about stage from backEnd and create block on Panel
            this.functionCheckAE();

      }



  }



  mouseEnterEvent(){

    document.addEventListener('mouseenter',(e)=>{

        clearTimeout(this.AnimationFrame);


    });

  }

  functionCheckAE(){
    this.AnimationFrame=setTimeout(()=> {

      csInterface.evalScript(`$._ext.checkChangesGlobal()`, (res)=>{


          if(res&&res==0){//CHECK if we'have gone onto new Layer
            let promise = new Promise(
                        (resolve) => {
                          R.clear();
                          GlobalStorage.historyOfObjects={
                            itemArray:[]
                          }
                          console.log('RESET Y COORD');
                          GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
                          GlobalStorage.undermostCommonControlBlock.y=10;
                          resolve(R);
                        }
                      );
                      promise.then (
                        (resolve)=>{

                          this.createBlock();
                        }

                      );
          }
          else if(res=='false'|| res===false){
            this.status=false;
            GlobalStorage.hasVR=false;
            clearTimeout(this.AnimationFrame);
            R.clear();
            GlobalStorage.historyOfObjects={
              itemArray:[]
            }
            console.log('RESET Y COORD');
            GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
            GlobalStorage.undermostCommonControlBlock.y=10;
            this.startCheck();

          }
          else if(res&res==100||res=='100'){// No one layer is selected

            GlobalStorage.historyOfObjects={
              itemArray:[]
            }

          }
          else if(res&&res!="undefined"){


            if(res=="110"||res===false||res=='false'){//empty
              this.effectCheckArr=[];
                GlobalStorage.glassId.style.display="block";
                if(GlobalStorage.historyOfObjects.itemArray.length>0){
                  GlobalStorage.historyOfObjects.itemArray.forEach((item)=>{
                    GlobalStorage.historyOfObjects[item.name].remove();

                  });
                }
            }



            let resObj=JSON.parse(res);
            GlobalStorage.hasVR=resObj.hasVR;
            checkMantraVR();


            this.effectCheckArr=resObj.effectArray;

            if(!GlobalStorage.effectCheckArr||!this.effectCheckArr){
                GlobalStorage.glassId.style.display="block";
              return false
            }
            if(GlobalStorage.effectCheckArr.length>this.effectCheckArr.length){

              let promise = new Promise(
                        (resolve) => {
                          let blockToRemove=_.difference(GlobalStorage.effectCheckArr, this.effectCheckArr);
                          GlobalStorage.effectCheckArr=this.effectCheckArr;
                          GlobalStorage.blockToRemove=blockToRemove;
                          //console.log(GlobalStorage.blockToRemove);
                          resolve(blockToRemove);
                        }
                      );
                      promise.then (
                        (resolve)=>{
                          document.dispatchEvent(deleteBlockEvent);
                          //console.log(effectToRemove[0]);
                        }

                      );


            }
            else if(GlobalStorage.effectCheckArr.length<this.effectCheckArr.length){

            let cordX;
            let blockToCreate=_.difference(this.effectCheckArr, GlobalStorage.effectCheckArr);
            blockToCreate.forEach((i)=>{

              csInterface.evalScript(`$._ext.findEffect("${i}")`, (res)=>{

                this.startObject=JSON.parse(res);

                  this.functionCreateBlocks(this.startObject,cordX);



              });

            });


              GlobalStorage.effectCheckArr=this.effectCheckArr;

            }
            else {
              this.workBlockSet=GlobalStorage.historyOfObjects[resObj.selectedEffect.effectName];
              if(this.workBlockSet&&this.workBlockSet.setEffectName){
                new activeBlockFunctionsClass().activeEffectBlock(this.workBlockSet);
              }
              else if(this.workBlockSet&&this.workBlockSet.thisCommonContrlName){
                new activeBlockFunctionsClass().activeNotEffectBlock(this.workBlockSet);
              }

              if(this.effectCheckArr.join(';')!==GlobalStorage.effectCheckArr.join(';')){//convert arrays to string and match them if they are not equal it need rename effect
                this.functionRename(this.effectCheckArr,GlobalStorage.effectCheckArr);
              }
              GlobalStorage.effectCheckArr=this.effectCheckArr;// assign current array to previus array
              if(resObj.selectedEffect.effectName&&GlobalStorage.historyOfObjects[resObj.selectedEffect.effectName]&&GlobalStorage.historyOfObjects[resObj.selectedEffect.effectName][0][1][0]){
                let distrInst=null;
                if((resObj.selectedEffect.distrInst*1)<10){
                  distrInst=`0${resObj.selectedEffect.distrInst}`;
                }
                else{
                  distrInst=resObj.selectedEffect.distrInst
                }
                GlobalStorage.historyOfObjects[resObj.selectedEffect.effectName][0][1][0].attr({text:distrInst});//change distributor number in EffectBlock
              }
              //console.log('Equality')
            }
          }



        //console.log(res);

      });
        //console.log("I'm working");
            this.functionCheckAE();

        }, 1000);
  }
  mouseLeaveEvent(){

    document.addEventListener('mouseleave',(e)=>{
      //console.log("PreLeave");
        //console.log(e.toElement);
      if(e.toElement===null&&this.status=='true'){
        //console.log(this.AnimationFrame);
        //console.log("mouseLeaveEvent");
      this.functionCheckAE();
    }
    });
  }
  createBlock(){
    let cordX;

    csInterface.evalScript(`$._ext.getData()`, (res)=>{

      //console.log('WORK');
      //console.log(JSON.parse(res));
      this.startObject=JSON.parse(res);
      GlobalStorage.hasVR=this.startObject.hasVR;
      checkMantraVR();
      if(this.startObject.hasVR===true){      //console.log(startObject);
        this.functionCreateBlocks(this.startObject,cordX);
      }


    });

  }

  functionCreateBlocks(startObject,cordX){
    let workBlock;
//let cordY=GlobalStorage.undermostEffectBlock.y;

    //console.log(startObject.hasVR);
    // chesk if layer has Mantra VR Effect (this effect is )

//console.log(startObject);
    //console.log(startObject);
    startObject.effectsObj.forEach((i, num)=>{// Create EffectBlock
      /*let itemArr=arrSecondButton.effects.filter((obj)=>{
        //console.log(i);
        return obj.name==i.baseEffect;
      });*/
      cordX=190;
      //let item=itemArr[0];
      let item={name:i.baseEffect};
      let res=i;
      //cordY+=50;
      console.log('RESALT',res);
      //let workBlock;
      //workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,res);
      //moveEffects(workBlock);
      if(res.name!='Mantra VR')
      {
        console.log('CREATE EFFECT');
        workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,res);
        //moveEffects(workBlock);
      }
      else{
        console.log('CREATE MASTER');
        cordX=40;
        //cordY=5;
        workBlock=new mainBlock().createBlockMaster(cordX,9,item,false, res.name);
        //moveEffects(workBlock);
      }
      moveEffects(workBlock);
      //console.log(workBlock);
      GlobalStorage.effectCheckArr.push(res);
    });

    //console.log(startObject.commonControlObj);
    startObject.commonControlObj.forEach((i, num)=>{//Create commonControlBlock
      //console.log('Create commonControlBlock');
      let itemArr=arrSecondButton.commonControls.filter((obj)=>{
        return obj.fullname==i.baseEffect;
      });
      cordX=40;
      //console.log(i);
      let item=itemArr[0];
      //console.log(item);
      let res=i.realName;
      //cordY+=50;
      //console.log('CREATE');
      console.log('RESOURSE',res);
      //let workBlock;
      workBlock=new mainBlock().createBlockCommonControls(cordX,GlobalStorage.undermostCommonControlBlock.y+=40,item,false, res);
      moveEffects(workBlock);

      /*if(res!='Master')
      {//
        workBlock=new mainBlock().createBlockCommonControls(cordX,GlobalStorage.undermostCommonControlBlock.y+=40,item,false, res);
        moveEffects(workBlock);
      }
      else{
        //console.log('CREATE MASTER');
        cordX=40;
        //cordY=5;
        workBlock=new mainBlock().createBlockMaster(cordX,9,item,false, res);
        moveEffects(workBlock);
      }*/


      //console.log(workBlock);
      GlobalStorage.effectCheckArr.push(res);
    });
    startObject.multiplierObj.forEach((i, num)=>{//Create commonControlBlock
      //console.log('Create commonControlBlock');
      let itemArr=arrSecondButton.commonControls.filter((obj)=>{
        return obj.fullname==i.baseEffect;
      });
      cordX=40;
      //console.log(i);
      i.shortName='multiplier';
      let item=i;
      //console.log(item);
      let res=i.realName;
        let workBlock=new mainBlock().createBlockMultiplier(cordX,GlobalStorage.undermostCommonControlBlock.y+=50,item, res);
        moveEffects(workBlock);



      //console.log(workBlock);
      GlobalStorage.effectCheckArr.push(res);
    });
    createLinesFunction(startObject.linesObj);//Call function to create lines lines beetween a commonControl Block and an Effect Block

  }

  functionRename(array,others){
    let newNameArr=_.difference(array,others);
    let oldNameArr=_.difference(others,array);
    let newName=newNameArr[0];
    let oldName=oldNameArr[0];

    if(GlobalStorage.historyOfObjects[oldName]){
      renameBlock(oldName,newName);
    }


  }
}
export default checkBackEnd;
