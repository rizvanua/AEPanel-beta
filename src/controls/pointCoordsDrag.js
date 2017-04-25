import csInterface from "../csInterface.js";
/*$.fn.pointCoordsDrag= function () {

};*/

(function($) {
  $.fn.pointCoordsDrag = function(coords,pointName,pointInputX,pointInputY){

    let width=$(this).parent().width();
    let height=$(this).parent().height();
    console.log(coords);
    let coordsArr=[];
    let currentWidth=coordsArr[0];
    let currentHight=coordsArr[1];
    let compositionWidth=(coordsArr[2]*1).toFixed(1);
    let compositionHight=(coordsArr[3]*1).toFixed(1);
    let storageInputCoordsX;
    let storageInputCoordsY;
    let pointInputXVal;
    let thisPointX;
    let yValue;
    let setValue;
    let pointInputYValж
    let thisPointY;
    let xValue;
    let coordY;
    let coordX;

    pointInputX.on( "keypress", (e)=>{
      pointInputXVal=pointInputX.val();
      if(e.which == 13&&parseInt(pointInputXVal)||e.which == 13&&parseInt(pointInputXVal)==0) {
        thisPointX=`${(pointInputXVal*width)/compositionWidth}px`;
        $(this).css({'left':thisPointX});
        yValue=((parseInt($(this).css('top')))*compositionHight)/height;
        setValue=[pointInputXVal,yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
          else if(e.which == 13&&!parseInt(pointInputXVal)){
            pointInputX.val(storageInputCoordsX);
          }
    })

    pointInputY.on( "keypress", (e)=>{
      pointInputYVal=pointInputY.val();
      if(e.which == 13&&parseInt(pointInputYVal)||e.which == 13&&parseInt(pointInputYVal)==0) {
        thisPointY=`${(pointInputYVal*height)/compositionHight}px`;
        $(this).css({'top':thisPointY});
        xValue=((parseInt($(this).css('left')))*compositionWidth)/width;
        setValue=[xValue,pointInputYVal];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
          else if(e.which == 13&&!parseInt(pointInputYVal)){
            pointInputY.val(storageInputCoordsY);
          }

    })
//
    $(this).draggable({
      create: function(event, ui){


        coordsArr=coords.split(',');
        currentWidth=coordsArr[0];
        currentHight=coordsArr[1];
        compositionWidth=(coordsArr[2]*1).toFixed(1);
        compositionHight=(coordsArr[3]*1).toFixed(1);
        pointInputX.val(currentWidth);
        pointInputY.val(currentHight);
        storageInputCoordsX=currentWidth;
        storageInputCoordsY=currentHight;

        thisPointY=`${(currentHight*height)/compositionHight}px`;
        thisPointX=`${(currentWidth*width)/compositionWidth}px`;
        $(this).css({'top':thisPointY});
        $(this).css({'left':thisPointX});
        $(this).show();

      },
      drag: function( event, ui ) {

        coordY=parseInt($(this).css('top'),10);
        coordX=parseInt($(this).css('left'),10)

        if(ui.position.top>height){
          ui.position.top=height;
          $(this).css({'top':`${height}px`})

        }
        else if(ui.position.top<0){
          ui.position.top=0;
          $(this).css({'top':'0px'})

        }
        if(ui.position.left>width){
          ui.position.left=width;
          $(this).css({'left':`${width}px`})

        }
        else if(ui.position.left<0){
          ui.position.left=0;
          $(this).css({'left':'0px'})

        }
        yValue=((ui.position.top)*compositionHight)/height;
        xValue=((ui.position.left)*compositionWidth)/width;
        storageInputCoordsX=pointInputX.val(xValue);
        storageInputCoordsY=pointInputY.val(yValue);
        setValue=[xValue,yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`)
        
      }
});
     return this;
  };
})(jQuery);
