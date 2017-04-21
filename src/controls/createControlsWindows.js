import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";


class createControlsWindows{
  constructor(){
    //this.ground;
    this.sliderWrap;
    this.pointsWrap;
  };
  createGround(){
    GlobalStorage.greyGround=$('<div>',{id:'grey-ground'});
    GlobalStorage.greyGround.click(()=>{
      GlobalStorage.greyGround.hide();
      GlobalStorage.container.children('#slider-wrap').remove();
      GlobalStorage.container.children('#point-wrap').remove();
      GlobalStorage.container.children('#angle-wrap').remove();
    })
      GlobalStorage.container.append(GlobalStorage.greyGround);
  }
  createSliderWindow(sliderName){
    this.sliderWrap=$('<div>',{id:'slider-wrap',class:'control-wrap',style:`top:${GlobalStorage.testDataY}px`})
    let sliderInput=$('<input>',{id:'slider-input', class:'control-input', type:'text'});
    this.slider=$('<div>',{id:'slider'}).append('<div id="custom-handle" class="ui-slider-handle"></div>');
    this.sliderFunction(sliderInput,sliderName);
    this.sliderWrap.append(this.slider);
    this.sliderWrap.append(sliderInput);
    GlobalStorage.container.append(this.sliderWrap);

  }
  createMasterSliderWindow(){
    this.sliderWrap=$('<div>',{id:'slider-wrap',class:'control-wrap',style:`top:${GlobalStorage.testDataY}px`})
    let sliderInput=$('<input>',{id:'slider-input', class:'control-input', type:'text'});
    this.slider=$('<div>',{id:'slider'}).append('<div id="custom-handle" class="ui-slider-handle"></div>');
    this.sliderMasterFunction(sliderInput);
    this.sliderWrap.append(this.slider);
    this.sliderWrap.append(sliderInput);
    GlobalStorage.container.append(this.sliderWrap);

  }
  createAngleWindow(angleName){
    let angleWrap=$('<div>',{id:'angle-wrap',class:'control-wrap', style:`top:${GlobalStorage.testDataY}px`})
    let knobWrap=$('<div>',{id:'knob-wrap'})
    this.angle=$('<div>',{id:'knob'});
    //let angle=$('<div>',{id:'slider'}).append('<div id="custom-handle" class="ui-slider-handle"></div>');
    let angleInputSpin=$('<input>',{id:'angle-input-spin', class:'control-input', type:'text'});
    let angleInputValue=$('<input>',{id:'angle-input-value', class:'control-input', type:'text'});
    this.angleFunction(angleInputSpin, angleInputValue, angleName)
    knobWrap.append(this.angle);
    angleWrap.append(knobWrap);
    angleWrap.append(angleInputSpin);
    angleWrap.append(angleInputValue);
    GlobalStorage.container.append(angleWrap);

  }
  createPointsWindow(pointName){

    this.pointsWrap=$('<div>',{id:'point-wrap',class:'control-wrap',style:`top:${GlobalStorage.testDataY}px`})
    let pointCanvas=$('<div>',{id:'point-canvas'});
    let point=$('<div id="point"></div>')
    pointCanvas.append(point);
    let pointInputX=$('<input>',{id:'point-inputX', class:'control-input', type:'text'});
    let pointInputY=$('<input>',{id:'point-inputY', class:'control-input', type:'text'});
    //console.log(point);
    //this.pointFunction();
    this.pointsWrap.append(pointCanvas);
    this.pointsWrap.append(pointInputX);
    this.pointsWrap.append(pointInputY);
    GlobalStorage.container.append(this.pointsWrap);
    csInterface.evalScript(`$._ext.getPointControlValue("${pointName}")`, (res)=>{
      point.pointCoordsDrag(res,pointName,pointInputX,pointInputY);
    });

    ///
    /*pointInputX.on( "keypress", (e)=>{
      console.log(pointInputX.val());
      if(e.which == 13) {
        //console.log(point.css('top'));
        let yValue=parseInt(point.css('top'))
        let setValue=[pointInputX.val(),yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
    })*/


  }
  sliderMasterFunction(sliderInput){
    let storageInputData=0;
    csInterface.evalScript(`$._ext.getMasterSliderControlValue()`, (res) => {
      //console.log(res);
      let value = res * 1;
      this.slider.slider({
        value: value,
        min: 0,
        max: 100,
        create: function() {
          //console.log('sliderInput',)
          storageInputData=$(this).slider("value");
          sliderInput.val(storageInputData);
        },
        slide: function(event, ui) {
          csInterface.evalScript(`$._ext.setMasterSliderControlValue("${ui.value}")`)
            //console.log(ui.value);
            storageInputData=ui.value;
          sliderInput.val(ui.value);
        }
      });
    });

    sliderInput.on("keypress", (e) => {
      let sliderInputVal=sliderInput.val();
      if (e.which == 13&&parseInt(sliderInputVal)||e.which == 13&&parseInt(sliderInputVal)==0) {
        if(sliderInputVal>100){
          sliderInputVal=100
          sliderInput.val(storageInputData);
        }
        else if(sliderInputVal<0){
          sliderInputVal=0
          sliderInput.val(storageInputData);
        }
        csInterface.evalScript(`$._ext.setMasterSliderControlValue("${sliderInputVal}")`)
        this.slider.slider("value", sliderInputVal);
      }
      else if(e.which == 13&&!parseInt(sliderInputVal)){
        sliderInput.val(storageInputData);
      }


    })

  }

  sliderFunction(sliderInput, sliderName) {
    let storageInputData=0;
      csInterface.evalScript(`$._ext.getSliderControlValue("${sliderName}")`, (res) => {
        //console.log(res);
        let value = res * 1;
        this.slider.slider({
          value: value,
          min: -100,
          max: 100,
          create: function() {
            //console.log('sliderInput',)
            storageInputData=$(this).slider("value");
            sliderInput.val(storageInputData);
          },
          slide: function(event, ui) {
            csInterface.evalScript(`$._ext.setSliderControlValue("${sliderName}","${ui.value}")`)
              //console.log(ui.value);
              storageInputData=ui.value;
            sliderInput.val(ui.value);
          }
        });
      });

      sliderInput.on("keypress", (e) => {
        let sliderInputVal=sliderInput.val();
console.log('sliderInputVal',sliderInputVal);
        if (e.which == 13&&parseInt(sliderInputVal)||e.which == 13&&parseInt(sliderInputVal)==0) {
          if(sliderInputVal>100){
            sliderInputVal=100
            sliderInput.val(storageInputData);
          }
          else if(sliderInputVal<(-100)){
            sliderInputVal=-100
            sliderInput.val(storageInputData);
          }
          csInterface.evalScript(`$._ext.setSliderControlValue("${sliderName}","${sliderInputVal}")`)
          this.slider.slider("value", sliderInputVal);
        }
        else if(e.which == 13&&!parseInt(sliderInputVal)){
          sliderInput.val(storageInputData);
        }


      })
  }

  angleFunction(angleInputSpin, angleInputValue, angleName) {
    //let spin=0;
    let data=0;
    //let angle=0;
    let oldVal=0;
    let countCircle=0;
    let inputData=0;
    //let outputData=0;

    //let knobEl=$("#knob");
    function calcDataFromInput(e, data){
      let angleInputSpinVal=angleInputSpin.val();
      let angleInputValueVal=angleInputValue.val();
      let parseIntSpin=parseInt(angleInputSpinVal);
      let parseIntValue= parseInt(angleInputValueVal);
      //let value=0;
      if (e.which == 13&&!isNaN(parseIntSpin)&&!isNaN(parseIntValue)) {
        console.log(angleInputValueVal.search("[+]"));
        /*if(angleInputSpinVal.search("[+]")==-1&&angleInputValueVal.search("[+]")==-1){
          value=(angleInputValue.val()*1);
          data=(angleInputSpin.val()*360)+value;
        }
        else if(angleInputSpinVal.search("[+]")==0){
          value=(inputData.angle*1);
          data=(angleInputSpinVal*1)+value;
        }
        else if(angleInputValueVal.search("[+]")==0){
          value=(inputData.spin*1);
          data=(angleInputValueVal*1)+value;
        }*/
        let value=(angleInputValue.val()*1);
        data=(angleInputSpin.val()*360)+value;
        inputData=parsRowdata(data);
        csInterface.evalScript(`$._ext.setAngleControlValue("${angleName}","${data}")`);
        let resAngle=(360+(inputData.angle*1))/360;
            resAngle=Math.round((resAngle%1)*360);
        $("#knob").roundSlider("setValue", resAngle);
        countCircle=inputData.spin;
        console.log(inputData.angle);
        angleInputValue.val(inputData.angle);
        angleInputSpin.val(inputData.spin);
        return data;

      }
      else if(e.which == 13&&(!parseInt(angleInputSpinVal)||!parseInt(angleInputValueVal))){
        angleInputValue.val(inputData.angle);
        angleInputSpin.val(inputData.spin);
      }
    }
    angleInputSpin.on("keypress",(e)=>{
      data=calcDataFromInput(e, data);
    })

    angleInputValue.on("keypress",(e)=>{
      data=calcDataFromInput(e, data);
    })

    csInterface.evalScript(`$._ext.getAngleControlValue("${angleName}")`, (res) => {
      console.log(res);


      /*let num=(res*1)/360;
      if(num<0){
        spin=Math.ceil(num)
        }
        else{
        spin=Math.floor(num);
        }
      angle=((num%1)*360).toFixed(0);*/
      //angle=Math.abs(angle);
      data=res;
      angleInputSpin.on("keypress",(e)=>{
        data=calcDataFromInput(e, data);
      })

      angleInputValue.on("keypress",(e)=>{
        data=calcDataFromInput(e, data);
      })

      inputData=parsRowdata(data);
      angleInputSpin.val(inputData.spin);
      angleInputValue.val(inputData.angle);
      console.log(inputData.angle);
      let resAngle=(360+(inputData.angle*1))/360;
          resAngle=Math.round((resAngle%1)*360);
          console.log(resAngle);
      countCircle=inputData.spin;
      $("#knob").roundSlider({
        handleShape: "round",
        width: 22,
        step:'1',
        radius: 48,
        max: "360",
        handleSize:14,
        value: resAngle,
        startAngle: 90,
        animation: false,
        showTooltip:false,
        start:function(args){
          /*inputData=parsRowdata(data);
          angleInputSpin.val(inputData.spin);
          angleInputValue.val(inputData.angle);
          console.log("START",args.value)*/
        },
        drag: function (args) {
          console.log("DRAG",args.value);
          console.log("CountCircle",countCircle);

          if(args.value>300&&oldVal<100){
    oldVal=args.value
    countCircle--;
    }
    else if(oldVal>300&&args.value<100){
    oldVal=args.value
    countCircle++;
    }
    else{
    oldVal=args.value
    }

    data=(countCircle*360)+Math.abs(args.value);
    console.log("data",data);
    inputData=parsRowdata(data);
    //
    /*let num=(data*1)/360;
    if(num<0){
      spin=Math.ceil(num)
      }
      else{
      spin=Math.floor(num);
      }
    angle=((num%1)*360).toFixed(0);*/
    //

    angleInputSpin.val(inputData.spin);
    angleInputValue.val(inputData.angle);

          csInterface.evalScript(`$._ext.setAngleControlValue("${angleName}","${data}")`);
        }
      });
    });

    function parsRowdata(data){
      let obj={}
      let spin=0;
      let num=(data*1)/360;
      if(num<0){
        obj.spin=Math.ceil(num)
        }
        else{
        obj.spin=Math.floor(num);
        }
      obj.angle=((num%1)*360).toFixed(0);
      return obj;
    };
  }




}

export default createControlsWindows;
