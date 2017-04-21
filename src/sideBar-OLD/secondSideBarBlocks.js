import R from "../raphaelContainer.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import mainBlock from "../mainBlock/mainBlock.js";
import distributorBlocks from "../mainBlock/disributorBlocks";
import SideBar from "./sideBar.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';
import simpleDraggable from '../helperFunctions/addBlockWithDragIt';
import CheckCommonContrlAbility from '../helperFunctions/checkCommonControlsTypeAbilitys';


class secondSideBarBlocks {
  constructor(){

  }
  createStaticFunction(id,objName,storageName){
    let sidebar_inner=5;
    let Coords=document.getElementById(id);
    let CoordX=(Coords.getAttribute('x')*1);
    let CoordY=(Coords.getAttribute('y')*1);
    arrSecondButton[objName].forEach((item,i)=>{
      CheckCommonContrlAbility(item);
      if(i>0){
        sidebar_inner=sidebar_inner+34;
      }

      let dummy=R.rect(58,sidebar_inner, 120, 32,5)
      .attr({   fill: "rgb(64, 64, 64)",
                "fill-opacity":0,
                stroke: "none",
                opacity: 1,
                cursor: "pointer"
            });
            dummy.node.StaticGroupTipe=objName;
            dummy.node.poi=item.poi;
            dummy.node.fov=item.fov;
            dummy.node.waves=item.waves;
            dummy.node.strength=item.strength;
            dummy.node.id=item.name;

      let x=R.rect(58,sidebar_inner, 120, 32,5)
      .attr({   fill: "rgb(64, 64, 64)",
                stroke: "none",
                opacity: 1,
                cursor: "pointer"
            });

      let title= R.text(117, (sidebar_inner+15), item.name)
      .attr({
        "font-size": 15,
        cursor: "pointer"
      });
            title.node.StaticGroupTipe=objName;

            let secondBlockMenuMiniSet=R.set();


            secondBlockMenuMiniSet.push(x);
            secondBlockMenuMiniSet.push(title);
            secondBlockMenuMiniSet.push(dummy).toFront();
            secondBlockMenuMiniSet.poi=item.poi;
            secondBlockMenuMiniSet.fov=item.fov;
            secondBlockMenuMiniSet.waves=item.waves;
            secondBlockMenuMiniSet.StaticGroupTipe=objName;

            if(objName=="presets"){
              secondBlockMenuMiniSet.presetsType=item.name;
            }

            //console.log(secondBlockMenuMiniSet);
            GlobalStorage.storageOfSecondMenuSets[storageName].push(secondBlockMenuMiniSet);

            secondBlockMenuMiniSet.simpleDraggable(storageName,item);
            secondBlockMenuMiniSet.mousedown(function(){
              //console.log(item);
            });
            /*secondBlockMenuMiniSet.mousedown(function(){
              let cordY=x.attr("y");

          if(this.node.StaticGroupTipe=='effects'){

            if(GlobalStorage.lastEffectBlock.y===0){
              cordY=5;
            }
            else{
              cordY=GlobalStorage.lastEffectBlock.y+5;
            }


                      //--csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{
                        //--let workBlock=new mainBlock().createBlockEffects(800,cordY,item,res);

                      //--});


            let res=item.name;//only for test in browser
                  let workBlock=new mainBlock().createBlockEffects(500,cordY,item,res);//only for test in browser
          }
          else if(this.node.StaticGroupTipe=='commonControls'){
            let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
          }
          else if(this.node.StaticGroupTipe=='distributor'){
            new distributorBlocks(300,cordY+150,item);


            //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
          }

        });*/
GlobalStorage.storageOfSecondMenuSets[storageName].hide();
    });
  }
  createStaticEffects(){
    this.createStaticFunction("Effects","effects","effects");
  }
  createStaticCommonControls(){
    this.createStaticFunction("Common Controls","commonControls","commonControls");
  }
  createStaticDistributorControls(){
    this.createStaticFunction("Distributor","distributor","distributor");
  }
  createStaticPresets(){
    this.createStaticFunction("Presets","presets","presets");
  }


}

export default secondSideBarBlocks;
