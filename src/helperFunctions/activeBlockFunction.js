import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";


class activeBlockFunctionsClass{

  constructor(){}

  activeEffectBlock(workBlockSet){
    //GlobalStorage.toDelete=workBlockSet;
    GlobalStorage.toDelete=workBlockSet;
    let effectName=workBlockSet.setEffectName;
    //console.log(effectName);
    if(GlobalStorage.prevActive){
      //console.log(GlobalStorage.prevActive[0].id);
    }

      if(GlobalStorage.prevActive&&GlobalStorage.prevActive[0]&&workBlockSet[0].id!=GlobalStorage.prevActive[0].id){

        if (GlobalStorage.prevActive[0][1][2]) {
            GlobalStorage.prevActive[0][1][2].attr({
              stroke: "none"
            })
          } else {
            GlobalStorage.prevActive[0][2].attr({
              stroke: "none"
            });
          }

        if(GlobalStorage.prevActive.thisCommonContrlName){
          let controlName=GlobalStorage.prevActive.thisCommonContrlName;
          csInterface.evalScript(`$._ext.unSelectCommonControl("${controlName}")`,(res)=>{//Unselect commonControl in  After Effects native panel
            //let remove=GlobalStorage.toDelete.remove()
            //resolve(remove);
          });
        }
      }


        csInterface.evalScript(`$._ext.selectEffect("${effectName}")`,(res)=>{//Selet effects in  After Effects native panel
          //let remove=GlobalStorage.toDelete.remove()
          //resolve(remove);
        });
        GlobalStorage.prevActive=workBlockSet;

        if (GlobalStorage.toDelete[0][1][2]) {
          GlobalStorage.toDelete[0][1][2].attr({
            stroke: "red"
          })
        } else {
          GlobalStorage.toDelete[0][2].attr({
            stroke: "red"
          });
        }

  }

  activeNotEffectBlock(workBlockSet){
  GlobalStorage.toDelete=workBlockSet;
    //GlobalStorage.toDelete=workBlockSet;
    if(GlobalStorage.prevActive){
      console.log(GlobalStorage.prevActive);
    }
      if(GlobalStorage.prevActive&&GlobalStorage.prevActive[0]&&workBlockSet[0].id!=GlobalStorage.prevActive[0].id){

        if (GlobalStorage.prevActive[0][1][2]) {
            GlobalStorage.prevActive[0][1][2].attr({
              stroke: "none"
            })
          } else {
            GlobalStorage.prevActive[0][2].attr({
              stroke: "none"
            });
          }
        if(GlobalStorage.prevActive.thisCommonContrlName){
          let controlName=GlobalStorage.prevActive.thisCommonContrlName;
          csInterface.evalScript(`$._ext.unSelectCommonControl("${controlName}")`,(res)=>{//Selet effects in  After Effects native panel
            //let remove=GlobalStorage.toDelete.remove()
            //resolve(remove);
          });
        }

      }
      if(workBlockSet.thisCommonContrlName){
        let controlName=workBlockSet.thisCommonContrlName;
        csInterface.evalScript(`$._ext.selectCommonControl("${controlName}")`,(res)=>{//Selet effects in  After Effects native panel
          //let remove=GlobalStorage.toDelete.remove()
          //resolve(remove);
        });
      }


        GlobalStorage.prevActive=workBlockSet;

      if (GlobalStorage.toDelete[0][1][2]) {
        GlobalStorage.toDelete[0][1][2].attr({
          stroke: "red"
        })
      } else {
        GlobalStorage.toDelete[0][2].attr({
          stroke: "red"
        });
      }



  }

}






export default activeBlockFunctionsClass;
