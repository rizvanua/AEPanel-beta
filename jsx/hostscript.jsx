function addExpressionFunction(effectName, propName,thisPropName,_this,multiplierStr,type){
         var multiplierArrModif=[];        
        if(multiplierStr&&multiplierStr.length>0){
          var multiplierArr= multiplierStr.split(',');         
        
         for(var i=0;i<multiplierArr.length;i++){
                 var str='(thisLayer.effect("'+multiplierArr[i]+'").slider.value/100)';
                
                 multiplierArrModif.push(str);
             }
         
            var arrStr=multiplierArrModif.join('*');
           
            var expressionString='thisLayer.effect('+'"'+thisPropName+'"'+').'+type+'*'+arrStr; 
          _this.currentLayer.effect.property(effectName).property(propName).expression=expressionString;
        }
    else{
           
            var expressionString='thisLayer.effect('+'"'+thisPropName+'"'+').'+type; 
            _this.currentLayer.effect.property(effectName).property(propName).expression=expressionString;
        }     
    };

function addPropertyToEffect(effectName, propName, propValue,_this){
     
        _this.currentLayer.effect.property(effectName).property(propName).setValue([propValue]);
};

function checkEffectsQuantity(_this){
 if (_this.effectsQuantity!=_this.currentLayer.effect.numProperties)
 { 
     var effectArray=[];
      
      _this.effectsQuantity=_this.currentLayer.effect.numProperties;
      
      for(var i=_this.currentLayer.effect.numProperties; i--;){
                   
          effectArray.push(_this.currentLayer.effect(i+1).name);
             
              
          
          }
      
     return effectArray;
  }
else{
return false;    
    }
 //return 
 
};

function generatorPOI() {
    var F1 = function() {
       return (((1+Math.random())*0x100)|0);
    };
    var F2 = function() {
       return (((1+Math.random())*0x200)|0);
    };
    return ("["+F1()+"," + F2() + "]");
}

//MAIN CODE
$._ext = {
  checkChangesGlobal: function() {
    this.storedLayer;
    this.currentCompName;
    this.currentLayerName;
    this.currentEffectName;
    this.effectsQuantity;

    if (app.project.activeItem === null) { //check if  at least one item is active
      return 100; // No one Item is active     
    }
    var myLayers = app.project.activeItem.selectedLayers;
    if (myLayers && myLayers.length != 0) {
      this.storedLayer = myLayers;
    }


    if (this.storedLayer && this.storedLayer.length != 0 && isValid(this.storedLayer[0])) {
      for (key in this.storedLayer) {
        var thisLayerName = this.storedLayer[0].name;
        var thisLayerIndex = this.storedLayer[0].index;
      }


      if (!thisLayerName || !this.currentLayerName || (app.project.activeItem && this.currentComp.name != app.project.activeItem.name) || (thisLayerName != this.currentLayerName) || (thisLayerIndex != this.currentLayerIndex)) { //check if user changes composition or layer

        if (!thisLayerName) {
          return false;
        }
        this.effectsQuantity = this.currentLayer.effect.numProperties;
        this.currentLayerName = thisLayerName;
        this.currentLayerIndex = thisLayerIndex;


        if (this.state === true) {
          this.initialProjectTest();
        } else {
          return false;
        }

        return 0;
      } else if (this.currentLayer.effect.numProperties) {
        var stateScope = {
          selectedEffect: {
            effectName: null, // the name of selected effect
            effectIndex: null, // the index of selected effect
            distrInst: null //the quantity of distributors                    
          },
          effectArray: [],
          hasVR: false
        };

        if (this.currentLayer.effect('Mantra VR')) { // check if  'Mantra VR'  is on this layer 
          stateScope.hasVR = true;
        }
        this.effectsQuantity = this.currentLayer.effect.numProperties;

        for (var i = this.currentLayer.effect.numProperties; i--;) {

          if (this.currentLayer.effect(i + 1).selected) {
            stateScope.selectedEffect.effectName = this.currentLayer.effect(i + 1).name;
            stateScope.selectedEffect.effectIndex = this.currentLayer.effect(i + 1).propertyIndex;
          }
          if (this.currentLayer.effect(i + 1).selected && this.currentLayer.effect(i + 1).property('Number Of Instances')) { // check if this effect is selected and this effect has            
            stateScope.selectedEffect.distrInst = Math.round(this.currentLayer.effect(i + 1).property('Number Of Instances').value); // get value  of property('Number Of Instances')   and assiggn to object  stateScope
          }
          stateScope.effectArray.push(this.currentLayer.effect(i + 1).name); //push current effect name into ffectArray

        }
        return JSON.stringify(stateScope);
      } else if (this.currentLayer.effect.numProperties == 0) {
        return '110'; //empty layer without effects
      }
    } else {
      return false;
    }

  },
  initialProjectTest: function() {
    this.countM = 0;
    this.state = false;
    this.currentComp = app.project.activeItem;



    if (this.currentComp) {
      var layerCount = this.currentComp.numLayers;

      if (layerCount > 0) {

        for (var i = 0; i < layerCount; i++) {

          if (this.currentComp.layers[i + 1] && this.currentComp.layers[i + 1].selected && this.currentComp.layers[i + 1] instanceof AVLayer) {

            this.currentLayerName = this.currentComp.layers[i + 1].name;
            this.currentLayerIndex = this.currentComp.layers[i + 1].index;

            this.effectsQuantity = this.currentComp.layers[i + 1].effect.numProperties;
            this.currentLayer = this.currentComp.layers[i + 1];



            this.itemWidth = app.project.activeItem.width;
            this.itemHight = app.project.activeItem.height;

            if (!this.currentComp.layers[i + 1].effect('Mettle Mantra VR')) { // chesk if 'Mantra VR' is on this layer
              return false;
            }

            this.state = true;

          }

        }
        return this.state;

      } else {
        this.effectsQuantity = 0;

        return false;
      }


    } else {


      return false;
    }
  },

  getData: function() {
    var Obj = {
      commonControlObj: [],
      effectsObj: [],
      linesObj: [],
      multiplierObj: [],
      hasVR: false
    };


    if (this.currentLayer.effect('Mantra VR')) {
      Obj.hasVR = true;
    }

    for (var i = 0; i < this.currentLayer.effect.numProperties; i++) {


      switch (this.currentLayer.effect(i + 1).matchName) {
        case "ADBE Angle Control":
          var thisMatchName = this.currentLayer.effect(i + 1).matchName;
          var thisName = this.currentLayer.effect(i + 1).name
          Obj.commonControlObj.push({
            baseEffect: thisMatchName.replace("ADBE ", ""),
            realName: thisName
          });

          break;
        case "ADBE Slider Control":
          var thisMatchName = this.currentLayer.effect(i + 1).matchName;
          var thisName = this.currentLayer.effect(i + 1).name;
          if (thisName.search(/Multiplier/i) > -1) {
            this.countM += 1;
            Obj.multiplierObj.push({
              baseEffect: thisMatchName.replace("ADBE ", ""),
              realName: thisName
            });
          } else {
            Obj.commonControlObj.push({
              baseEffect: thisMatchName.replace("ADBE ", ""),
              realName: thisName
            });
          }

          break;
        case "ADBE Point Control":
          var thisMatchName = this.currentLayer.effect(i + 1).matchName;
          var thisName = this.currentLayer.effect(i + 1).name
          Obj.commonControlObj.push({
            baseEffect: thisMatchName.replace("ADBE ", ""),
            realName: thisName
          });

          break;
        case "Mettle Mantra VR":

          var thisMatchName = this.currentLayer.effect(i + 1).matchName;
          var thisName = this.currentLayer.effect(i + 1).name
          Obj.effectsObj.push({
            baseEffect: thisMatchName,
            name: thisName
          });
          Obj.hasVR = true;

          break;
        default:
          var thisEffectObj = {
            point: {},
            angle: {},
            slider: {},
            propArray: []
          };

          var thisName = this.currentLayer.effect(i + 1).name;
          var thisMatchName = this.currentLayer.effect(i + 1).matchName;
          var layerEffect = this.currentLayer.effect(i + 1);
          thisEffectObj.baseEffect = thisMatchName.replace("Mettle Mantra ", "");
          thisEffectObj.name = thisName;

          for (var d = 0; d < layerEffect.numProperties; d++) {
            this.functionEffectLoop(layerEffect, d, thisEffectObj);

            if (layerEffect.property(d + 1).expressionEnabled && layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)) {
              var LineTo = layerEffect.name;
              var propertyOfEffect = layerEffect.property(d + 1).name;
              var LineFrom = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[1];
              Obj.linesObj.push({
                "LineFrom": LineFrom,
                "LineTo": LineTo,
                "propertyOfEffect": propertyOfEffect
              });

            }

          }
          Obj.effectsObj.push(thisEffectObj);
      }

    }

    return JSON.stringify(Obj);
  },
  applyEffect: function(effectName) { // function to apply effect from HTML5 panel

    var effectObj = {

      point: {},
      angle: {},
      slider: {},
      propArray: []
    }

    if (this.currentComp) {
      var layerEffect = this.currentLayer.Effects.addProperty(effectName);
      effectObj.name = layerEffect.name;

      for (var i = 0; i < layerEffect.numProperties; i++) {
        this.functionEffectLoop(layerEffect, i, effectObj);


      }


      return JSON.stringify(effectObj);


    }
  },
  findEffect: function(effectName) {

    var Obj = {
      commonControlObj: [],
      effectsObj: [],
      linesObj: [],
      multiplierObj: []
    };

    var layerEffect = this.currentLayer.effect.property(effectName);

    switch (layerEffect.matchName) {
      case "ADBE Angle Control":
        var thisMatchName = layerEffect.matchName;
        var thisName = effectName;
        Obj.commonControlObj.push({
          baseEffect: thisMatchName.replace("ADBE ", ""),
          realName: thisName
        });

        break;
      case "ADBE Slider Control":
        var thisMatchName = layerEffect.matchName;
        var thisName = effectName;
        if (thisName.search(/Multiplier/i) > -1) {
          Obj.multiplierObj.push({
            baseEffect: thisMatchName.replace("ADBE ", ""),
            realName: thisName
          });
        } else {
          Obj.commonControlObj.push({
            baseEffect: thisMatchName.replace("ADBE ", ""),
            realName: thisName
          });
        }
        break;
      case "ADBE Point Control":
        var thisMatchName = layerEffect.matchName;
        var thisName = effectName;
        Obj.commonControlObj.push({
          baseEffect: thisMatchName.replace("ADBE ", ""),
          realName: thisName
        });

        break;
      case "Mettle Mantra VR":
        var thisMatchName = layerEffect.matchName;
        var thisName = effectName;
        Obj.effectsObj.push({
          baseEffect: thisMatchName,
          name: thisName
        });
        Obj.hasVR = true;

        break;
      default:
        var thisEffectObj = {
          point: {},
          angle: {},
          slider: {},
          propArray: []
        };

        var thisName = effectName;
        var thisMatchName = layerEffect.matchName;
        thisEffectObj.baseEffect = thisMatchName.replace("Mettle Mantra ", "");
        thisEffectObj.name = thisName;

        for (var d = 0; d < layerEffect.numProperties; d++) {
          this.functionEffectLoop(layerEffect, d, thisEffectObj);

          if (layerEffect.property(d + 1).expressionEnabled && layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)) {
            var LineTo = layerEffect.name;
            var propertyOfEffect = layerEffect.property(d + 1).name;
            var LineFrom = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[1];
            var LineFromMult = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[3];

            Obj.linesObj.push({
              "LineFrom": LineFrom,
              "LineTo": LineTo,
              "propertyOfEffect": propertyOfEffect
            });

          }

        }
        Obj.effectsObj.push(thisEffectObj);
    }

    return JSON.stringify(Obj);
  },
  applyEffectPresets: function(effectName, propertyOfEffect) {
    var effectObj = {
      point: {},
      angle: {},
      slider: {},
      propArray: [],
      linesObj: []
    }
    var LineTo, propertyOfEffectName, LineFrom,LineFromMult, result, arrData, string_array;
    var propertyNew = [];
    //var layerEffect;
    //$.writeln(effectName);
    //$.writeln(propertyOfEffect);
    /*for(var keys in propertyOfEffect){
        $.writeln(key);
        $.writeln(propertyOfEffect[keys].expression);
        }*/
    var layerEffect = this.currentLayer.Effects.addProperty(effectName);
    if (propertyOfEffect.effectName){
        layerEffect.name=propertyOfEffect.effectName;
        }    
    effectObj.name = layerEffect.name;

    //
    for (var i = 0; i < layerEffect.numProperties; i++) {
      this.functionEffectLoop(layerEffect, i, effectObj);
    }
    //       

    for (var key in propertyOfEffect) {
        
        //$.writeln(propertyOfEffect[key].expression);
      if (typeof propertyOfEffect[key] == "object") {



        if (typeof propertyOfEffect[key].value == 'number' || typeof propertyOfEffect[key].value == 'object' ||typeof propertyOfEffect[key].value == 'string' && propertyOfEffect[key].value != 'null') {
        
          var propString = propertyOfEffect[key].value;
          if (typeof propertyOfEffect[key].value == "string") {
            string_array = propString.split(',');            
            propertyNew = [];
            for (var i = 0; i < string_array.length; i++) {

              arrData = string_array[i].split('*');

              if (arrData.length == 2) {
                result = this[arrData[0]] * arrData[1];
                propertyNew.push(result);
              } else if (arrData.length == 1) {
                result = this[arrData[0]];
                propertyNew.push(result);
              }

            }

            layerEffect.property(key).setValue(propertyNew);
          } else if(typeof propertyOfEffect[key].value == 'object' ) {
            result = propertyOfEffect[key].value;
            $.writeln(result);
            layerEffect.property(key).setValue(result);
          }
      else{
             result = propertyOfEffect[key].value;            
            layerEffect.property(key).setValue([result]);
          }
        }
        if (typeof propertyOfEffect[key].expression == 'number' || typeof propertyOfEffect[key].expression == 'string' && propertyOfEffect[key].expression != 'null') {

          layerEffect.property(key).expression = propertyOfEffect[key].expression;

          //                        
          if (layerEffect.property(key).expressionEnabled && layerEffect.property(key).expression.match(/\(\"([^)]+)\"\)/)) {
            LineTo = layerEffect.name;
            propertyOfEffectName = layerEffect.property(key).name;
            LineFrom = layerEffect.property(key).expression.match(/\(\"([^)]+)\"\)/)[1];
            LineFromMult = layerEffect.property(key).expression.match(/\(\"([^)]+)\"\)/)[3];

            effectObj.linesObj.push({
              "LineFrom": LineFrom,
              "LineTo": LineTo,
              "propertyOfEffect": propertyOfEffectName
            });
          }
          //

        }
      }

    }


    return JSON.stringify(effectObj);

  },

  createControl: function(controlType) {
    var Control = this.currentLayer.Effects.addProperty(controlType);
    return Control.name;
  },
  setMasterSliderControlValue: function(data) {
    this.currentLayer.effect('Mantra VR').property('Master').setValue(data);
  },
  getMasterSliderControlValue: function() {
    var value = this.currentLayer.effect('Mantra VR').property('Master').value;
    return value;
  },
  getSliderControlValue: function(controlName) {
    var value = this.currentLayer.effect.property(controlName).property("Slider").value;
    return value;
  },
  setSliderControlValue: function(controlName, data) {
    this.currentLayer.effect.property(controlName).property("Slider").setValue(data);
  },
  getPointControlValue: function(controlName) {
    var value = this.currentLayer.effect.property(controlName).property("Point").value;
    value.push(this.itemWidth)
    value.push(this.itemHight)
    return value;
  },
  setPointControlValue: function(controlName, data) {

    var dataArr = data.split(',');
    this.currentLayer.effect.property(controlName).property("Point").setValue(dataArr);
  },
  getAngleControlValue: function(controlName) {
    var value = this.currentLayer.effect.property(controlName).property("Angle").value;
    return value;
  },
  setAngleControlValue: function(controlName, data) {
    this.currentLayer.effect.property(controlName).property("Angle").setValue(data);
  },
  addCommonControls: function(effectName, propName, thisPropName, type, multiplierStr) {
    //$.writeln(type);
    addExpressionFunction(effectName, propName, thisPropName, this, multiplierStr, type);



  },
  createMultiplier: function() {
    this.countM += 1;

    if (this.countM > 0) {
      var Multiplier = this.currentLayer.Effects.addProperty('Slider Control').name = 'Multiplier' + (this.countM - 1);

      return 'Multiplier' + (this.countM - 1);
    } else {
      var Multiplier = this.currentLayer.Effects.addProperty('Slider Control').name = 'Multiplier';

      return 'Multiplier';
    }

  },
  moveEffectIndex: function(effectName, number) {


    var number = (number * 1);
    if (number > 0 && effectName) {
      this.currentLayer.effect.property(effectName).moveTo(number);
      return number;
    }
  },

  renameEffect: function(oldEffectName, newEffectName) {
    this.currentLayer.effect.property(oldEffectName).name = newEffectName;
    return newEffectName;
  },

  deleteEffect: function(effectName) {
    if (effectName != "null" && this.currentLayer.effect.property(effectName)) {


      this.currentLayer.effect.property(effectName).remove();
      this.currentLayer.selected = true;


      return effectName;
    }

  },
  deletePropExpression: function(effectName, propertyName) {

    this.currentLayer.effect.property(effectName).property(propertyName).expressionEnabled = false;
    this.currentLayer.effect.property(effectName).property(propertyName).expression = "";
  },

  deleteCommonControl: function(arrayOfLinkedEffects, thisCommonContrlName) {


    this.effectNameArr = arrayOfLinkedEffects.split(';');


    //
    function deleteFromEffects(callback) {
      if (this.effectNameArr[0] != '') {
        for (var i = 0; i < this.effectNameArr.length; i++) {

          var effectNameArr = JSON.parse(this.effectNameArr[i]);

          if (this.currentLayer.effect.property(effectNameArr.Lineto)) {
            this.currentLayer.effect.property(effectNameArr.Lineto).property(effectNameArr.propertyOfEffect).expressionEnabled = false;
            this.currentLayer.effect.property(effectNameArr.Lineto).property(effectNameArr.propertyOfEffect).expression = "";
          }

        }
      }
      callback.call(this);
    };
    deleteFromEffects.call(this, function() {
      if (this.currentLayer.effect.property(thisCommonContrlName)) {
        this.currentLayer.effect.property(thisCommonContrlName).remove();
      }
    });
    //


    this.currentLayer.selected = true;
  },
  selectEffect: function(effectName) {

    this.currentLayer.effect.property(effectName).selected = true;

  },
  selectCommonControl: function(effectName) {
    this.currentLayer.effect.property(effectName).selected = true;

  },
  unSelectCommonControl: function(effectName) {
    if (this.currentLayer.effect.property(effectName)) {
      this.currentLayer.effect.property(effectName).selected = false;
    }


  },
  resetLayer: function() {
    var arrObj = [];

    for (var i = this.currentLayer.effect.numProperties; i--;) {
      var obj = {};
      obj.currentName = this.currentLayer.effect(i + 1).name;
      obj.matchName = this.currentLayer.effect(i + 1).matchName
      for (var d = 0; d < this.currentLayer.effect(obj.currentName).numProperties; d++) {
        if (this.currentLayer.effect(obj.currentName).property(d + 1).expressionEnabled) {
          var propName = this.currentLayer.effect(obj.currentName).property(d + 1).name;
          obj[propName] = this.currentLayer.effect(obj.currentName).property(d + 1).expression;
        }
      }
      arrObj.push(obj);
      this.currentLayer.effect(obj.currentName).remove();
    }

    for (var a = arrObj.length; a--;) {
      var effectHasBeenReseted = this.currentLayer.Effects.addProperty(arrObj[a].matchName);
      effectHasBeenReseted.name = arrObj[a].currentName;
      for (var key in arrObj[a]) {
        if (key != 'matchName' && key != 'currentName') {
          effectHasBeenReseted.property(key).expression = arrObj[a][key];
        }
      }
    }
    this.currentLayer.selected = true;

  },
  clearLayer: function(toClearArr) {
    var effectArr = toClearArr.split(',');

    for (var i = 0; i < effectArr.length; i++) {

      if (this.currentLayer.effect(effectArr[i])) {
        this.currentLayer.effect(effectArr[i]).remove();
      }
    }
  },
  functionEffectLoop: function(layerEffect, d, Obj) { //this function is used in Loop of effect properties
    if (layerEffect.property(d + 1).name != 'Frame Layout' && layerEffect.property(d + 1).name != 'Compositing Options') {
      if (layerEffect.property(d + 1).name == 'Number Of Instances') {
        Obj.distrInst = Math.round(layerEffect.property(d + 1).value);
      }
      switch (layerEffect.property(d + 1).propertyValueType) {
        case 6415:
          Obj.propArray.push({
            name: layerEffect.property(d + 1).name,
            state: false,
            index: layerEffect.property(d + 1).propertyIndex,
            type: 'point'
          })
          break;
        case 6417:
          if (layerEffect.property(d + 1).hasMax && layerEffect.property(d + 1).maxValue > 1) {
            Obj.propArray.push({
              name: layerEffect.property(d + 1).name,
              state: false,
              index: layerEffect.property(d + 1).propertyIndex,
              type: 'slider'
            })
          } else if (layerEffect.property(d + 1).hasMax && layerEffect.property(d + 1).maxValue <= 1) {
            Obj.propArray.push({
              name: layerEffect.property(d + 1).name,
              state: false,
              index: layerEffect.property(d + 1).propertyIndex,
              type: 'checkbox'
            })
          } else {
            Obj.propArray.push({
              name: layerEffect.property(d + 1).name,
              state: false,
              index: layerEffect.property(d + 1).propertyIndex,
              type: 'angle'
            })
          }
          break;
        default:
          break;
      }
    }
  }
};


