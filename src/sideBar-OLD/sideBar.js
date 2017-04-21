import R from "../raphaelContainer.js";
import arrButton from "../startArrays/arrButtonMain.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import secondSideBarBlocks from "./secondSideBarBlocks.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';

class SideBar {
  constructor(){

  }
  createBar(){

    //this.propertiesHideBlock = R.rect(0,0, 120, 32,5);
  }

  createInnerBlocks(){
    let sidebar_inner=5;
    let self=this;
    arrButton.forEach((item,i)=>{
      if(i>0&&i<3){
          sidebar_inner=sidebar_inner+34;

      }
      else if (i>0&&i>=3){
        sidebar_inner=sidebar_inner+64;
      }

      let firstLetter=item.name.charAt(0);
      let dummy=R.rect(5,sidebar_inner, 32, 32,5)
      .attr({   fill: "rgb(64, 64, 64)",
                "fill-opacity":0,
                stroke: "none",
                opacity: 1,
                cursor: "pointer"
            });


      let x=R.rect(5,sidebar_inner, 32, 32,5)
      .attr({   fill: "rgb(64, 64, 64)",
                stroke: "none",
                opacity: 1,
                cursor: "pointer"
            });
      let title= R.text(22, (sidebar_inner+15), firstLetter)
      .attr({
        "font-size": 15
      });

      GlobalStorage.mainMenuSet[item.systName].push(title);
            let menuWrapperHeight=(arrSecondButton[item.systName].length*32)+(5*arrSecondButton[item.systName].length);
            /*console.log(menuWrapperHeight);*/
        let menuWrapper=R.rect(38,0, 180, menuWrapperHeight,5)
        .attr({   fill: "hsb(360, 100, 100)",
                  stroke: "none",
                  opacity: 0,
                  cursor: "pointer"
              });
              menuWrapper.node.blockName=item.name;
              menuWrapper.hide();
      GlobalStorage.mainMenuSet[item.systName].push(menuWrapper);
      GlobalStorage.mainMenuSet[item.systName].push(dummy).toFront();
      GlobalStorage.mainMenuSet[item.systName].push(x);


                          dummy.node.id=item.name;

            //Hover function
            GlobalStorage.mainMenuSet[item.systName].hover(
              function (){
                //
                //Hover In function
                GlobalStorage.storageOfSecondMenuSets[item.systName].show();
                GlobalStorage.mainMenuSet[item.systName][1].show();
              },
              function(e){
                //Hover Out function
                let objectWrap=GlobalStorage.mainMenuSet[item.systName][1];
                let x = e.offsetX || e.clientX,
                    y = e.offsetY || e.clientY;

                    if(this.isPointInside(x,y)===false)
                    {
                      GlobalStorage.storageOfSecondMenuSets[item.systName].hide();
                      objectWrap.hide();
                    }
              });
    });
  }


}

export default SideBar;
