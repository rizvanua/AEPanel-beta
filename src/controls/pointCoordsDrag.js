import csInterface from "../csInterface.js";
/*$.fn.pointCoordsDrag= function () {

};*/

(function($) {
  $.fn.pointCoordsDrag = function(coords,pointName,pointInputX,pointInputY){

    let width=$(this).parent().width();
    let height=$(this).parent().height();
    console.log(coords);
    let coordsArr=coords.split(',');
    let currentWidth=coordsArr[0];
    let currentHight=coordsArr[1];
    let compositionWidth=(coordsArr[2]*1).toFixed(1);
    let compositionHight=(coordsArr[3]*1).toFixed(1);
    let storageInputCoordsX;
    let storageInputCoordsY;
//let parentElem=parentElem.position()
    pointInputX.on( "keypress", (e)=>{
      //console.log(pointInputX.val());
      let pointInputXVal=pointInputX.val();
      if(e.which == 13&&parseInt(pointInputXVal)||e.which == 13&&parseInt(pointInputXVal)==0) {
        //point.css({'top'});
        //let thisPointY=`${(currentHight*height)/compositionHight}px`;
        let thisPointX=`${(pointInputXVal*width)/compositionWidth}px`;
        //$(this).css({'top':thisPointY});
        $(this).css({'left':thisPointX});
        let yValue=((parseInt($(this).css('top')))*compositionHight)/height;
        let setValue=[pointInputXVal,yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
          else if(e.which == 13&&!parseInt(pointInputXVal)){
            pointInputX.val(storageInputCoordsX);
          }
    })

    pointInputY.on( "keypress", (e)=>{
      //console.log(pointInputX.val());
      let pointInputYVal=pointInputY.val();
      if(e.which == 13&&parseInt(pointInputYVal)||e.which == 13&&parseInt(pointInputYVal)==0) {
        //console.log(point.css('top'));
        let thisPointY=`${(pointInputYVal*height)/compositionHight}px`;
        $(this).css({'top':thisPointY});
        let xValue=((parseInt($(this).css('left')))*compositionWidth)/width;
        let setValue=[xValue,pointInputYVal];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
          else if(e.which == 13&&!parseInt(pointInputYVal)){
            pointInputY.val(storageInputCoordsY);
          }

    })
//
    $(this).draggable({
      create: function(event, ui){

        //if(coords&&coords!='undefined'){
            console.log('create',coords);
          let coordsArr=coords.split(',');
        //}
        currentWidth=coordsArr[0];
        currentHight=coordsArr[1];
        compositionWidth=(coordsArr[2]*1).toFixed(1);
        compositionHight=(coordsArr[3]*1).toFixed(1);
        //$(this).position.top=(750/2);
        pointInputX.val(currentWidth);
        pointInputY.val(currentHight);
        storageInputCoordsX=currentWidth;
        storageInputCoordsY=currentHight;

        let thisPointY=`${(currentHight*height)/compositionHight}px`;
        let thisPointX=`${(currentWidth*width)/compositionWidth}px`;
        $(this).css({'top':thisPointY});
        $(this).css({'left':thisPointX});
        $(this).show();
        /*pointInputX.show();
        pointInputX.show();*/
        //$(this).position.left=(1500/2);
      },
      drag: function( event, ui ) {
        /*let offset=$(this).position();
        console.log(offset);*/
        let coordY=parseInt($(this).css('top'),10);
        let coordX=parseInt($(this).css('left'),10)
        console.log(coordY,coordX);
        if(ui.position.top>height){
          ui.position.top=height;
          $(this).css({'top':`${height}px`})
          //return false;
        }
        else if(ui.position.top<0){
          ui.position.top=0;
          $(this).css({'top':'0px'})
          //return false;
        }
        if(ui.position.left>width){
          ui.position.left=width;
          $(this).css({'left':`${width}px`})
          //return false;
        }
        else if(ui.position.left<0){
          ui.position.left=0;
          $(this).css({'left':'0px'})
          //return false;
        }
        let yValue=((ui.position.top)*compositionHight)/height;
        let xValue=((ui.position.left)*compositionWidth)/width;
        storageInputCoordsX=pointInputX.val(xValue);
        storageInputCoordsY=pointInputY.val(yValue);
        let setValue=[xValue,yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`)
        //console.log(((ui.position.top)*compositionHight)/height);
        //console.log(((ui.position.left)*compositionWidth)/width);
      }
});
     return this;
  };
})(jQuery);
