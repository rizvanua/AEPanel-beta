/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _controlsPointCoordsDragJs = __webpack_require__(1);

	var _controlsPointCoordsDragJs2 = _interopRequireDefault(_controlsPointCoordsDragJs);

	var _startArraysArrSecondButton = __webpack_require__(3);

	var _startArraysArrSecondButton2 = _interopRequireDefault(_startArraysArrSecondButton);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _snapCustomFunctionsForEachInGroup = __webpack_require__(4);

	var _snapCustomFunctionsForEachInGroup2 = _interopRequireDefault(_snapCustomFunctionsForEachInGroup);

	var _snapCustomFunctionsToogleAttr = __webpack_require__(5);

	var _snapCustomFunctionsToogleAttr2 = _interopRequireDefault(_snapCustomFunctionsToogleAttr);

	var _snapCustomFunctionsToFrontToBack = __webpack_require__(6);

	var _snapCustomFunctionsToFrontToBack2 = _interopRequireDefault(_snapCustomFunctionsToFrontToBack);

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _helperFunctionsCatchPressButtonDelete = __webpack_require__(8);

	var _helperFunctionsCatchPressButtonDelete2 = _interopRequireDefault(_helperFunctionsCatchPressButtonDelete);

	var _customEventsDeleteEventListener = __webpack_require__(11);

	var _customEventsDeleteEventListener2 = _interopRequireDefault(_customEventsDeleteEventListener);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _helperFunctionsCheckBackEnd = __webpack_require__(12);

	var _helperFunctionsCheckBackEnd2 = _interopRequireDefault(_helperFunctionsCheckBackEnd);

	var _helperFunctionsRenameBlock = __webpack_require__(21);

	var _helperFunctionsRenameBlock2 = _interopRequireDefault(_helperFunctionsRenameBlock);

	var _menuLeftMenu = __webpack_require__(24);

	var _menuLeftMenu2 = _interopRequireDefault(_menuLeftMenu);

	var _menuTopMenu = __webpack_require__(26);

	var _menuTopMenu2 = _interopRequireDefault(_menuTopMenu);

	var _helperFunctionsRightMouseClick = __webpack_require__(27);

	var _helperFunctionsRightMouseClick2 = _interopRequireDefault(_helperFunctionsRightMouseClick);

	var _controlsCreateControlsWindowsJs = __webpack_require__(20);

	var _controlsCreateControlsWindowsJs2 = _interopRequireDefault(_controlsCreateControlsWindowsJs);

	__webpack_require__(28);

	var myReq = undefined;
	var status = false;
	var AnimationFrame = undefined;
	var filePresetObject = undefined;
	var multiplierArr = undefined;
	var effectNameLocal = undefined;
	var controlPropName = undefined;
	var thisPropName = undefined;
	var type = undefined;
	var systemPathOS = undefined;
	var path = undefined;
	var readDir = undefined;

	var jsonString = '[{"keyCode": \t46},{"keyCode": 46,"ctrlKey": true}]';
	_csInterface2['default'].registerKeyEventsInterest(jsonString); //register buttons to use in HTML5 panel
	(0, _helperFunctionsRightMouseClick2['default'])();
	_storage2['default'].container = $("#container");
	_storage2['default'].input = $("<input type='text' id='input'/>");
	_storage2['default'].container.append(_storage2['default'].input);
	new _controlsCreateControlsWindowsJs2['default']().createGround();
	_storage2['default'].input.keydown(function (event) {
	  //console.log(event);
	  if (_storage2['default'].renameObj.oldName && event.keyCode == 13) {
	    //console.log('ENTER');
	    _storage2['default'].renameObj.newName = _storage2['default'].input.val();
	    //console.log(GlobalStorage.input.val());
	    if (_storage2['default'].renameObj.oldName != _storage2['default'].renameObj.newName) {
	      (0, _helperFunctionsRenameBlock2['default'])(_storage2['default'].renameObj.oldName, _storage2['default'].renameObj.newName);
	      _csInterface2['default'].evalScript('$._ext.renameEffect("' + _storage2['default'].renameObj.oldName + '","' + _storage2['default'].renameObj.newName + '")', function (res) {

	        _storage2['default'].historyOfObjects[res].forEach(function (i) {
	          //Change CommonContrlName in expressions which are connected with this commonControl
	          //console.log(GlobalStorage.historyOfObjects[res]);
	          multiplierArr = _storage2['default'].historyOfObjects[res].multiplierArr.join(',');
	          if (i.node.nodeName == 'path' && i.node.lineFromCyrcle == "circleRight") {
	            type = _storage2['default'].historyOfObjects[res].shortName;
	            if (type && _storage2['default'].historyOfObjects[i.LineTo]) {
	              effectNameLocal = i.LineTo;
	              controlPropName = res;
	              thisPropName = i.propertyOfEffect;
	              //console.log(effectNameLocal);
	              //console.log(controlPropName);
	              //console.log(thisPropName);

	              _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + thisPropName + '","' + controlPropName + '","' + type + '","' + multiplierArr + '")');
	              //csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${thisPropName}","${controlPropName}","${type}")`);
	            } else if (i.LineTo && !_storage2['default'].historyOfObjects[i.LineTo]) {
	                delete i.LineTo;
	              }
	          }
	        });
	      });
	    }

	    _storage2['default'].input.css({ top: 0, left: 0, position: 'absolute', display: 'none' });
	  }
	});
	_storage2['default'].input.blur(function () {
	  _storage2['default'].input.css({ display: 'none' });
	});

	systemPathOS = _csInterface2['default'].getSystemPath(SystemPath.EXTENSION); //path to files

	path = _csInterface2['default'].getSystemPath(SystemPath.EXTENSION) + "/presets/"; // here we get information from JSON files
	//console.log(path);
	readDir = window.cep.fs.readdir(path);
	if (readDir.err === 0) {
	  var arrFiles = readDir.data;
	  arrFiles.forEach(function (file) {
	    //console.log(file);
	    var filePath = path + file;
	    var result = window.cep.fs.readFile(filePath);
	    if (result.err === 0) {
	      //console.log(result.data);
	      try {
	        filePresetObject = JSON.parse(result.data);
	        //console.log('filePresetObject',filePresetObject);
	        _startArraysArrSecondButton2['default'].presets.push({ name: filePresetObject.name });
	        _storage2['default'].arrOfPresetsEffects[filePresetObject.name] = {};
	        _storage2['default'].arrOfPresetsEffects[filePresetObject.name].propsArray = [];
	        filePresetObject.arrOfPresetsEffects.forEach(function (index, i) {
	          for (var key in index) {
	            var obj = _defineProperty({}, '"' + key + '"', index[key]);
	            _storage2['default'].arrOfPresetsEffects[filePresetObject.name].propsArray.push(obj);
	          }
	        });
	      } catch (err) {
	        console.log(err);
	      }
	    } else {}
	  });

	  //console.log(readDir.data);
	  //let readDir = window.cep.fs.readFile(path);
	} else {}

	/**/
	var createTopMenu = new _menuTopMenu2['default']();

	var createLeftMenu = new _menuLeftMenu2['default']();

	var checkStart = new _helperFunctionsCheckBackEnd2['default']();

	//pattern for radio buttons
	/*let imageOFF=R.image('img/radio-button-off.png',6,6,12,12).pattern(6,6,12,12);
	GlobalStorage.radioOFF=R.circle(0,0,6).attr({
	  fill:imageOFF
	}).toDefs();
	let imageON=R.image('img/radio-button-on.png',6,6,12,12).pattern(6,6,12,12);
	GlobalStorage.radioON=R.circle(0,0,6).attr({
	  fill:imageON
	}).toDefs();*/
	/*let radioOFF=S.rect(0,0,120,32,5).attr({
	fill:image
	}).toDefs();*/

	document.getElementsByTagName('svg')[0].addEventListener('click', function (e) {

	  if (e.target.nodeName === 'svg') {

	    if (_storage2['default'].toDelete != undefined && _storage2['default'].toDelete[1]) {
	      _storage2['default'].toDelete[1].attr({ stroke: "none" });
	    }

	    if (_storage2['default'].toDelete && _storage2['default'].prevActive && _storage2['default'].toDelete[1].node && _storage2['default'].prevActive[1].node && _storage2['default'].toDelete[1].node.effectName != _storage2['default'].prevActive[1].node.effectName) {

	      _storage2['default'].prevActive[1].attr({ stroke: "none" });
	    }

	    //GlobalStorage.toDelete=undefined;
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	/*$.fn.pointCoordsDrag= function () {

	};*/

	(function ($) {
	  $.fn.pointCoordsDrag = function (coords, pointName, pointInputX, pointInputY) {
	    var _this = this;

	    var width = $(this).parent().width();
	    var height = $(this).parent().height();
	    console.log(coords);
	    var coordsArr = [];
	    var currentWidth = coordsArr[0];
	    var currentHight = coordsArr[1];
	    var compositionWidth = (coordsArr[2] * 1).toFixed(1);
	    var compositionHight = (coordsArr[3] * 1).toFixed(1);
	    var storageInputCoordsX = undefined;
	    var storageInputCoordsY = undefined;
	    var pointInputXVal = undefined;
	    var thisPointX = undefined;
	    var yValue = undefined;
	    var setValue = undefined;
	    var pointInputYValж = undefined;
	    var thisPointY = undefined;
	    var xValue = undefined;
	    var coordY = undefined;
	    var coordX = undefined;

	    pointInputX.on("keypress", function (e) {
	      pointInputXVal = pointInputX.val();
	      if (e.which == 13 && parseInt(pointInputXVal) || e.which == 13 && parseInt(pointInputXVal) == 0) {
	        thisPointX = pointInputXVal * width / compositionWidth + "px";
	        $(_this).css({ 'left': thisPointX });
	        yValue = parseInt($(_this).css('top')) * compositionHight / height;
	        setValue = [pointInputXVal, yValue];
	        _csInterfaceJs2["default"].evalScript("$._ext.setPointControlValue(\"" + pointName + "\",\"" + setValue + "\")");
	      } else if (e.which == 13 && !parseInt(pointInputXVal)) {
	        pointInputX.val(storageInputCoordsX);
	      }
	    });

	    pointInputY.on("keypress", function (e) {
	      pointInputYVal = pointInputY.val();
	      if (e.which == 13 && parseInt(pointInputYVal) || e.which == 13 && parseInt(pointInputYVal) == 0) {
	        thisPointY = pointInputYVal * height / compositionHight + "px";
	        $(_this).css({ 'top': thisPointY });
	        xValue = parseInt($(_this).css('left')) * compositionWidth / width;
	        setValue = [xValue, pointInputYVal];
	        _csInterfaceJs2["default"].evalScript("$._ext.setPointControlValue(\"" + pointName + "\",\"" + setValue + "\")");
	      } else if (e.which == 13 && !parseInt(pointInputYVal)) {
	        pointInputY.val(storageInputCoordsY);
	      }
	    });
	    //
	    $(this).draggable({
	      create: function create(event, ui) {

	        coordsArr = coords.split(',');
	        currentWidth = coordsArr[0];
	        currentHight = coordsArr[1];
	        compositionWidth = (coordsArr[2] * 1).toFixed(1);
	        compositionHight = (coordsArr[3] * 1).toFixed(1);
	        pointInputX.val(currentWidth);
	        pointInputY.val(currentHight);
	        storageInputCoordsX = currentWidth;
	        storageInputCoordsY = currentHight;

	        thisPointY = currentHight * height / compositionHight + "px";
	        thisPointX = currentWidth * width / compositionWidth + "px";
	        $(this).css({ 'top': thisPointY });
	        $(this).css({ 'left': thisPointX });
	        $(this).show();
	      },
	      drag: function drag(event, ui) {

	        coordY = parseInt($(this).css('top'), 10);
	        coordX = parseInt($(this).css('left'), 10);

	        if (ui.position.top > height) {
	          ui.position.top = height;
	          $(this).css({ 'top': height + "px" });
	        } else if (ui.position.top < 0) {
	          ui.position.top = 0;
	          $(this).css({ 'top': '0px' });
	        }
	        if (ui.position.left > width) {
	          ui.position.left = width;
	          $(this).css({ 'left': width + "px" });
	        } else if (ui.position.left < 0) {
	          ui.position.left = 0;
	          $(this).css({ 'left': '0px' });
	        }
	        yValue = ui.position.top * compositionHight / height;
	        xValue = ui.position.left * compositionWidth / width;
	        storageInputCoordsX = pointInputX.val(xValue);
	        storageInputCoordsY = pointInputY.val(yValue);
	        setValue = [xValue, yValue];
	        _csInterfaceJs2["default"].evalScript("$._ext.setPointControlValue(\"" + pointName + "\",\"" + setValue + "\")");
	      }
	    });
	    return this;
	  };
	})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var csInterface = new CSInterface();

	exports["default"] = csInterface;
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SecondButton = {
	  effects: [{ name: "3D Noise" }, //if you add new control (poi, fov, waves etc) don't forget add this into pages src\sideBar\secondSideBarBlocks.js into "dummy.node" propety and page src\mainBlock\mainBlock.js  createBlockEffects "workBlockSet" property
	  { name: "Blur" }, { name: "Chromatic Aberrations" }, { name: "Chrome Spheres" }, { name: "Circular Waves" }, { name: "Color Gradients" }, { name: "Escher Droste" }, { name: "Flat Mirror" }, { name: "Graphix" }, { name: "Hyperbolix" }, { name: "Magnifying Glass" }, { name: "Mettle Mantra VR" }, { name: "Meridian Waves" }, { name: "Mobius Raw" }, { name: "Mobius Rotate" }, { name: "Mobius Zoom" }, { name: "Radiate" }, { name: "Repeater" }, { name: "Rotator" }, { name: "Spiraler" }, { name: "Stretcher" }],
	  commonControls: [{ name: "Point Control", effectName: "Point Control", fullname: "Point Control", shortName: "point" }, { name: "Angle Control", effectName: "Angle Control", fullname: "Angle Control", shortName: "angle" }, { name: "Slider Control", effectName: "Slider Control", fullname: "Slider Control", shortName: "slider" }],
	  distributor: [{ name: "Cube" }, { name: "Sphere" }, { name: "Random" }],
	  presets: [], //We push object {name: "SomeName"} from presets folder via window.cep.fs.readdir and window.cep.fs.readFile API
	  multiplier: [{ name: "Multiplier", id: "multiplier-one", shortName: "multiplier" }]

	};

	exports["default"] = SecondButton;
	module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	//Custom function to hangle ellements in group

	"use strict";

	Snap.plugin(function (Snap, Element, Paper, global) {
	  Snap.Set.prototype.forEachInGroup = function (callback) {

	    for (var key in this.items[0]) {
	      if (this.items[0][key].node) {
	        callback(this.items[0][key]);
	      }
	    }
	  };
	});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	//Custom function to toogle Attribute clipPath

	'use strict';

	Snap.plugin(function (Snap, Element, Paper, global) {
	  Element.prototype.toogleAttr = function (elem, clipR, attr) {
	    if (!elem.attr(attr) || elem.attr(attr) !== 'none') {
	      return this.node.removeAttribute(attr);
	    } else {

	      console.log('else');
	      elem.attr({ clipPath: clipR });
	    }
	  };
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Snap.plugin(function (Snap, Element, Paper, glob) {
	    var elproto = Element.prototype;
	    elproto.toFront = function () {
	        this.appendTo(this.paper);
	    };
	    elproto.toBack = function () {
	        this.prependTo(this.paper);
	    };
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	//const R = Raphael("container", '100%', '100%' );
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var R = Snap("#svg");

	exports["default"] = R;
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _innerDeleteFunction = __webpack_require__(10);

	var _innerDeleteFunction2 = _interopRequireDefault(_innerDeleteFunction);

	//Function which cathc pressing of "Delete" button

	var catchPressButtonDelete = window.addEventListener("keydown", function (event) {
	  //event.preventDefault();
	  var nameOfBlock = undefined;
	  //console.log(event.target.nodeName!='INPUT');
	  if (_storage2['default'].toDelete && _storage2['default'].toDelete.currentName && _storage2['default'].toDelete.currentName == "Master") {
	    return false;
	  }
	  //console.log(event);
	  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
	  //csInterface.registerKeyEventsInterest(keyEventsInterest);

	  //console.log(GlobalStorage.distribitorObjectsStorage[genId]);

	  if (_storage2['default'].toDelete != undefined && event.target.nodeName != 'INPUT' && event.keyCode == 46) {
	    if (_storage2['default'].toDelete.setEffectName) {
	      nameOfBlock = _storage2['default'].toDelete.setEffectName;
	    } else if (_storage2['default'].toDelete.fullCommonContrlName) {
	      nameOfBlock = _storage2['default'].toDelete.thisCommonContrlName;
	    }
	    //let effectName=GlobalStorage.toDelete.setEffectName;
	    (0, _innerDeleteFunction2['default'])(nameOfBlock);
	  }
	});

	exports['default'] = catchPressButtonDelete;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	// Global storage for ever functions. It uses to keep objects and variables which use as global.

	var GlobalStorage = {
	  glassId: {},
	  container: {}, //link to the 'div#container' element
	  input: {}, //link to the HTML input element
	  clickTime: {
	    downTime: 0,
	    upTime: 0
	  },
	  initial: false,
	  renameObj: {
	    oldName: null,
	    newName: null
	  },
	  hasVR: false,
	  lastEffectBlock: {
	    y: 0
	  },
	  prevActive: undefined,
	  historyOfObjects: {
	    itemArray: []
	  },
	  effectsCordX: 190,
	  controlsCordX: 40,
	  undermostEffectBlock: {
	    y: 10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
	  },
	  undermostCommonControlBlock: {
	    y: 10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
	  },
	  effectCreateDrag: {
	    active: false,
	    effectType: null,
	    distribitorMouseOver: null
	  },
	  controlProp: {
	    type: null, //type of common control ('point' or 'angle' or 'slider')
	    name: null, // name of commonControls property (for example 'Point of Interest')
	    circle: null, // link to the sibling circle to toogle className
	    coordDif: null //different in number between getBBox().y of CommonControlBlock and this property block
	  },
	  effectCheckArr: [],
	  blockToRemove: null,
	  arrOfPresetsEffects: {}, // storage for all array with presets' effects
	  distribitorObjectsStorage: {}, // Here we hold all Distributors sets
	  toDelete: undefined, //Temporary object which one contents object for deleting by pressing key "DELETE"
	  currentLine: null, //Temporary object with just created Line
	  overMouseSet: null, //Temporary object what contents Set over which fire event mouseover
	  overDistributorMouse: null, //Temporary object what contents genId of DISTRIBUTOR need to add common control (FOV, Strange)
	  testDataX: 0,
	  testDataY: 0,
	  greyGround: {} //grey background for controlWindow
	};

	exports["default"] = GlobalStorage;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	//We use this function in files "customEvents/customEventListeners.js" and "helperFunctions/deleteFunctions.js"

	function innerDeleteFunction(nameOfBlock) {
	  //Remove Controls Windows if they are opened
	  _storage2['default'].greyGround.hide();
	  _storage2['default'].container.children('#slider-wrap').remove();
	  _storage2['default'].container.children('#point-wrap').remove();
	  _storage2['default'].container.children('#angle-wrap').remove();
	  //
	  var effectName = undefined;
	  var remove = undefined;
	  var CommonContrlName = undefined;
	  var thisCommonContrlName = undefined;
	  var itemsArray = undefined;
	  //let thisCommonContrlName;
	  var promise = new Promise(function (resolve) {
	    _storage2['default'].overMouseSet = null;
	    //let effectName=GlobalStorage.toDelete.setEffectName;
	    if (_storage2['default'].toDelete && _storage2['default'].toDelete.setEffectName && _storage2['default'].historyOfObjects[nameOfBlock]) {
	      //Remove EffectBlock
	      effectName = _storage2['default'].toDelete.setEffectName;
	      delete _storage2['default'].historyOfObjects[effectName];

	      //Call to ExtScript
	      _csInterfaceJs2['default'].evalScript('$._ext.deleteEffect("' + effectName + '")', function (res) {
	        //Remove effects from After Effects
	        //console.log(res);
	        if (res == 'Mantra VR') {
	          var glassId = document.getElementById("glass");
	          glassId.style.display = "block";
	          _storage2['default'].hasVR = false;
	        }
	        remove = _storage2['default'].toDelete.remove();
	        resolve(remove);
	      });
	      //
	    } else if (_storage2['default'].toDelete && _storage2['default'].toDelete.thisCommonContrlName && _storage2['default'].historyOfObjects[nameOfBlock] && _storage2['default'].toDelete.fullCommonContrlName != "multiplier") {
	        //Remove CommonControls
	        //console.log(GlobalStorage.historyOfObjects[nameOfBlock]);
	        CommonContrlName = _storage2['default'].toDelete.fullCommonContrlName;
	        thisCommonContrlName = _storage2['default'].toDelete.thisCommonContrlName;
	        itemsArray = _storage2['default'].toDelete.items;

	        var arrayOfLinkedEffects = _.filter(itemsArray, function (i) {
	          //filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
	          if (i.node.nodeName == "path") {
	            if (_storage2['default'].historyOfObjects[i.LineTo] && _storage2['default'].toDelete.currentName != i.LineTo) {
	              var elemObj = _storage2['default'].historyOfObjects[i.LineTo][0][0];
	              for (var key in elemObj) {
	                if (elemObj[key].type == 'rect' && elemObj[key].attr('propDataName') == i.propertyOfEffect) {
	                  //Here we change class of circle from 'red' to 'grey'
	                  elemObj[key].node.previousElementSibling.classList.remove('true');
	                  elemObj[key].node.previousElementSibling.classList.add('false');
	                }
	              }
	              return i.LineTo;
	            }
	          }
	        });

	        var arrayOfLinkedEffectsFiltered = _.map(arrayOfLinkedEffects, function (i) {
	          //get array with names of linked to this common control ffects
	          var jsonObject = undefined;
	          jsonObject = '{"Lineto":"' + i.LineTo + '","propertyOfEffect":"' + i.propertyOfEffect + '"}';
	          return jsonObject;
	        });

	        var arrayOfLinkedEffectsString = arrayOfLinkedEffectsFiltered.join(';'); //transform array to string to pass in into "ext.deleteCommonControl" function
	        _csInterfaceJs2['default'].evalScript('$._ext.deleteCommonControl(\'' + arrayOfLinkedEffectsString + '\',"' + thisCommonContrlName + '")', function (res) {
	          remove = _storage2['default'].toDelete.remove();
	          delete _storage2['default'].historyOfObjects[nameOfBlock];
	          resolve(remove);
	        });
	      } else if (_storage2['default'].toDelete && _storage2['default'].toDelete.thisCommonContrlName && _storage2['default'].historyOfObjects[nameOfBlock] && _storage2['default'].toDelete.fullCommonContrlName == "multiplier") {
	        (function () {
	          //Remove Multiplier block
	          //console.log(GlobalStorage.historyOfObjects[nameOfBlock]);

	          var multiplierName = _storage2['default'].toDelete.thisCommonContrlName;
	          _storage2['default'].toDelete.forEach(function (item) {
	            if (item.type == "path") {
	              (function () {
	                var preMultiplierArr = [];
	                //console.log(preMultiplierArr);
	                var type = _storage2['default'].historyOfObjects[item.LineTo].shortName;
	                var thisPropName = _storage2['default'].historyOfObjects[item.LineTo].thisCommonContrlName;
	                _storage2['default'].historyOfObjects[item.LineTo].forEach(function (i, num) {
	                  //console.log(i);
	                  if (i.type == "path" && i.LineFrom == multiplierName) {
	                    //console.log(i);
	                    i.remove();
	                    delete _storage2['default'].historyOfObjects[item.LineTo][num];
	                    //console.log(GlobalStorage.historyOfObjects[item.LineTo]);
	                  } else if (i.type == 'path' && i.LineFrom != multiplierName && i.node.lineFromCyrcle != "circleRight" && typeof _storage2['default'].historyOfObjects[item.LineTo][num] !== "undefined") {
	                      //console.log(typeof GlobalStorage.historyOfObjects[item.LineTo][num] );
	                      preMultiplierArr.push(i.LineFrom);
	                    }
	                });
	                _storage2['default'].historyOfObjects[item.LineTo].forEach(function (i) {
	                  if (i.type == "path" && i.node.lineFromCyrcle == "circleRight") {
	                    var controlPropName = i.propertyOfEffect;
	                    effectNameLocal = i.LineTo;
	                    //console.log(preMultiplierArr);
	                    //console.log('RESULT');
	                    _csInterfaceJs2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + controlPropName + '","' + thisPropName + '","' + type + '","' + preMultiplierArr.join(',') + '")', function () {
	                      preMultiplierArr.length = 0;
	                    });
	                  }
	                });
	                //console.log(preMultiplierArr);
	              })();
	            }
	          });

	          thisCommonContrlName = _storage2['default'].toDelete.thisCommonContrlName;
	          //let itemsArray=GlobalStorage.toDelete.items;
	          console.log(thisCommonContrlName);

	          _csInterfaceJs2['default'].evalScript('$._ext.deleteEffect("' + multiplierName + '")', function (res) {
	            //Remove effects from After Effects
	            console.log('REMOVE');
	            remove = _storage2['default'].toDelete.remove();
	            delete _storage2['default'].historyOfObjects[nameOfBlock];
	            //preMultiplierArr=[];
	            resolve();
	          });
	        })();
	      }
	  }).then(function (resolve) {

	    resolve = undefined;
	    _storage2['default'].toDelete = undefined;
	    _storage2['default'].prevActive = undefined;
	  });
	}

	exports['default'] = innerDeleteFunction;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	//import csInterface from '../csInterface';
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _helperFunctionsInnerDeleteFunction = __webpack_require__(10);

	var _helperFunctionsInnerDeleteFunction2 = _interopRequireDefault(_helperFunctionsInnerDeleteFunction);

	//Custom event. Event is run when something is deletede from After Effects explicitly
	var deleteBlockEvent = new Event('deleteBlockEvent');
	document.addEventListener('deleteBlockEvent', function (e) {
	  /*console.log(GlobalStorage.blockToRemove);
	  console.log(GlobalStorage.effectCheckArr);
	  console.log(this.effectCheckArr);*/
	  var nameOfBlock = undefined;
	  //GlobalStorage.undermostEffectBlock.y=10;

	  _storage2["default"].blockToRemove.forEach(function (i, num) {

	    //console.log(GlobalStorage.blockToRemove[num]);
	    //console.log(GlobalStorage.historyOfObjects);
	    nameOfBlock = _storage2["default"].blockToRemove[num];
	    _storage2["default"].toDelete = _storage2["default"].historyOfObjects[nameOfBlock];
	    //innerDeleteFunction(nameOfBlock);
	    var promise = new Promise(function (resolve) {
	      _storage2["default"].overMouseSet = null;
	      //let effectName=GlobalStorage.toDelete.setEffectName;
	      if (_storage2["default"].toDelete && _storage2["default"].toDelete.setEffectName && _storage2["default"].historyOfObjects[nameOfBlock]) {
	        //Remove ordinar effects (not chained with Distributor)
	        var effectName = _storage2["default"].toDelete.setEffectName;
	        delete _storage2["default"].historyOfObjects[effectName];
	        if (effectName == "Mantra VR") {
	          var glassId = document.getElementById("glass");
	          glassId.style.display = "block";
	        }
	        //Call to ExtScript

	        //csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
	        var remove = _storage2["default"].toDelete.remove();
	        resolve(remove);
	        //});

	        //
	      } else if (_storage2["default"].toDelete && _storage2["default"].toDelete.thisCommonContrlName && _storage2["default"].historyOfObjects[nameOfBlock]) {
	          //Remove CommonControls
	          var CommonContrlName = _storage2["default"].toDelete.fullCommonContrlName;
	          var thisCommonContrlName = _storage2["default"].toDelete.thisCommonContrlName;
	          var itemsArray = _storage2["default"].toDelete.items;

	          var arrayOfLinkedEffects = _.filter(itemsArray, function (i) {
	            //filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
	            if (i.node.nodeName == "path") {
	              //console.log(i.LineTo);
	              //console.log(GlobalStorage.toDelete.currentName);
	              if (_storage2["default"].historyOfObjects[i.LineTo] && _storage2["default"].toDelete.currentName != i.LineTo) {
	                var elemObj = _storage2["default"].historyOfObjects[i.LineTo][0][0];
	                for (var key in elemObj) {
	                  if (elemObj[key].type == 'rect' && elemObj[key].attr('propDataName') == i.propertyOfEffect) {
	                    elemObj[key].node.previousElementSibling.classList.remove('true');
	                    elemObj[key].node.previousElementSibling.classList.add('false');
	                  }
	                }
	                return i.LineTo;
	              }
	            }
	          });

	          //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
	          //    if(i.DistributorEffects){
	          //      return i.DistributorEffects.join(';')
	          //    }
	          //    return i.LineTo;
	          //
	          //});
	          var arrayOfLinkedEffectsFiltered = _.map(arrayOfLinkedEffects, function (i) {
	            //get array with names of linked to this common control ffects

	            var jsonObject = undefined;
	            jsonObject = '{"Lineto":"' + i.LineTo + '","propertyOfEffect":"' + i.propertyOfEffect + '"}';
	            return jsonObject;
	          });

	          var arrayOfLinkedEffectsString = arrayOfLinkedEffectsFiltered.join(';'); //transform array to string to pass in into "ext.deleteCommonControl" function

	          console.log(thisCommonContrlName);
	          _csInterface2["default"].evalScript("$._ext.deleteCommonControl('" + arrayOfLinkedEffectsString + "',\"" + thisCommonContrlName + "\")", function (res) {});
	          var remove = _storage2["default"].toDelete.remove();
	          delete _storage2["default"].historyOfObjects[nameOfBlock];
	          resolve(remove);

	          /*if(thisCommonContrlName!="Master"){
	            csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
	            });
	            let remove=GlobalStorage.toDelete.remove()
	            delete GlobalStorage.historyOfObjects[nameOfBlock];
	            resolve(remove);
	          }
	          else{
	            csInterface.evalScript(`$._ext.createMasterMultiplier()`);
	          }*/

	          //
	        }
	      //resolve ()
	    }).then(function (resolve) {

	      resolve = undefined;
	      _storage2["default"].toDelete = undefined;
	      _storage2["default"].prevActive = undefined;
	    });

	    //GlobalStorage.historyOfObjects[nameOfBlock].remove();

	    //console.log('START');
	    //console.log(GlobalStorage.historyOfObjects);
	    /*if(GlobalStorage.toDelete&&GlobalStorage.toDelete.setEffectName){//Remove effects
	    
	        let effectName=GlobalStorage.toDelete.setEffectName;
	    
	    
	        //Call to ExtScript
	    
	                    csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
	                      //GlobalStorage.historyOfObjects[nameOfBlock].remove();
	                      let remove=GlobalStorage.toDelete.remove()
	                      delete GlobalStorage.historyOfObjects[nameOfBlock];
	                      console.log('END EFFECT');
	                      console.log(GlobalStorage.historyOfObjects);
	                    });
	    
	        //
	    
	    
	    }
	    else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName){
	      //!
	        let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
	        let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
	        let itemsArray=GlobalStorage.toDelete.items;
	    
	        let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
	    
	          if(i.node.nodeName=="path"&&!i.DistributorEffects){
	            //console.log(i.propertyOfEffect);
	            //console.log(GlobalStorage.historyOfObjects[i.LineTo][0][0]);
	            let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0]
	            for (let key in elemObj){
	              if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){
	                elemObj[key].node.previousElementSibling.classList.remove('true');
	                elemObj[key].node.previousElementSibling.classList.add('false');
	              }
	            }
	    
	            return i.LineTo;
	          }
	          else if(i.node.nodeName=="path"&&i.DistributorEffects){
	              return i.DistributorEffects;
	    
	          }
	    
	    
	        });
	    
	    
	        //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
	        //    if(i.DistributorEffects){
	        //      return i.DistributorEffects.join(';')
	        //    }
	        //    return i.LineTo;
	        //
	        //});
	        let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
	              if(i.DistributorEffects){
	                return i.DistributorEffects.join(';')
	              }
	              let jsonObject;
	                jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
	            return jsonObject;
	    
	          });
	    
	      let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
	          //Call to ExtScript
	    //console.log(arrayOfLinkedEffectsString);
	                      //console.log(GlobalStorage.toDelete.thisCommonContrlName);
	    console.log(GlobalStorage.toDelete[0].node.effectName);
	    
	      //console.log(CommonContrlName);
	    
	      //console.log(thisCommonContrlName);
	    
	        csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{
	    
	        let remove=GlobalStorage.toDelete.remove();
	        delete GlobalStorage.historyOfObjects[nameOfBlock];
	        console.log('END CONTROL');
	        console.log(GlobalStorage.historyOfObjects);
	    
	        });
	    
	      //!
	    
	    }*/
	    //delete GlobalStorage.historyOfObjects[nameOfBlock];
	  });

	  /*if(GlobalStorage.historyOfObjects[objectKey]){// check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
	    delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
	    //Call to ExtScript
	                  csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects
	                    let remove=GlobalStorage.effectCheckArr.remove()
	                  resolve(remove);
	                });
	      //
	  }*/
	}, false);

	exports["default"] = deleteBlockEvent;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _mainBlockMainBlockJs = __webpack_require__(13);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(3);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(17);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _customEventsDeleteEventListenerJs = __webpack_require__(11);

	var _customEventsDeleteEventListenerJs2 = _interopRequireDefault(_customEventsDeleteEventListenerJs);

	var _helperFunctionsRenameBlock = __webpack_require__(21);

	var _helperFunctionsRenameBlock2 = _interopRequireDefault(_helperFunctionsRenameBlock);

	var _helperFunctionsActiveBlockFunction = __webpack_require__(18);

	var _helperFunctionsActiveBlockFunction2 = _interopRequireDefault(_helperFunctionsActiveBlockFunction);

	var _bezieLine = __webpack_require__(16);

	var _bezieLine2 = _interopRequireDefault(_bezieLine);

	var _helperFunctionsCheckMantraVR = __webpack_require__(22);

	var _helperFunctionsCheckMantraVR2 = _interopRequireDefault(_helperFunctionsCheckMantraVR);

	var _helperFunctionsCreateLinesFunction = __webpack_require__(23);

	var _helperFunctionsCreateLinesFunction2 = _interopRequireDefault(_helperFunctionsCreateLinesFunction);

	var checkBackEnd = (function () {
	  function checkBackEnd() {
	    _classCallCheck(this, checkBackEnd);

	    this.status = false;
	    this.AnimationFrame;
	    this.AnimationFrameStart;
	    this.effectCheckArr = [];
	    this.startCheck();
	    this.mouseEnterEvent();
	    this.mouseLeaveEvent();
	    _storage2["default"].glassId = document.getElementById("glass");
	    this.workBlockSet;
	    this.startObject;
	  }

	  _createClass(checkBackEnd, [{
	    key: "startCheck",
	    value: function startCheck() {
	      var _this = this;

	      if (this.status != 'true') {
	        //check status if status is not true this means that no one layer is active and we restart function startCheck();
	        this.AnimationFrameStart = setTimeout(function () {

	          _csInterfaceJs2["default"].evalScript("$._ext. initialProjectTest()", function (res) {

	            _this.status = res; //get value for status from ExtendScript ('true' or 'false')
	            if (_this.status != 'true') {
	              (0, _helperFunctionsCheckMantraVR2["default"])();
	            }
	          });

	          _this.startCheck();
	        }, 1000);
	      } else // in this case status is true and we can start to build Panel
	        {

	          _storage2["default"].hasVR = true;
	          (0, _helperFunctionsCheckMantraVR2["default"])();
	          this.createBlock(); // get gata about stage from backEnd and create block on Panel
	          this.functionCheckAE();
	        }
	    }
	  }, {
	    key: "mouseEnterEvent",
	    value: function mouseEnterEvent() {
	      var _this2 = this;

	      document.addEventListener('mouseenter', function (e) {

	        clearTimeout(_this2.AnimationFrame);
	      });
	    }
	  }, {
	    key: "functionCheckAE",
	    value: function functionCheckAE() {
	      var _this3 = this;

	      this.AnimationFrame = setTimeout(function () {

	        _csInterfaceJs2["default"].evalScript("$._ext.checkChangesGlobal()", function (res) {

	          if (res && res == 0) {
	            //CHECK if we'have gone onto new Layer
	            var promise = new Promise(function (resolve) {
	              _raphaelContainerJs2["default"].clear();
	              _storage2["default"].historyOfObjects = {
	                itemArray: []
	              };
	              console.log('RESET Y COORD');
	              _storage2["default"].undermostEffectBlock.y = 10; //reset global y coodinate
	              _storage2["default"].undermostCommonControlBlock.y = 10;
	              resolve(_raphaelContainerJs2["default"]);
	            });
	            promise.then(function (resolve) {

	              _this3.createBlock();
	            });
	          } else if (res == 'false' || res === false) {
	            _this3.status = false;
	            _storage2["default"].hasVR = false;
	            clearTimeout(_this3.AnimationFrame);
	            _raphaelContainerJs2["default"].clear();
	            _storage2["default"].historyOfObjects = {
	              itemArray: []
	            };
	            console.log('RESET Y COORD');
	            _storage2["default"].undermostEffectBlock.y = 10; //reset global y coodinate
	            _storage2["default"].undermostCommonControlBlock.y = 10;
	            _this3.startCheck();
	          } else if (res & res == 100 || res == '100') {
	            // No one layer is selected

	            _storage2["default"].historyOfObjects = {
	              itemArray: []
	            };
	          } else if (res && res != "undefined") {

	            if (res == "110" || res === false || res == 'false') {
	              //empty
	              _this3.effectCheckArr = [];
	              _storage2["default"].glassId.style.display = "block";
	              if (_storage2["default"].historyOfObjects.itemArray.length > 0) {
	                _storage2["default"].historyOfObjects.itemArray.forEach(function (item) {
	                  _storage2["default"].historyOfObjects[item.name].remove();
	                });
	              }
	            }

	            var resObj = JSON.parse(res);
	            _storage2["default"].hasVR = resObj.hasVR;
	            (0, _helperFunctionsCheckMantraVR2["default"])();

	            _this3.effectCheckArr = resObj.effectArray;

	            if (!_storage2["default"].effectCheckArr || !_this3.effectCheckArr) {
	              _storage2["default"].glassId.style.display = "block";
	              return false;
	            }
	            if (_storage2["default"].effectCheckArr.length > _this3.effectCheckArr.length) {

	              var promise = new Promise(function (resolve) {
	                var blockToRemove = _.difference(_storage2["default"].effectCheckArr, _this3.effectCheckArr);
	                _storage2["default"].effectCheckArr = _this3.effectCheckArr;
	                _storage2["default"].blockToRemove = blockToRemove;
	                //console.log(GlobalStorage.blockToRemove);
	                resolve(blockToRemove);
	              });
	              promise.then(function (resolve) {
	                document.dispatchEvent(_customEventsDeleteEventListenerJs2["default"]);
	                //console.log(effectToRemove[0]);
	              });
	            } else if (_storage2["default"].effectCheckArr.length < _this3.effectCheckArr.length) {
	                (function () {

	                  var cordX = undefined;
	                  var blockToCreate = _.difference(_this3.effectCheckArr, _storage2["default"].effectCheckArr);
	                  blockToCreate.forEach(function (i) {

	                    _csInterfaceJs2["default"].evalScript("$._ext.findEffect(\"" + i + "\")", function (res) {

	                      _this3.startObject = JSON.parse(res);

	                      _this3.functionCreateBlocks(_this3.startObject, cordX);
	                    });
	                  });

	                  _storage2["default"].effectCheckArr = _this3.effectCheckArr;
	                })();
	              } else {
	                _this3.workBlockSet = _storage2["default"].historyOfObjects[resObj.selectedEffect.effectName];
	                if (_this3.workBlockSet && _this3.workBlockSet.setEffectName) {
	                  new _helperFunctionsActiveBlockFunction2["default"]().activeEffectBlock(_this3.workBlockSet);
	                } else if (_this3.workBlockSet && _this3.workBlockSet.thisCommonContrlName) {
	                  new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(_this3.workBlockSet);
	                }

	                if (_this3.effectCheckArr.join(';') !== _storage2["default"].effectCheckArr.join(';')) {
	                  //convert arrays to string and match them if they are not equal it need rename effect
	                  _this3.functionRename(_this3.effectCheckArr, _storage2["default"].effectCheckArr);
	                }
	                _storage2["default"].effectCheckArr = _this3.effectCheckArr; // assign current array to previus array
	                if (resObj.selectedEffect.effectName && _storage2["default"].historyOfObjects[resObj.selectedEffect.effectName] && _storage2["default"].historyOfObjects[resObj.selectedEffect.effectName][0][1][0]) {
	                  var distrInst = null;
	                  if (resObj.selectedEffect.distrInst * 1 < 10) {
	                    distrInst = "0" + resObj.selectedEffect.distrInst;
	                  } else {
	                    distrInst = resObj.selectedEffect.distrInst;
	                  }
	                  _storage2["default"].historyOfObjects[resObj.selectedEffect.effectName][0][1][0].attr({ text: distrInst }); //change distributor number in EffectBlock
	                }
	                //console.log('Equality')
	              }
	          }

	          //console.log(res);
	        });
	        //console.log("I'm working");
	        _this3.functionCheckAE();
	      }, 1000);
	    }
	  }, {
	    key: "mouseLeaveEvent",
	    value: function mouseLeaveEvent() {
	      var _this4 = this;

	      document.addEventListener('mouseleave', function (e) {
	        //console.log("PreLeave");
	        //console.log(e.toElement);
	        if (e.toElement === null && _this4.status == 'true') {
	          //console.log(this.AnimationFrame);
	          //console.log("mouseLeaveEvent");
	          _this4.functionCheckAE();
	        }
	      });
	    }
	  }, {
	    key: "createBlock",
	    value: function createBlock() {
	      var _this5 = this;

	      var cordX = undefined;

	      _csInterfaceJs2["default"].evalScript("$._ext.getData()", function (res) {

	        //console.log('WORK');
	        //console.log(JSON.parse(res));
	        _this5.startObject = JSON.parse(res);
	        _storage2["default"].hasVR = _this5.startObject.hasVR;
	        (0, _helperFunctionsCheckMantraVR2["default"])();
	        if (_this5.startObject.hasVR === true) {
	          //console.log(startObject);
	          _this5.functionCreateBlocks(_this5.startObject, cordX);
	        }
	      });
	    }
	  }, {
	    key: "functionCreateBlocks",
	    value: function functionCreateBlocks(startObject, cordX) {
	      var workBlock = undefined;
	      //let cordY=GlobalStorage.undermostEffectBlock.y;

	      //console.log(startObject.hasVR);
	      // chesk if layer has Mantra VR Effect (this effect is )

	      //console.log(startObject);
	      //console.log(startObject);
	      startObject.effectsObj.forEach(function (i, num) {
	        // Create EffectBlock
	        /*let itemArr=arrSecondButton.effects.filter((obj)=>{
	          //console.log(i);
	          return obj.name==i.baseEffect;
	        });*/
	        cordX = 190;
	        //let item=itemArr[0];
	        var item = { name: i.baseEffect };
	        var res = i;
	        //cordY+=50;
	        console.log('RESALT', res);
	        //let workBlock;
	        //workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,res);
	        //moveEffects(workBlock);
	        if (res.name != 'Mantra VR') {
	          console.log('CREATE EFFECT');
	          workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX, _storage2["default"].undermostEffectBlock.y += 40, item, res);
	          //moveEffects(workBlock);
	        } else {
	            console.log('CREATE MASTER');
	            cordX = 40;
	            //cordY=5;
	            workBlock = new _mainBlockMainBlockJs2["default"]().createBlockMaster(cordX, 9, item, false, res.name);
	            //moveEffects(workBlock);
	          }
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        //console.log(workBlock);
	        _storage2["default"].effectCheckArr.push(res);
	      });

	      //console.log(startObject.commonControlObj);
	      startObject.commonControlObj.forEach(function (i, num) {
	        //Create commonControlBlock
	        //console.log('Create commonControlBlock');
	        var itemArr = _startArraysArrSecondButtonJs2["default"].commonControls.filter(function (obj) {
	          return obj.fullname == i.baseEffect;
	        });
	        cordX = 40;
	        //console.log(i);
	        var item = itemArr[0];
	        //console.log(item);
	        var res = i.realName;
	        //cordY+=50;
	        //console.log('CREATE');
	        console.log('RESOURSE', res);
	        //let workBlock;
	        workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, _storage2["default"].undermostCommonControlBlock.y += 40, item, false, res);
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);

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
	        _storage2["default"].effectCheckArr.push(res);
	      });
	      startObject.multiplierObj.forEach(function (i, num) {
	        //Create commonControlBlock
	        //console.log('Create commonControlBlock');
	        var itemArr = _startArraysArrSecondButtonJs2["default"].commonControls.filter(function (obj) {
	          return obj.fullname == i.baseEffect;
	        });
	        cordX = 40;
	        //console.log(i);
	        i.shortName = 'multiplier';
	        var item = i;
	        //console.log(item);
	        var res = i.realName;
	        var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockMultiplier(cordX, _storage2["default"].undermostCommonControlBlock.y += 50, item, res);
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);

	        //console.log(workBlock);
	        _storage2["default"].effectCheckArr.push(res);
	      });
	      (0, _helperFunctionsCreateLinesFunction2["default"])(startObject.linesObj); //Call function to create lines lines beetween a commonControl Block and an Effect Block
	    }
	  }, {
	    key: "functionRename",
	    value: function functionRename(array, others) {
	      var newNameArr = _.difference(array, others);
	      var oldNameArr = _.difference(others, array);
	      var newName = newNameArr[0];
	      var oldName = oldNameArr[0];

	      if (_storage2["default"].historyOfObjects[oldName]) {
	        (0, _helperFunctionsRenameBlock2["default"])(oldName, newName);
	      }
	    }
	  }]);

	  return checkBackEnd;
	})();

	exports["default"] = checkBackEnd;
	module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _helperFunctionsDraggableSetJs = __webpack_require__(14);

	var _helperFunctionsDraggableSetJs2 = _interopRequireDefault(_helperFunctionsDraggableSetJs);

	var _helperFunctionsDrawLineFromToJs = __webpack_require__(15);

	var _helperFunctionsDrawLineFromToJs2 = _interopRequireDefault(_helperFunctionsDrawLineFromToJs);

	/*import deleteFunctions from "../helperFunctions/deleteFunctions.js"*/
	//import deleteInOneClick from "../helperFunctions/deleteInOneClick.js"

	var _helperFunctionsActiveBlockFunction = __webpack_require__(18);

	var _helperFunctionsActiveBlockFunction2 = _interopRequireDefault(_helperFunctionsActiveBlockFunction);

	var _helperFunctionsDeletePropertyInEffectBlock = __webpack_require__(19);

	var _helperFunctionsDeletePropertyInEffectBlock2 = _interopRequireDefault(_helperFunctionsDeletePropertyInEffectBlock);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _helperFunctionsBezieLine = __webpack_require__(16);

	var _helperFunctionsBezieLine2 = _interopRequireDefault(_helperFunctionsBezieLine);

	var _controlsCreateControlsWindows = __webpack_require__(20);

	var _controlsCreateControlsWindows2 = _interopRequireDefault(_controlsCreateControlsWindows);

	// This class works with mainBlocks (Effects, commonControls, Distributor) and add eventListebers (click,mouseover etc) to them

	var mainBlock = (function () {
	  function mainBlock() {
	    _classCallCheck(this, mainBlock);

	    var str_gradientGrayLight = "l(0,0,0,1)rgb(140,149,158):5-rgb(44,53,63):95";
	    var str_gradientGrayDark = "l(0,0,0,1)rgb(140,149,158):5-rgb(44,53,63):95";
	    var gradientGrayLight = _raphaelContainerJs2["default"].gradient(str_gradientGrayLight);
	    var gradientGrayDark = _raphaelContainerJs2["default"].gradient(str_gradientGrayDark);
	    this.pathCoords;
	  }

	  _createClass(mainBlock, [{
	    key: "createBlockEffects",
	    value: function createBlockEffects(x, y, item, obj) {
	      var blockEffectName = obj.name;
	      var workBlockSet = Snap.set();
	      var typeNode = "effects";
	      var EffectName = undefined;
	      var innerHTML = undefined;
	      var PathString = undefined;
	      var offset = undefined;
	      var MX = undefined;
	      var MY = undefined;
	      var LX = undefined;
	      var LY = undefined;
	      var pathCoords = undefined;
	      var target = undefined;
	      workBlockSet.setEffectName = blockEffectName;
	      workBlockSet.baseEffect = item.name;
	      workBlockSet.point = obj.point;
	      workBlockSet.angle = obj.angle;
	      workBlockSet.slider = obj.slider;
	      /*workBlockSet.poi=item.poi;
	      workBlockSet.fov=item.fov;
	      workBlockSet.strength=item.strength;
	      workBlockSet.waves=item.waves;*/

	      //Create Clip Mask
	      var clipR = _raphaelContainerJs2["default"].rect(x, y, 200, 32, 5);
	      var defEl = clipR.toDefs();
	      //
	      //Create pattern
	      var pattern = _raphaelContainerJs2["default"].image("img/effect-background.png", x, y, 210, 329).pattern(x, y, 210, 329);
	      //
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 200, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      dummy.node.effectName = blockEffectName;
	      //workBlockSet.push(dummy);

	      _storage2["default"].lastEffectBlock.y = y + 32;
	      /*let workBlock=R.rect(x,y, 180, 32,5)
	      .attr({   fill: "rgb(64, 64, 64)",
	                stroke: "none",
	                class:''
	            });*/
	      var distrCount = '0';

	      var distrCountText = _raphaelContainerJs2["default"].text(x + 11, y + 16, distrCount).attr({
	        //fontSize: 15,
	        textAnchor: "start",
	        alignmentBaseline: "middle",
	        opacity: 0
	      });
	      if (obj.distrInst) {
	        var distrInst = '01';
	        if (obj.distrInst * 1 < 10) {
	          distrInst = "0" + obj.distrInst;
	        } else {
	          distrInst = obj.distrInst;
	        }
	        distrCountText.attr({
	          text: distrInst,
	          opacity: 1
	        });
	      }

	      var title = _raphaelContainerJs2["default"].text(x + 44, y + 16, blockEffectName).attr({
	        //fontSize: 15,
	        textAnchor: "start",
	        alignmentBaseline: "middle"
	      });

	      //title.node.effectName=blockEffectName;
	      //workBlockSet.push(title);

	      //workBlock.node.effectName=blockEffectName;
	      //let group=R.g(workBlock, title, dummy);
	      //workBlockSet.push(group);
	      //Create options angle, slider, angel
	      //console.log(obj.propArray);
	      var propGroup = CreateProperties(obj.propArray);

	      var mainGroup = _raphaelContainerJs2["default"].g( /*workBlock,*/distrCountText, title, dummy);
	      var wrapGroup = _raphaelContainerJs2["default"].g(propGroup, mainGroup);
	      wrapGroup.attr({ clipPath: clipR }); //apply clip-path mask
	      /*wrapGroup.click(()=>{
	        wrapGroup.toogleAttr(wrapGroup,clipR,'clip-path');
	        wrapGroup.toFront();
	      });*/
	      //wrapGroup.mouseover(()=>{console.log(wrapGroup);});
	      mainGroup.dblclick(function () {
	        EffectName = workBlockSet.setEffectName;
	        _storage2["default"].input.css({ top: _storage2["default"].historyOfObjects[EffectName][0].getBBox().y + 28, left: _storage2["default"].historyOfObjects[EffectName][0].getBBox().x + 35, width: "160px", height: "26px", position: 'absolute', display: 'block' });
	        //console.log(GlobalStorage.historyOfObjects);
	        //console.log(workBlockSet.setEffectName);
	        innerHTML = mainGroup[1].node.innerHTML;
	        _storage2["default"].renameObj.oldName = innerHTML;
	        _storage2["default"].input.val(innerHTML);
	      });
	      wrapGroup.mouseover(function () {
	        //if(GlobalStorage.currentLine)
	        //{
	        wrapGroup.node.removeAttribute('clip-path');
	        wrapGroup.toFront(); //push the current group to the front of SVG composition
	        if (_storage2["default"].currentLine) {
	          _storage2["default"].currentLine.toFront();
	        }
	        workBlockSet.forEach(function (item, i) {
	          if (item.node.nodeName == 'path') {
	            PathString = Snap.parsePathString(item); //get coordunates of line
	            offset = item.coordDif * 1;
	            MX = PathString[0][1];
	            MY = PathString[0][2];
	            LX = PathString[1][5];
	            LY = PathString[1][6];
	            LY = LY + offset;

	            //console.log(PathString);
	            pathCoords = (0, _helperFunctionsBezieLine2["default"])(MX, MY, LX, LY);
	            //this.pathCoords=bezieLine(this.ox,this.oy,destx,desty);
	            item.attr({ d: "M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY }); //shift the line to the current propertyBlock
	            //item.attr("path",`M${MX} ${MY}L${LX} ${(LY)+offset}`);//shift the line to the current propertyBlock
	          }
	        });
	        for (var key in propGroup) {
	          if (_storage2["default"].currentLine && propGroup[key].type == "rect" && propGroup[key].attr('class') !== 'prop-wrapper' && propGroup[key].attr("propDataType") != _storage2["default"].currentLine.node.shortControlName) {
	            propGroup[key].attr({ "fill-opacity": 0.7, fill: 'rgb(95,95,95)' });
	          }
	        }
	        //}
	      });
	      propGroup.mouseover(function (event) {
	        target = event.target;
	        if (target.tagName == 'rect' && target.className !== 'prop-wrapper') {
	          if (_storage2["default"].currentLine && target.getAttribute('propDataType') == _storage2["default"].currentLine.node.shortControlName) {
	            //highlight of the current property block
	            target.style.fillOpacity = '0.1';
	            target.style.fill = 'rgb(255,255,255)';
	          }

	          _storage2["default"].controlProp = {
	            type: target.getAttribute('propDataType'), //type of common control ('point' or 'angle' or 'slider')
	            name: target.getAttribute('propDataName'), // name of commonControls property (for example 'Point of Interest')
	            circle: target.previousElementSibling, // link to the sibling circle to toogle className
	            coordDif: target.getAttribute('coordDif') //different in number between getBBox().y of CommonControlBlock and this property block
	          };

	          //if(GlobalStorage.currentLine.node.shortControlName==GlobalStorage.controlProp.type){
	          //target.previousElementSibling.classList.toggle('true');
	          //}
	        } else {
	            _storage2["default"].controlProp = { //set the object to the initial state
	              type: null,
	              name: null,
	              circle: null,
	              coordDif: null
	            };
	          }
	      });
	      wrapGroup.mouseout(function () {
	        //if(GlobalStorage.currentLine)
	        //{
	        wrapGroup.attr({ clipPath: clipR });
	        _storage2["default"].controlProp = {
	          type: null,
	          name: null,
	          circle: null,
	          coordDif: null
	        };
	        //}
	        //console.log(GlobalStorage.currentLine);
	        workBlockSet.forEach(function (item, i) {
	          if (item.node.nodeName == 'path') {
	            PathString = Snap.parsePathString(item);
	            offset = item.coordDif * 1;
	            //console.log(PathString);
	            MX = PathString[0][1];
	            MY = PathString[0][2];
	            LX = PathString[1][5];
	            LY = PathString[1][6];
	            LY = LY - offset;

	            //console.log(offset);
	            pathCoords = (0, _helperFunctionsBezieLine2["default"])(MX, MY, LX, LY);
	            item.attr({ d: "M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY });
	            //item.attr("path",`M${MX} ${MY}L${LX} ${(LY)-offset}`);
	          }
	        });

	        for (var key in propGroup) {
	          if (propGroup[key].type == "rect" && propGroup[key].attr('class') !== 'prop-wrapper') {
	            propGroup[key].attr({ "fill-opacity": 0 });
	          }
	        }
	      });
	      workBlockSet.push(wrapGroup);
	      //let slider=CreateProperties(obj.slider);
	      //let angle=CreateProperties(obj.angle);
	      //console.log(workBlockSet);
	      function CreateProperties(propertyArr) {
	        console.log(propertyArr);
	        var propertyBlock = undefined;
	        var propertyText = undefined;
	        var propertyCircle = undefined;
	        var propDataType = undefined;
	        var localY = y + 32;
	        //let f=2;
	        var groupOfProp = _raphaelContainerJs2["default"].g();
	        //console.log(propertyArr)
	        //let bacgroundHeight=(item.properties.length*20)+42;
	        var propBackground = _raphaelContainerJs2["default"].rect(x, y, 200, 0, 5).attr({ //fill: "rgb(64, 64, 64)",
	          fill: pattern,
	          stroke: "none",
	          "class": 'prop-wrapper'
	        });
	        groupOfProp.add(propBackground);
	        var count = 0;
	        if (propertyArr != undefined) {
	          for (var a = 0; a < propertyArr.length; a++) {
	            if (propertyArr.length != 0) {

	              var _item = propertyArr[a];

	              if (a != 0) {
	                localY += 20;
	              } else {
	                localY += 10;
	              }

	              propertyText = _raphaelContainerJs2["default"].text(x + 22, localY - 5, _item.name).attr({
	                //fontSize: 14,
	                textAnchor: "start",
	                alignmentBaseline: "hanging"
	              });
	              propertyCircle = _raphaelContainerJs2["default"].circle(x + 10, localY, 6).attr({
	                "class": 'false'
	              });

	              propertyBlock = _raphaelContainerJs2["default"].rect(x, localY - 8, 200, 16).attr({
	                "fill-opacity": 0,
	                opacity: 1,
	                stroke: "none",
	                "class": 'prop',
	                propDataName: _item.name,
	                propDataType: _item.type,
	                coordDif: localY - 12 - y
	              });
	              //console.log(propertyBlock.node.oncontextmenu);
	              (0, _helperFunctionsDeletePropertyInEffectBlock2["default"])(propertyBlock, workBlockSet);
	              groupOfProp.add(propertyText, propertyCircle, propertyBlock);

	              groupOfProp.add(propertyText, propertyCircle, propertyBlock);
	            }
	          }
	          var bacgroundHeight = propertyArr.length * 20 + 52;
	          propBackground.attr({
	            height: bacgroundHeight
	          });
	        } else {
	          var bacgroundHeight = 52;
	          propBackground.attr({
	            height: bacgroundHeight
	          });
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

	      var toType = function toType(obj) {
	        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	      };

	      _storage2["default"].historyOfObjects[blockEffectName] = workBlockSet;
	      //console.log(GlobalStorage.historyOfObjects);
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      wrapGroup.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeEffectBlock(workBlockSet, blockEffectName);
	      });

	      wrapGroup.mouseover(function () {
	        //GlobalStorage.toDelete=workBlockSet;
	        //console.log(GlobalStorage.currentLine);
	        //console.log("OVER");
	        //console.log(workBlockSet);
	        //console.log(this);
	        //workBlockSet.deleteInOneClick(workBlockSet);
	        if (_storage2["default"].currentLine) {
	          var typeOfControll = _storage2["default"].currentLine.node.shortControlName;
	          if (_storage2["default"].currentLine && workBlockSet[typeOfControll] === false) {

	            workBlockSet.attr({ cursor: "no-drop" });
	          } else {
	            workBlockSet.attr({ cursor: "move" });
	          }
	        }

	        _storage2["default"].overMouseSet = workBlockSet; //Push this set into temporary object for compere reasone
	      });
	      wrapGroup.mouseout(function () {
	        //console.log("OUT");
	        _storage2["default"].toDelete = undefined;
	        workBlockSet.attr({ cursor: "move" });
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });
	      return workBlockSet;
	    }
	  }, {
	    key: "createBlockCommonControls",
	    value: function createBlockCommonControls(x, y, item, distributor, res) {
	      var dblClickCheck = false; //to check where is double click where is alone click
	      var thisItemName = res;
	      /*  if(res){
	          let index=res.length-1;
	            let number=res.charAt(index)*1;
	          if (number){
	          thisItemName=`${item.name} ${number}`;
	          }
	        }*/
	      //Create pattern
	      var pattern = _raphaelContainerJs2["default"].image("img/orange-button.png", x, y, 180, 32).pattern(x, y, 180, 32);
	      //

	      var workBlockSet = Snap.set();
	      var typeNode = "commonControls";

	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      //workBlockSet.push(dummy);
	      //dummy.node.effectName=item.effectName;

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ //fill: "rgb(64, 64, 64)",
	        fill: pattern,
	        stroke: "none",
	        cursor: "move",
	        "class": "commonControl"
	      });
	      //workBlock.node.effectName=item.effectName;

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 16, thisItemName).attr({
	        //fontSize: 15,
	        textAnchor: "middle",
	        alignmentBaseline: "middle"
	      });

	      //title.node.effectName=item.effectName;

	      //console.log(item);
	      workBlockSet.shortName = item.shortName;
	      workBlockSet.currentName = thisItemName;
	      workBlockSet.multiplierArr = [];
	      //workBlockSet.push(workBlock);

	      //dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
	            circleLeft.node.effectName=item.name;
	            workBlockSet.push(circleLeft);
	            circleLeft.node.circleName="circleLeft";*/

	      //if(distributor==false){

	      //}
	      var circleRight = _raphaelContainerJs2["default"].circle(x + 120, y + 15, 6);
	      var group = _raphaelContainerJs2["default"].g(workBlock, title, dummy, circleRight);
	      workBlockSet.push(group);

	      circleRight.node.effectName = item.name;
	      //workBlockSet.push(circleRight);
	      circleRight.node.circleName = "circleRight";
	      //workBlockSet.push(circleRight);
	      _storage2["default"].historyOfObjects[res] = workBlockSet;
	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.thisCommonContrlName = res;
	      group.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      //console.log(group.getBBox());
	      group.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	        _storage2["default"].overMouseSet = workBlockSet; //Push this set into temporary object for compere reasone
	      });
	      group.mouseout(function () {
	        _storage2["default"].toDelete = undefined;
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });

	      group.dblclick(function () {
	        dblClickCheck = true;
	        var EffectName = workBlockSet.thisCommonContrlName;
	        //console.log('EffectName',EffectName);
	        _storage2["default"].input.css({ top: _storage2["default"].historyOfObjects[EffectName][0].getBBox().y + 28, left: _storage2["default"].historyOfObjects[EffectName][0].getBBox().x, width: "115px", height: "26px", position: 'absolute', display: 'block' });
	        //console.log(GlobalStorage.historyOfObjects);
	        //console.log(workBlockSet.setEffectName);
	        var innerHTML = group[1].node.innerHTML;
	        //console.log(innerHTML);
	        _storage2["default"].renameObj.oldName = innerHTML;
	        _storage2["default"].input.val(innerHTML);
	      });

	      group.click(function (e) {
	        setTimeout(function () {
	          var TimeDifferent = _storage2["default"].clickTime.upTime - _storage2["default"].clickTime.downTime;
	          if (!dblClickCheck && e.detail != 2 && TimeDifferent < 300) {
	            _storage2["default"].greyGround.show();
	            //console.log("height",$(window).height());
	            //console.log("ThisY",group.getBBox().y+28+32+112);
	            if (group.getBBox().y - 60 < 28) {
	              _storage2["default"].testDataY = 28;
	            } else if (group.getBBox().y + 28 + 32 + 112 > $(window).height()) {
	              _storage2["default"].testDataY = $(window).height() - 224;
	            } else {
	              _storage2["default"].testDataY = group.getBBox().y - 60;
	            }

	            switch (item.shortName) {
	              case 'slider':
	                //GlobalStorage.testDataY=group.getBBox().y-60;
	                new _controlsCreateControlsWindows2["default"]().createSliderWindow(workBlockSet.thisCommonContrlName);
	                break;
	              case 'point':
	                //GlobalStorage.testDataY=group.getBBox().y-60;
	                new _controlsCreateControlsWindows2["default"]().createPointsWindow(workBlockSet.thisCommonContrlName);
	                break;
	              case 'angle':
	                //GlobalStorage.testDataY=group.getBBox().y-60;
	                new _controlsCreateControlsWindows2["default"]().createAngleWindow(workBlockSet.thisCommonContrlName);
	                break;
	              default:
	            }
	          } else if (e.detail == 2) {
	            dblClickCheck = false;
	          }
	        }, 300);

	        //console.log('ONE CLICK',item.shortName);
	      });

	      return workBlockSet;
	    }
	  }, {
	    key: "createBlockMaster",
	    value: function createBlockMaster(x, y, item, distributor, res) {

	      var thisItemName = res;
	      var pattern = _raphaelContainerJs2["default"].image("img/red-button.png", x, y, 180, 32).pattern(x, y, 180, 32);

	      var workBlockSet = Snap.set();
	      var typeNode = "commonControls";
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ //fill: "rgb(64, 64, 64)",
	        fill: pattern,
	        stroke: "none",
	        "class": "multiplier"
	      });

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, "Master").attr({
	        //fontSize: 15,
	        textAnchor: "middle",
	        alignmentBaseline: "middle"
	      });

	      //workBlockSet.shortName=item.shortName;
	      workBlockSet.currentName = thisItemName;

	      var group = _raphaelContainerJs2["default"].g(workBlock, title, dummy);
	      workBlockSet.push(group);

	      _storage2["default"].historyOfObjects[res] = workBlockSet;
	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.thisCommonContrlName = res;
	      group.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	        _storage2["default"].container.children('#grey-ground').show();
	        _storage2["default"].testDataY = 28;
	        new _controlsCreateControlsWindows2["default"]().createMasterSliderWindow(thisItemName);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      group.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	      });
	      group.mouseout(function () {
	        _storage2["default"].toDelete = undefined;
	      });
	      return workBlockSet;
	    }

	    //CREATE MultiplierBLOCK

	  }, {
	    key: "createBlockMultiplier",
	    value: function createBlockMultiplier(x, y, item, res) {

	      var thisItemName = res;
	      /*  if(res){
	          let index=res.length-1;
	           let number=res.charAt(index)*1;
	          if (number){
	          thisItemName=`${item.name} ${number}`;
	          }
	        }*/
	      //Create pattern
	      var pattern = _raphaelContainerJs2["default"].image("img/red-button.png", x, y, 180, 32).pattern(x, y, 180, 32);
	      //

	      var workBlockSet = Snap.set();
	      var typeNode = item.shortName;

	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      //workBlockSet.push(dummy);
	      //dummy.node.effectName=item.effectName;

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ //fill: "rgb(64, 64, 64)",
	        fill: pattern,
	        stroke: "none",
	        cursor: "move",
	        "class": "multiplier"
	      });
	      //workBlock.node.effectName=item.effectName;

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 16, thisItemName).attr({
	        //fontSize: 15,
	        textAnchor: "middle",
	        alignmentBaseline: "middle"
	      });

	      //title.node.effectName=item.effectName;

	      //console.log(item);
	      workBlockSet.shortName = item.shortName;
	      workBlockSet.currentName = thisItemName;
	      //workBlockSet.push(workBlock);

	      //dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
	            circleLeft.node.effectName=item.name;
	            workBlockSet.push(circleLeft);
	            circleLeft.node.circleName="circleLeft";*/

	      //if(distributor==false){

	      //}
	      var circleRight = _raphaelContainerJs2["default"].circle(x + 120, y + 15, 6);
	      var group = _raphaelContainerJs2["default"].g(workBlock, title, dummy, circleRight);
	      workBlockSet.push(group);

	      circleRight.node.effectName = item.name;
	      //workBlockSet.push(circleRight);
	      circleRight.node.circleName = "circleRightMulti";
	      //workBlockSet.push(circleRight);
	      _storage2["default"].historyOfObjects[res] = workBlockSet;
	      workBlockSet.fullCommonContrlName = item.shortName;
	      workBlockSet.thisCommonContrlName = res;
	      group.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      group.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	        _storage2["default"].overMouseSet = workBlockSet;
	      });
	      group.mouseout(function () {
	        _storage2["default"].toDelete = undefined;
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });
	      group.dblclick(function () {
	        var EffectName = workBlockSet.thisCommonContrlName;
	        _storage2["default"].input.css({ top: _storage2["default"].historyOfObjects[EffectName][0].getBBox().y, left: _storage2["default"].historyOfObjects[EffectName][0].getBBox().x, width: "115px", height: "26px", position: 'absolute', display: 'block' });
	        //console.log(GlobalStorage.historyOfObjects);
	        //console.log(workBlockSet.setEffectName);
	        var innerHTML = group[1].node.innerHTML;
	        //console.log(innerHTML);
	        _storage2["default"].renameObj.oldName = innerHTML;
	        _storage2["default"].input.val(innerHTML);
	      });

	      return workBlockSet;
	    }
	  }]);

	  return mainBlock;
	})();

	exports["default"] = mainBlock;
	module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _drawLineFromToJs = __webpack_require__(15);

	var _drawLineFromToJs2 = _interopRequireDefault(_drawLineFromToJs);

	var _moveEffectsJs = __webpack_require__(17);

	var _moveEffectsJs2 = _interopRequireDefault(_moveEffectsJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _bezieLine = __webpack_require__(16);

	var _bezieLine2 = _interopRequireDefault(_bezieLine);

	//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it
	Snap.plugin(function (Snap, Element, Paper, global) {
	  Snap.Set.prototype.draggableSet = function (setObj, type) {
	    var thisSet = this;
	    var thisElem = undefined;
	    this.origTransform;
	    //let bbox=this.getBBox();
	    //this.curenLineLocal;
	    var moveFnc = function moveFnc(dx, dy) {

	      var _this = this;
	      if (thisElem) {
	        // if circle we drag we run function to create line
	        new _drawLineFromToJs2["default"]().moveLine(thisElem, dx, dy, thisSet);
	      } else if (this.node.nodeName != 'circle') {

	        //this.fx = this.ox + dx;
	        //this.fy = this.oy + dy;

	        thisSet.forEach(function (item, i) {
	          if (type == "effects") {
	            //console.log(thisSet);
	            EffectMove(thisSet, item, i, _this, dx, dy);
	          } else if (type == "commonControls" || type == "multiplier") {
	            console.log('MOVEEEE');
	            CommonControlsMove(thisSet, item, i, _this, dx, dy);
	          }
	          if (type == "distributor") {
	            //console.log(item);
	            //console.log(i);
	            //console.log(_this);
	            DistributorRootMove(item, i, _this, dx, dy);
	          }
	        });
	      }
	    },
	        startFnc = function startFnc(poin1, point2, event) {
	      var thisGroupCoord = undefined;
	      _storage2["default"].input.css({ display: 'none' });
	      //let bBoxCoordSet=R.set();
	      if (thisSet.thisCommonContrlName) {
	        thisGroupCoord = thisSet[0].getBBox(); //get object with central points of this Common Control group
	      } else {
	          thisGroupCoord = thisSet[0].getBBox(); //get object with central points of this Effect group
	        }

	      console.log('START');
	      var d = new Date();
	      _storage2["default"].clickTime.downTime = d.getTime(); //get time of START event in miliseconds and save it in GlobalStorage.clickTime (this data is used in file "MainBlock", function "createBlockCommonControls"  to filter click from mouse event in draggable function)

	      if (event.target.nodeName != 'circle' && !event.target.circleName) {
	        thisElem = undefined;
	        this.ox = thisGroupCoord.x; // get central point of this group (X coord)
	        this.oy = thisGroupCoord.y; // get central point of this group (Y coord)
	      } else {
	          // if circle we drag we run function to create line
	          thisElem = thisSet[0][3];
	          //console.log(thisSet[0][3]);
	          //let coord=thisSet[0].getBBox();
	          new _drawLineFromToJs2["default"]().startdrawLineFromTo(thisElem, thisSet);
	        }
	    },
	        endFnc = function endFnc() {

	      console.log('END');
	      var d = new Date();
	      _storage2["default"].clickTime.upTime = d.getTime(); //get time of EVENT event in miliseconds and save it in GlobalStorage.clickTime (this data is used in file "MainBlock", function "createBlockCommonControls"  to filter click from mouse event in draggable function)
	      if (thisElem) {

	        new _drawLineFromToJs2["default"]().endDrawLine(thisElem, thisSet);
	        thisElem = undefined;
	      } else {
	        // if circle we drag we run function to create line
	        this.origTransform = this.transform().local;
	        (0, _moveEffectsJs2["default"])(thisSet);
	      }

	      //}

	      //console.log(GlobalStorage.historyOfObjects);
	    };
	    this.forEach(function (elem) {

	      if (elem.node.nodeName == 'g') {
	        // if group we drag block
	        elem.drag(moveFnc, startFnc, endFnc);
	      }
	    });
	  };
	  /**/

	  function EffectMove(thisSet, item, i, _this, dx, dy) {

	    if (item.node.nodeName == 'path') {
	      var PathString = Snap.parsePathString(item);
	      var offset = item.coordDif * 1;
	      var MX = PathString[0][1];
	      var MY = PathString[0][2];
	      var LX = _this.ox + dx;
	      var LY = _this.oy + dy + 15;

	      if (thisSet[0].attr('clip-path') != 'none') {
	        var pathCoords = (0, _bezieLine2["default"])(MX, MY, LX, LY);
	        item.attr({ d: "M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY });
	        //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${_this.oy+ dy+15}`);
	      } else if (thisSet[0].attr('clip-path') == 'none') {
	          LY = LY + offset;
	          var pathCoords = (0, _bezieLine2["default"])(MX, MY, LX, LY);
	          item.attr({ d: "M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY });
	          //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${(_this.oy+ dy+15)+offset}`);
	        }
	    } else if (item.node.nodeName == 'g') {
	        if (!_this.origTransform) {
	          _this.origTransform = item.transform().local;
	        }
	        var groupy = item.attr({ transform: _this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy] });
	      }
	  }

	  function CommonControlsMove(thisSet, item, i, _this, dx, dy) {
	    if (item.node.nodeName == 'g') {
	      if (!_this.origTransform) {
	        _this.origTransform = item.transform().local;
	      }
	      var groupy = item.attr({ transform: _this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy] });
	    } else if (item.node.nodeName == 'path') {
	      //console.log(item.LineFrom);
	      //console.log(item.LineTo);
	      //console.log(thisSet);
	      var PathString = Snap.parsePathString(item);
	      var LX = PathString[1][5]; //get coords X of the linked EffectBlock
	      var LY = PathString[1][6]; //get coords X of the linked EffectBlock
	      var MX = PathString[0][1];
	      var MY = PathString[0][2];

	      if (item.node.lineFromCyrcle == "circleRight" || item.LineFrom == thisSet.currentName) //moving line from right circle of common control  to Effect Block
	        {
	          var ox = _this.ox + dx + 120;
	          var oy = _this.oy + dy + 16;
	          var pathCoords = (0, _bezieLine2["default"])(ox, oy, LX, LY);
	          item.attr({ d: "M" + ox + " " + oy + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY });
	          //item.attr("path",`M${ox} ${oy}L${LX} ${LY}`);// move path synchronously with commonControl block
	        } else if (item.LineTo == thisSet.currentName) //moving line from RootDistributorBlock  to common control
	          {
	            var destX = _this.ox + dx + 1;
	            var destY = _this.oy + dy + 15;
	            var pathCoords = (0, _bezieLine2["default"])(MX, MY, destX, destY);
	            item.attr({ d: "M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + destX + " " + destY });
	            //item.attr("path",`M${MX} ${MY}L${_this.ox+ dx+1} ${_this.oy+ dy+15}`);
	          }
	    }
	  }
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _bezieLine = __webpack_require__(16);

	var _bezieLine2 = _interopRequireDefault(_bezieLine);

	// Class which DRAWS CONNECTIONS line from/to blocks. We use this in files: "draggableSet.js

	var drawLineFromTo = (function () {
	  function drawLineFromTo() {
	    _classCallCheck(this, drawLineFromTo);

	    this.ox;
	    this.oy;
	    this.connectPath;
	    this.destX;
	    this.destY;
	    this.pathCoords;
	  }

	  _createClass(drawLineFromTo, [{
	    key: 'startdrawLineFromTo',
	    value: function startdrawLineFromTo(_this, thisSet) {
	      //console.log(thisSet);
	      this.ox = thisSet[0].getBBox().x + 120;
	      this.oy = thisSet[0].getBBox().y + 15;

	      /*let connectPath = R.path( ["M", _this.ox, _this.oy, "L", _this.ox, _this.oy ] )*/
	      this.connectPath = _raphaelContainerJs2['default'].path('M' + this.ox + ' ' + this.oy + 'L' + this.ox + ' ' + this.oy).attr({ stroke: "blue" });
	      this.connectPath.node.lineFromCyrcle = _this.node.circleName; //Here we asign from which one circle goes the Line (Right cyrcle or LeftCyrcle)
	      this.connectPath.node.shortControlName = thisSet.shortName;
	      this.connectPath.node.displayControlname = thisSet.currentName; //display the name of control or Multiplier
	      this.connectPath.node.nameOfControl = thisSet.fullCommonContrlName; //the name of current commonControls
	      _storage2['default'].currentLine = this.connectPath; //Send just created Line into GlobalStorage object currentLine
	      //console.log(GlobalStorage.currentLine);
	      this.multiplierArr;
	      thisSet.push(_storage2['default'].currentLine);
	    }
	  }, {
	    key: 'moveLine',
	    value: function moveLine(_this, dx, dy, thisSet) {
	      //console.log(GlobalStorage.controlProp);
	      //console.log(GlobalStorage.overMouseSet);
	      //console.log(GlobalStorage.currentLine.node.shortControlName);
	      //console.log(event.target);
	      //console.log(`M${_this.ox} ${_this.oy}L${(_this.ox*1+dx)-5} ${(_this.oy*1+dy)-5}`);
	      //console.log(_this.ox);
	      //console.log(_this.oy);
	      //console.log(dx);
	      //console.log(dy);

	      this.ox = thisSet[0].getBBox().x + 120;
	      this.oy = thisSet[0].getBBox().y + 15;
	      this.destX = this.ox * 1 + dx - 5;
	      this.destY = this.oy * 1 + dy - 5;

	      this.pathCoords = (0, _bezieLine2['default'])(this.ox, this.oy, this.destX, this.destY);

	      _storage2['default'].currentLine.attr({ d: 'M' + this.ox + ' ' + this.oy + 'C' + this.pathCoords.cp1x + ' ' + this.pathCoords.cp1y + ' ' + this.pathCoords.cp2x + ' ' + this.pathCoords.cp2y + ' ' + this.destX + ' ' + this.destY });
	      /*var typeOfControll=GlobalStorage.currentLine.node.shortControlName;
	          if(GlobalStorage.overMouseSet&&GlobalStorage.currentLine&&GlobalStorage.overMouseSet[typeOfControll]===true){
	          console.log(GlobalStorage.overMouseSet[typeOfControll]);
	          GlobalStorage.currentLine.attr({cursor: "no-drop"});
	        }
	        else{
	          GlobalStorage.currentLine.attr({cursor: "default"});
	        }*/
	    }
	  }, {
	    key: 'endDrawLine',
	    value: function endDrawLine(_this, thisSet) {
	      var _this2 = this;

	      //console.log(GlobalStorage.overMouseSet);

	      if (_storage2['default'].currentLine) {
	        (function () {
	          var typeOfControll = _storage2['default'].currentLine.node.shortControlName;
	          //console.log(typeOfControll);

	          //console.log(GlobalStorage.currentLine);

	          if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null && !_storage2['default'].overMouseSet.fullCommonContrlName && _storage2['default'].controlProp.type == _storage2['default'].currentLine.node.shortControlName) {
	            (function () {
	              // in this case the current Line has connection from CommonControl to EffectBlock

	              _storage2['default'].controlProp.circle.classList.remove('false');
	              _storage2['default'].controlProp.circle.classList.add('true');

	              var controlPropName = _storage2['default'].controlProp.name;
	              //console.log(GlobalStorage.controlProp);
	              if (_storage2['default'].overMouseSet[typeOfControll][controlPropName] === true) {
	                //console.log(GlobalStorage.overMouseSet[typeOfControll]);
	                _storage2['default'].overMouseSet.forEach(function (item, num) {
	                  //console.log(item);
	                  //console.log(item.type=="path");
	                  //console.log("TRUE");
	                  //console.log(item.propertyOfEffect);
	                  //console.log(controlPropName);
	                  if (item.type == "path" && item.propertyOfEffect == controlPropName) {
	                    //console.log(item);
	                    item.remove();
	                  }
	                });
	              }

	              _storage2['default'].currentLine.attr({ stroke: "black" }); //add black color for already successfully connected line
	              var overMouseSet = _storage2['default'].overMouseSet;
	              var effectNameLocal = overMouseSet.setEffectName;
	              //console.log();

	              //console.log(GlobalStorage.currentLine.attr("path"));
	              //adjust coords of path to draw line into center of block
	              var PathString = Snap.parsePathString(_storage2['default'].currentLine);
	              //console.log(PathString);
	              var MX = PathString[0][1]; //get coords X of the linked CommonControlBlock
	              var MY = PathString[0][2]; //get coords Y of the linked CommonControlBlock
	              var LX = overMouseSet[0].getBBox().x; //get coords X of the linked EffectBlock
	              var LY = overMouseSet[0].getBBox().y; //get coords Y of the linked EffectBlock
	              LY = LY + 16 + _storage2['default'].controlProp.coordDif * 1;
	              _this2.pathCoords = (0, _bezieLine2['default'])(MX, MY, LX, LY);
	              //console.log(pathCoords);
	              _storage2['default'].currentLine.attr({ d: 'M' + MX + ' ' + MY + 'C' + _this2.pathCoords.cp1x + ' ' + _this2.pathCoords.cp1y + ' ' + _this2.pathCoords.cp2x + ' ' + _this2.pathCoords.cp2y + ' ' + LX + ' ' + LY }); // apply new coords
	              //GlobalStorage.currentLine.attr("path",`M${MX} ${MY}L${LX} ${LY+16+(GlobalStorage.controlProp.coordDif*1)}`);// apply new coords
	              //
	              //console.log(_this.node.effectName);
	              _storage2['default'].currentLine.LineFrom = thisSet.thisCommonContrlName; //add which effect has been connected with this line
	              _storage2['default'].currentLine.LineTo = effectNameLocal;
	              _storage2['default'].currentLine.coordDif = _storage2['default'].controlProp.coordDif;
	              _storage2['default'].currentLine.baseEffect = overMouseSet.baseEffect; // base name of an effect
	              _storage2['default'].currentLine.propertyOfEffect = controlPropName; //name of property (for example "Point of Interest", "FOV" etc)
	              //console.log(GlobalStorage.currentLine);
	              //console.log(GlobalStorage.overMouseSet);
	              var propName = thisSet.fullCommonContrlName;
	              var thisPropName = thisSet.thisCommonContrlName;
	              var promise = new Promise(function (resolve) {
	                //resolve(overMouseSet.push(GlobalStorage.currentLine).toBack());//Push curent Line into destination set
	                resolve(_storage2['default'].overMouseSet.push(_storage2['default'].currentLine)); //Push curent Line into destination set
	                //console.log(GlobalStorage.overMouseSet[typeOfControll]);
	                _storage2['default'].overMouseSet[typeOfControll][controlPropName] = true;
	                //console.log(thisSet.multiplierArr);
	              }).then(function (resolve) {
	                return _storage2['default'].overMouseSet = null; //clear objects in global storage
	              }).then(function (res) {
	                _storage2['default'].currentLine.toBack(); //send line to back
	                _storage2['default'].currentLine = null; //clear objects in global storage
	                //Call to ExtScript
	                //console.log(effectNameLocal);
	                //console.log(thisPropName);

	                var type = thisSet.shortName;
	                var preMultiplierArr = [];
	                thisSet.forEach(function (item, num) {
	                  if (item.type == 'path' && item.node.lineFromCyrcle != "circleRight" && typeof thisSet[num] !== "undefined") {
	                    preMultiplierArr.push(item.LineFrom);
	                  }
	                });
	                _this2.multiplierArr = preMultiplierArr.join(',');
	                //console.log(this.multiplierArr);
	                _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + controlPropName + '","' + thisPropName + '","' + type + '","' + _this2.multiplierArr + '")');
	              });
	            })();
	          } else if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null && _storage2['default'].overMouseSet.fullCommonContrlName && _storage2['default'].currentLine.node.nameOfControl == 'multiplier' && _storage2['default'].currentLine.node.displayControlname !== _storage2['default'].overMouseSet.currentName) {
	            (function () {
	              //connect line from Multiplier to CommonContrl
	              //console.log(GlobalStorage.overMouseSet.currentName);
	              //console.log(GlobalStorage.currentLine.node.displayControlname);
	              //GlobalStorage.currentLine.toBack();
	              var preMultiplierArr = [];
	              var promise = new Promise(function (resolve) {
	                _storage2['default'].currentLine.LineFrom = _storage2['default'].currentLine.node.displayControlname; //add which CommonContrlol is connected with this line
	                _storage2['default'].overMouseSet.push(_storage2['default'].currentLine); //Push curent Line into destination set
	                //GlobalStorage.overMouseSet.multiplierArr.push(GlobalStorage.currentLine.LineFrom);
	                console.log(_storage2['default'].overMouseSet.shortName);
	                _storage2['default'].overMouseSet.forEach(function (item, num) {
	                  if (item.type == 'path' && item.node.lineFromCyrcle != "circleRight" && typeof _storage2['default'].overMouseSet[num] !== "undefined") {
	                    preMultiplierArr.push(item.LineFrom);
	                  }
	                });
	                _this2.multiplierArr = preMultiplierArr.join(',');
	                console.log();
	                //this.multiplierArr=GlobalStorage.overMouseSet.multiplierArr;
	                var type = _storage2['default'].overMouseSet.shortName;
	                var thisPropName = _storage2['default'].overMouseSet.thisCommonContrlName;
	                _storage2['default'].overMouseSet.forEach(function (item) {
	                  if (item.type == "path" && item.node.lineFromCyrcle == "circleRight") {
	                    var controlPropName = item.propertyOfEffect;
	                    console.log(item.propertyOfEffect);
	                    //let controlPropName=item.LineFrom;
	                    var effectNameLocal = item.LineTo;
	                    console.log();
	                    _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + controlPropName + '","' + thisPropName + '","' + type + '","' + _this2.multiplierArr + '")');
	                  };
	                });
	                _storage2['default'].currentLine.LineTo = _storage2['default'].overMouseSet.currentName;
	                _storage2['default'].currentLine.attr({ stroke: "black" }); //add black color for already successfully connected line
	                resolve('set');
	              });
	              promise.then(function (resolve) {
	                _storage2['default'].overMouseSet = null; //clear objects in global storage
	                _storage2['default'].currentLine.toBack(); //send line to back
	                _storage2['default'].currentLine = null; //clear objects in global storage
	              });
	            })();
	          } else if (_storage2['default'].overMouseSet === null && _storage2['default'].currentLine !== null) {
	              //in this case the current Line dosen't has a destination block
	              _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	              thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	              _storage2['default'].currentLine = null; //clear objects in global storage
	            } else if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null) {
	                _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	                thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	                _storage2['default'].currentLine = null; //clear objects in global storage
	              }
	        })();
	      }
	    }
	  }]);

	  return drawLineFromTo;
	})();

	exports['default'] = drawLineFromTo;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function bezieLine(ox, oy, destx, desty) {
	  var Obj = {
	    cp1x: 0,
	    cp1y: 0,
	    cp2x: 0,
	    cp2y: 0
	  };
	  var distanceX = destx - ox;
	  var cpOffset = distanceX * 0.2;
	  Obj.cp1x = ox + cpOffset;
	  Obj.cp1y = oy;
	  Obj.cp2x = destx - cpOffset;
	  Obj.cp2y = desty;

	  return Obj;
	}

	exports["default"] = bezieLine;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	// Function to check an order of Effects' blocks (by X coordinate)

	function moveEffects(thisSet) {

	  _storage2['default'].historyOfObjects.itemArray.length = 0;
	  var storageName = undefined;
	  var thisBlockEffectName = undefined;
	  var typeBlock = undefined;
	  var attrY = undefined;
	  var obj = undefined;
	  var promise = undefined;
	  var sorted = undefined;
	  var lowestBlock = undefined;
	  var mymap = undefined;
	  var myIndex = undefined;
	  if (thisSet.setEffectName) {
	    storageName = thisSet.setEffectName;
	  } else if (thisSet.thisCommonContrlName) {
	    storageName = thisSet.thisCommonContrlName;
	  }

	  for (var key in _storage2['default'].historyOfObjects) {
	    if (key != "itemArray") {

	      if (_storage2['default'].historyOfObjects[key].setEffectName) {
	        thisBlockEffectName = _storage2['default'].historyOfObjects[key].setEffectName;
	        typeBlock = 'effect';
	      } else if (_storage2['default'].historyOfObjects[key].thisCommonContrlName) {
	        thisBlockEffectName = _storage2['default'].historyOfObjects[key].thisCommonContrlName;
	        typeBlock = 'control';
	      }
	      attrY = _storage2['default'].historyOfObjects[key][0].getBBox().y;
	      obj = { name: thisBlockEffectName, y: attrY, typeBlock: typeBlock };

	      _storage2['default'].historyOfObjects.itemArray.push(obj);
	    }
	  }

	  promise = new Promise(function (resolve) {

	    sorted = _.sortBy(_storage2['default'].historyOfObjects.itemArray, function (i) {

	      return i.y; // Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
	    });
	    lowestBlock = _.last(sorted);

	    switch (lowestBlock.typeBlock) {
	      case 'effect':

	        _storage2['default'].undermostEffectBlock.y = lowestBlock.y;
	        break;
	      case 'control':

	        _storage2['default'].undermostCommonControlBlock.y = lowestBlock.y;
	        break;
	      default:

	    }

	    resolve(sorted);
	  }).then(function (resolve) {

	    mymap = _.map(resolve, function (i, num) {
	      return i.name; // create map of the array and get array of effects' names
	    });
	    return mymap;
	  }).then(function (mymap) {

	    myIndex = _.indexOf(mymap, storageName); //get index of the curent effect in array. This Index is  the place of effect in order
	    myIndex += 1;

	    _csInterface2['default'].evalScript('$._ext.moveEffectIndex("' + storageName + '","' + myIndex + '")', function (res) {

	      _storage2['default'].effectCheckArr = _storage2['default'].historyOfObjects.itemArray.map(function (i) {
	        return i.name;
	      });
	    });
	  });
	}
	exports['default'] = moveEffects;
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var activeBlockFunctionsClass = (function () {
	  function activeBlockFunctionsClass() {
	    _classCallCheck(this, activeBlockFunctionsClass);
	  }

	  _createClass(activeBlockFunctionsClass, [{
	    key: "activeEffectBlock",
	    value: function activeEffectBlock(workBlockSet) {
	      //GlobalStorage.toDelete=workBlockSet;
	      _storage2["default"].toDelete = workBlockSet;
	      var effectName = workBlockSet.setEffectName;
	      //console.log(effectName);
	      if (_storage2["default"].prevActive) {
	        //console.log(GlobalStorage.prevActive[0].id);
	      }

	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[0] && workBlockSet[0].id != _storage2["default"].prevActive[0].id) {

	        if (_storage2["default"].prevActive[0][1][2]) {
	          _storage2["default"].prevActive[0][1][2].attr({
	            stroke: "none"
	          });
	        } else {
	          _storage2["default"].prevActive[0][2].attr({
	            stroke: "none"
	          });
	        }

	        if (_storage2["default"].prevActive.thisCommonContrlName) {
	          var controlName = _storage2["default"].prevActive.thisCommonContrlName;
	          _csInterfaceJs2["default"].evalScript("$._ext.unSelectCommonControl(\"" + controlName + "\")", function (res) {//Unselect commonControl in  After Effects native panel
	            //let remove=GlobalStorage.toDelete.remove()
	            //resolve(remove);
	          });
	        }
	      }

	      _csInterfaceJs2["default"].evalScript("$._ext.selectEffect(\"" + effectName + "\")", function (res) {//Selet effects in  After Effects native panel
	        //let remove=GlobalStorage.toDelete.remove()
	        //resolve(remove);
	      });
	      _storage2["default"].prevActive = workBlockSet;

	      if (_storage2["default"].toDelete[0][1][2]) {
	        _storage2["default"].toDelete[0][1][2].attr({
	          stroke: "red"
	        });
	      } else {
	        _storage2["default"].toDelete[0][2].attr({
	          stroke: "red"
	        });
	      }
	    }
	  }, {
	    key: "activeNotEffectBlock",
	    value: function activeNotEffectBlock(workBlockSet) {
	      _storage2["default"].toDelete = workBlockSet;
	      //GlobalStorage.toDelete=workBlockSet;
	      if (_storage2["default"].prevActive) {
	        console.log(_storage2["default"].prevActive);
	      }
	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[0] && workBlockSet[0].id != _storage2["default"].prevActive[0].id) {

	        if (_storage2["default"].prevActive[0][1][2]) {
	          _storage2["default"].prevActive[0][1][2].attr({
	            stroke: "none"
	          });
	        } else {
	          _storage2["default"].prevActive[0][2].attr({
	            stroke: "none"
	          });
	        }
	        if (_storage2["default"].prevActive.thisCommonContrlName) {
	          var controlName = _storage2["default"].prevActive.thisCommonContrlName;
	          _csInterfaceJs2["default"].evalScript("$._ext.unSelectCommonControl(\"" + controlName + "\")", function (res) {//Selet effects in  After Effects native panel
	            //let remove=GlobalStorage.toDelete.remove()
	            //resolve(remove);
	          });
	        }
	      }
	      if (workBlockSet.thisCommonContrlName) {
	        var controlName = workBlockSet.thisCommonContrlName;
	        _csInterfaceJs2["default"].evalScript("$._ext.selectCommonControl(\"" + controlName + "\")", function (res) {//Selet effects in  After Effects native panel
	          //let remove=GlobalStorage.toDelete.remove()
	          //resolve(remove);
	        });
	      }

	      _storage2["default"].prevActive = workBlockSet;

	      if (_storage2["default"].toDelete[0][1][2]) {
	        _storage2["default"].toDelete[0][1][2].attr({
	          stroke: "red"
	        });
	      } else {
	        _storage2["default"].toDelete[0][2].attr({
	          stroke: "red"
	        });
	      }
	    }
	  }]);

	  return activeBlockFunctionsClass;
	})();

	exports["default"] = activeBlockFunctionsClass;
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	function deletePropertyInEffectBlock(propertyBlock, workBlockSet) {
	  propertyBlock.node.oncontextmenu = function (e) {
	    // handle click of a mouse right button
	    e.preventDefault();
	    var effectName = workBlockSet.setEffectName;
	    var propertyName = _storage2["default"].controlProp.name;
	    var itemLineFrom = undefined;
	    //console.log(GlobalStorage.controlProp);
	    _csInterfaceJs2["default"].evalScript("$._ext.deletePropExpression(\"" + effectName + "\",\"" + propertyName + "\")", function (res) {
	      //Remove property expression from  EffectBlock
	      workBlockSet.forEach(function (item, num) {
	        if (item.node.nodeName == "path" && item.LineTo == effectName && item.propertyOfEffect == propertyName) {
	          //console.log(GlobalStorage.historyOfObjects[item.LineTo][GlobalStorage.controlProp.type][GlobalStorage.controlProp.name]);
	          itemLineFrom = item.LineFrom;
	          _storage2["default"].historyOfObjects[item.LineTo][_storage2["default"].controlProp.type][_storage2["default"].controlProp.name] = false;

	          item.remove();
	          delete _storage2["default"].historyOfObjects[item.LineTo][num];
	          _storage2["default"].controlProp.circle.classList.remove('true');
	          _storage2["default"].controlProp.circle.classList.add('false');
	        }
	      });

	      _storage2["default"].historyOfObjects[itemLineFrom].forEach(function (item, num) {
	        if (item.type == "path" && item.node.lineFromCyrcle == "circleRight" && item.propertyOfEffect == propertyName && item.LineTo == effectName) {

	          delete _storage2["default"].historyOfObjects[itemLineFrom][num];
	        }
	      });
	    });
	  };
	}

	exports["default"] = deletePropertyInEffectBlock;
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var createControlsWindows = (function () {
	  function createControlsWindows() {
	    _classCallCheck(this, createControlsWindows);

	    //this.ground;
	    this.sliderWrap;
	    this.pointsWrap;
	  }

	  _createClass(createControlsWindows, [{
	    key: 'createGround',
	    value: function createGround() {
	      _storage2['default'].greyGround = $('<div>', { id: 'grey-ground' });
	      _storage2['default'].greyGround.click(function () {
	        _storage2['default'].greyGround.hide();
	        _storage2['default'].container.children('#slider-wrap').remove();
	        _storage2['default'].container.children('#point-wrap').remove();
	        _storage2['default'].container.children('#angle-wrap').remove();
	      });
	      _storage2['default'].container.append(_storage2['default'].greyGround);
	    }
	  }, {
	    key: 'createSliderWindow',
	    value: function createSliderWindow(sliderName) {
	      this.sliderWrap = $('<div>', { id: 'slider-wrap', 'class': 'control-wrap', style: 'top:' + _storage2['default'].testDataY + 'px' });
	      var sliderInput = $('<input>', { id: 'slider-input', 'class': 'control-input', type: 'text' });
	      this.slider = $('<div>', { id: 'slider' }).append('<div id="custom-handle" class="ui-slider-handle"></div>');
	      this.sliderFunction(sliderInput, sliderName);
	      this.sliderWrap.append(this.slider);
	      this.sliderWrap.append(sliderInput);
	      _storage2['default'].container.append(this.sliderWrap);
	    }
	  }, {
	    key: 'createMasterSliderWindow',
	    value: function createMasterSliderWindow() {
	      this.sliderWrap = $('<div>', { id: 'slider-wrap', 'class': 'control-wrap', style: 'top:' + _storage2['default'].testDataY + 'px' });
	      var sliderInput = $('<input>', { id: 'slider-input', 'class': 'control-input', type: 'text' });
	      this.slider = $('<div>', { id: 'slider' }).append('<div id="custom-handle" class="ui-slider-handle"></div>');
	      this.sliderMasterFunction(sliderInput);
	      this.sliderWrap.append(this.slider);
	      this.sliderWrap.append(sliderInput);
	      _storage2['default'].container.append(this.sliderWrap);
	    }
	  }, {
	    key: 'createAngleWindow',
	    value: function createAngleWindow(angleName) {
	      var angleWrap = $('<div>', { id: 'angle-wrap', 'class': 'control-wrap', style: 'top:' + _storage2['default'].testDataY + 'px' });
	      var knobWrap = $('<div>', { id: 'knob-wrap' });
	      this.angle = $('<div>', { id: 'knob' });
	      //let angle=$('<div>',{id:'slider'}).append('<div id="custom-handle" class="ui-slider-handle"></div>');
	      var angleInputSpin = $('<input>', { id: 'angle-input-spin', 'class': 'control-input', type: 'text' });
	      var angleInputValue = $('<input>', { id: 'angle-input-value', 'class': 'control-input', type: 'text' });
	      this.angleFunction(angleInputSpin, angleInputValue, angleName);
	      knobWrap.append(this.angle);
	      angleWrap.append(knobWrap);
	      angleWrap.append(angleInputSpin);
	      angleWrap.append(angleInputValue);
	      _storage2['default'].container.append(angleWrap);
	    }
	  }, {
	    key: 'createPointsWindow',
	    value: function createPointsWindow(pointName) {

	      this.pointsWrap = $('<div>', { id: 'point-wrap', 'class': 'control-wrap', style: 'top:' + _storage2['default'].testDataY + 'px' });
	      var pointCanvas = $('<div>', { id: 'point-canvas' });
	      var point = $('<div id="point"></div>');
	      pointCanvas.append(point);
	      var pointInputX = $('<input>', { id: 'point-inputX', 'class': 'control-input', type: 'text' });
	      var pointInputY = $('<input>', { id: 'point-inputY', 'class': 'control-input', type: 'text' });
	      this.pointsWrap.append(pointCanvas);
	      this.pointsWrap.append(pointInputX);
	      this.pointsWrap.append(pointInputY);
	      _storage2['default'].container.append(this.pointsWrap);
	      _csInterfaceJs2['default'].evalScript('$._ext.getPointControlValue("' + pointName + '")', function (res) {
	        point.pointCoordsDrag(res, pointName, pointInputX, pointInputY);
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
	  }, {
	    key: 'sliderMasterFunction',
	    value: function sliderMasterFunction(sliderInput) {
	      var _this = this;

	      var storageInputData = 0;
	      _csInterfaceJs2['default'].evalScript('$._ext.getMasterSliderControlValue()', function (res) {
	        //console.log(res);
	        var value = res * 1;
	        _this.slider.slider({
	          value: value,
	          min: 0,
	          max: 100,
	          create: function create() {
	            //console.log('sliderInput',)
	            storageInputData = $(this).slider("value");
	            sliderInput.val(storageInputData);
	          },
	          slide: function slide(event, ui) {
	            _csInterfaceJs2['default'].evalScript('$._ext.setMasterSliderControlValue("' + ui.value + '")');
	            //console.log(ui.value);
	            storageInputData = ui.value;
	            sliderInput.val(ui.value);
	          }
	        });
	      });

	      sliderInput.on("keypress", function (e) {
	        var sliderInputVal = sliderInput.val();
	        if (e.which == 13 && parseInt(sliderInputVal) || e.which == 13 && parseInt(sliderInputVal) == 0) {
	          if (sliderInputVal > 100) {
	            sliderInputVal = 100;
	            sliderInput.val(storageInputData);
	          } else if (sliderInputVal < 0) {
	            sliderInputVal = 0;
	            sliderInput.val(storageInputData);
	          }
	          _csInterfaceJs2['default'].evalScript('$._ext.setMasterSliderControlValue("' + sliderInputVal + '")');
	          _this.slider.slider("value", sliderInputVal);
	        } else if (e.which == 13 && !parseInt(sliderInputVal)) {
	          sliderInput.val(storageInputData);
	        }
	      });
	    }
	  }, {
	    key: 'sliderFunction',
	    value: function sliderFunction(sliderInput, sliderName) {
	      var _this2 = this;

	      var storageInputData = 0;
	      _csInterfaceJs2['default'].evalScript('$._ext.getSliderControlValue("' + sliderName + '")', function (res) {
	        //console.log(res);
	        var value = res * 1;
	        _this2.slider.slider({
	          value: value,
	          min: -100,
	          max: 100,
	          create: function create() {
	            //console.log('sliderInput',)
	            storageInputData = $(this).slider("value");
	            sliderInput.val(storageInputData);
	          },
	          slide: function slide(event, ui) {
	            _csInterfaceJs2['default'].evalScript('$._ext.setSliderControlValue("' + sliderName + '","' + ui.value + '")');
	            //console.log(ui.value);
	            storageInputData = ui.value;
	            sliderInput.val(ui.value);
	          }
	        });
	      });

	      sliderInput.on("keypress", function (e) {
	        var sliderInputVal = sliderInput.val();
	        console.log('sliderInputVal', sliderInputVal);
	        if (e.which == 13 && parseInt(sliderInputVal) || e.which == 13 && parseInt(sliderInputVal) == 0) {
	          if (sliderInputVal > 100) {
	            sliderInputVal = 100;
	            sliderInput.val(storageInputData);
	          } else if (sliderInputVal < -100) {
	            sliderInputVal = -100;
	            sliderInput.val(storageInputData);
	          }
	          _csInterfaceJs2['default'].evalScript('$._ext.setSliderControlValue("' + sliderName + '","' + sliderInputVal + '")');
	          _this2.slider.slider("value", sliderInputVal);
	        } else if (e.which == 13 && !parseInt(sliderInputVal)) {
	          sliderInput.val(storageInputData);
	        }
	      });
	    }
	  }, {
	    key: 'angleFunction',
	    value: function angleFunction(angleInputSpin, angleInputValue, angleName) {
	      //let spin=0;
	      var data = 0;
	      //let angle=0;
	      var oldVal = 0;
	      var countCircle = 0;
	      var inputData = 0;
	      var value = undefined;
	      var resAngle = undefined;
	      //let outputData=0;

	      //let knobEl=$("#knob");
	      function calcDataFromInput(e, data) {
	        var angleInputSpinVal = angleInputSpin.val();
	        var angleInputValueVal = angleInputValue.val();
	        var parseIntSpin = parseInt(angleInputSpinVal);
	        var parseIntValue = parseInt(angleInputValueVal);
	        //let value=0;
	        if (e.which == 13 && !isNaN(parseIntSpin) && !isNaN(parseIntValue)) {
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
	          value = angleInputValue.val() * 1;
	          data = angleInputSpin.val() * 360 + value;
	          inputData = parsRowdata(data);
	          _csInterfaceJs2['default'].evalScript('$._ext.setAngleControlValue("' + angleName + '","' + data + '")');
	          var _resAngle = (360 + inputData.angle * 1) / 360;
	          _resAngle = Math.round(_resAngle % 1 * 360);
	          $("#knob").roundSlider("setValue", _resAngle);
	          countCircle = inputData.spin;
	          angleInputValue.val(inputData.angle);
	          angleInputSpin.val(inputData.spin);
	          return data;
	        } else if (e.which == 13 && (!parseInt(angleInputSpinVal) || !parseInt(angleInputValueVal))) {
	          angleInputValue.val(inputData.angle);
	          angleInputSpin.val(inputData.spin);
	        }
	      }
	      angleInputSpin.on("keypress", function (e) {
	        data = calcDataFromInput(e, data);
	      });

	      angleInputValue.on("keypress", function (e) {
	        data = calcDataFromInput(e, data);
	      });

	      _csInterfaceJs2['default'].evalScript('$._ext.getAngleControlValue("' + angleName + '")', function (res) {

	        data = res;
	        angleInputSpin.on("keypress", function (e) {
	          data = calcDataFromInput(e, data);
	        });

	        angleInputValue.on("keypress", function (e) {
	          data = calcDataFromInput(e, data);
	        });

	        inputData = parsRowdata(data);
	        angleInputSpin.val(inputData.spin);
	        angleInputValue.val(inputData.angle);

	        resAngle = (360 + inputData.angle * 1) / 360;
	        resAngle = Math.round(resAngle % 1 * 360);

	        countCircle = inputData.spin;
	        $("#knob").roundSlider({
	          handleShape: "round",
	          width: 22,
	          step: '1',
	          radius: 48,
	          max: "360",
	          handleSize: 14,
	          value: resAngle,
	          startAngle: 90,
	          animation: false,
	          showTooltip: false,
	          start: function start(args) {
	            /*inputData=parsRowdata(data);
	            angleInputSpin.val(inputData.spin);
	            angleInputValue.val(inputData.angle);
	            console.log("START",args.value)*/
	          },
	          drag: function drag(args) {
	            console.log("DRAG", args.value);
	            console.log("CountCircle", countCircle);

	            if (args.value > 300 && oldVal < 100) {
	              oldVal = args.value;
	              countCircle--;
	            } else if (oldVal > 300 && args.value < 100) {
	              oldVal = args.value;
	              countCircle++;
	            } else {
	              oldVal = args.value;
	            }

	            data = countCircle * 360 + Math.abs(args.value);
	            console.log("data", data);
	            inputData = parsRowdata(data);

	            angleInputSpin.val(inputData.spin);
	            angleInputValue.val(inputData.angle);

	            _csInterfaceJs2['default'].evalScript('$._ext.setAngleControlValue("' + angleName + '","' + data + '")');
	          }
	        });
	      });

	      function parsRowdata(data) {
	        var obj = {};
	        var spin = 0;
	        var num = data * 1 / 360;
	        if (num < 0) {
	          obj.spin = Math.ceil(num);
	        } else {
	          obj.spin = Math.floor(num);
	        }
	        obj.angle = (num % 1 * 360).toFixed(0);
	        return obj;
	      };
	    }
	  }]);

	  return createControlsWindows;
	})();

	exports['default'] = createControlsWindows;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	//Function to rename Block.  This function is used in files "helperFunctions/checkBackEnd","index.js"
	function renameBlock(oldName, newName) {

	  if (_storage2['default'].historyOfObjects[oldName].setEffectName) {
	    //Rename EffectBlock
	    _storage2['default'].historyOfObjects[oldName][0][1][1].attr({ text: newName });
	    _storage2['default'].historyOfObjects[oldName].setEffectName = newName;
	    _storage2['default'].historyOfObjects[newName] = _storage2['default'].historyOfObjects[oldName];
	    delete _storage2['default'].historyOfObjects[oldName];
	    _storage2['default'].historyOfObjects[newName].forEach(function (i) {
	      if (i.node.nodeName == 'path') {
	        i.LineTo = newName;
	      }
	    });
	  } else if (_storage2['default'].historyOfObjects[oldName].thisCommonContrlName) {
	    (function () {
	      //Rename CommonControlBlock
	      _storage2['default'].historyOfObjects[oldName][0][1].attr({ text: newName });
	      _storage2['default'].historyOfObjects[oldName].thisCommonContrlName = newName;

	      var thisNewName = newName;

	      _storage2['default'].historyOfObjects[oldName].currentName = thisNewName;
	      _storage2['default'].historyOfObjects[thisNewName] = _storage2['default'].historyOfObjects[oldName];
	      delete _storage2['default'].historyOfObjects[oldName];

	      _storage2['default'].historyOfObjects[thisNewName].forEach(function (i) {
	        if (i.node.nodeName == 'path' && i.node.lineFromCyrcle == "circleRight") {
	          i.LineFrom = thisNewName;
	        } else if (i.node.nodeName == 'path' && i.node.lineFromCyrcle != "circleRight") {
	          i.LineTo = thisNewName;
	        }
	      });
	    })();
	  }
	}

	exports['default'] = renameBlock;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	function checkMantraVR() {
	  if (_storage2["default"].hasVR) {
	    _storage2["default"].glassId.style.display = "none";
	  } else {
	    _storage2["default"].glassId.style.display = "block";
	  }
	}

	exports["default"] = checkMantraVR;
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _startArraysArrSecondButton = __webpack_require__(3);

	var _startArraysArrSecondButton2 = _interopRequireDefault(_startArraysArrSecondButton);

	var _bezieLine = __webpack_require__(16);

	var _bezieLine2 = _interopRequireDefault(_bezieLine);

	//This function is used in files "checkBackEnd" and "presetsBlocks"
	function createLinesFunction(linesObj) {
	    var coordDif = undefined;
	    var objElem = undefined;
	    var LineFromX = undefined;
	    var LineFromY = undefined;
	    var LineToX = undefined;
	    var LineToY = undefined;
	    var MX = undefined;
	    var MY = undefined;
	    var LX = undefined;
	    var LY = undefined;
	    var pathCoords = undefined;
	    var connectPath = undefined;
	    linesObj.forEach(function (i, num) {
	        //Create lines beetween a commonControl Block and an Effect Block

	        for (var keyP in _storage2["default"].historyOfObjects[i.LineTo][0][0]) {
	            objElem = _storage2["default"].historyOfObjects[i.LineTo][0][0][keyP];

	            if (objElem.node && objElem.node.nodeName == 'rect' && objElem.attr('coordDif') && objElem.attr('propDataName') == i.propertyOfEffect) {
	                objElem.node.previousElementSibling.classList.remove('false');
	                objElem.node.previousElementSibling.classList.add('true');
	                coordDif = objElem.attr('coordDif');
	            }
	        }

	        if (_storage2["default"].historyOfObjects[i.LineTo].point.hasOwnProperty(i.propertyOfEffect)) {} else if (_storage2["default"].historyOfObjects[i.LineTo].slider.hasOwnProperty(i.propertyOfEffect)) {

	            _storage2["default"].historyOfObjects[i.LineTo].slider[i.propertyOfEffect] = true;
	        } else if (_storage2["default"].historyOfObjects[i.LineTo].angle.hasOwnProperty(i.propertyOfEffect)) {}

	        LineFromX = _storage2["default"].historyOfObjects[i.LineFrom][0].getBBox().x;

	        LineFromY = _storage2["default"].historyOfObjects[i.LineFrom][0].getBBox().y;
	        _storage2["default"].historyOfObjects[i.LineTo];

	        LineToX = _storage2["default"].historyOfObjects[i.LineTo][0][1].getBBox().x;

	        LineToY = _storage2["default"].historyOfObjects[i.LineTo][0][1].getBBox().y;

	        MX = LineFromX + 120;
	        MY = LineFromY + 16;
	        LX = LineToX;
	        LY = LineToY + 15;
	        pathCoords = (0, _bezieLine2["default"])(MX, MY, LX, LY);

	        connectPath = _raphaelContainerJs2["default"].path("M" + MX + " " + MY + "C" + pathCoords.cp1x + " " + pathCoords.cp1y + " " + pathCoords.cp2x + " " + pathCoords.cp2y + " " + LX + " " + LY);
	        connectPath.attr({ stroke: "black" });
	        connectPath.toBack();

	        connectPath.LineFrom = i.LineFrom;
	        connectPath.LineTo = i.LineTo;
	        connectPath.propertyOfEffect = i.propertyOfEffect;
	        connectPath.coordDif = coordDif;
	        connectPath.node.lineFromCyrcle = "circleRight";
	        _storage2["default"].historyOfObjects[i.LineFrom].push(connectPath);
	        _storage2["default"].historyOfObjects[i.LineTo].push(connectPath);
	        var itemArr = _startArraysArrSecondButton2["default"].commonControls.filter(function (obj) {
	            return obj.fullname == i.baseEffect;
	        });
	    });
	}

	exports["default"] = createLinesFunction;
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	//import arrButton from "./startArrays/arrButtonMain.js";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _startArraysArrSecondButtonJs = __webpack_require__(3);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _mainBlockMainBlockJs = __webpack_require__(13);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	//import secondSideBarBlocks from "./secondSideBarBlocks.js";

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(17);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _mainBlockPresetsBlocksJs = __webpack_require__(25);

	var _mainBlockPresetsBlocksJs2 = _interopRequireDefault(_mainBlockPresetsBlocksJs);

	var leftMenu = function leftMenu() {
	  _classCallCheck(this, leftMenu);

	  var wrapUl = $('<ul>', {
	    id: "nav"
	  });
	  //blocks of First Menue
	  var clearButton = $('<li>', {
	    id: 'clear'
	  }).append("<div class='bage-small clear'></div>");
	  wrapUl.append(clearButton);
	  clearButton.click(function () {
	    var toClearArr = _storage2["default"].historyOfObjects.itemArray.map(function (item) {
	      return item.name;
	    });
	    toClearArr = _.without(toClearArr, 'Master', 'Mantra VR');

	    if (toClearArr.length > 0) {
	      //toClearArr=toClearArr.join(';');
	      //console.log(toClearArr);
	      toClearArr.forEach(function (item) {
	        if (_storage2["default"].historyOfObjects[item]) {
	          _storage2["default"].historyOfObjects[item].remove();
	          delete _storage2["default"].historyOfObjects[item];
	        }
	      });
	      _csInterface2["default"].evalScript("$._ext.clearLayer(\"" + toClearArr + "\")");
	      var newItemArr = [];
	      _storage2["default"].historyOfObjects.itemArray.forEach(function (item) {
	        if (item.name == "Mantra VR" || item.name == "Master") {
	          newItemArr.push(item);
	        }
	      });
	      //console.log(newItemArr);
	      _storage2["default"].historyOfObjects.itemArray = newItemArr;
	      _storage2["default"].historyOfObjects.itemArray = _.sortBy(_storage2["default"].historyOfObjects.itemArray, function (item) {

	        return item.y; // Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
	      });
	      var lastObj = _.last(_storage2["default"].historyOfObjects.itemArray);
	      _storage2["default"].undermostEffectBlock.y = lastObj.y;
	      _storage2["default"].undermostCommonControlBlock.y = 10;
	    }
	  });

	  var resetButton = $('<li>', {
	    id: 'reset'
	  }).append("<div class='bage-small reset'></div>");
	  wrapUl.append(resetButton);
	  resetButton.click(function () {
	    var resetArr = [];
	    var obj = {};
	    console.log(_storage2["default"].historyOfObjects);
	    for (var key in _storage2["default"].historyOfObjects) {
	      if (key != "itemArray") {
	        obj.name = key;
	        if (_storage2["default"].historyOfObjects[key].fullCommonContrlName) {
	          obj.blockType = _storage2["default"].historyOfObjects[key].fullCommonContrlName;
	        } else {
	          obj.blockType = _storage2["default"].historyOfObjects[key].baseEffect;
	        }
	      }
	    }
	    _csInterface2["default"].evalScript("$._ext.resetLayer()");
	  });

	  var presets = $('<li>', {
	    id: 'presets'
	  }).append("<div class='bage-small presets'></div>");
	  var presetsUl = presets.children().append("<ul class='subs'></ul>");
	  wrapUl.append(presets);

	  _startArraysArrSecondButtonJs2["default"].presets.forEach(function (item, i) {
	    var presetLi = $('<li>', {
	      id: item.name,
	      text: item.name
	    });

	    presetLi.click(function () {
	      //let cordX=250;
	      //console.log(arrSecondButton.presets);
	      var workBlock = new _mainBlockPresetsBlocksJs2["default"]().createPresetsBlocks(_storage2["default"].effectsCordX, item);
	    });
	    presetsUl.children('ul').append(presetLi);
	    //console.log(index);
	  });

	  var menuDiv = $('#menuleft').append(wrapUl);
	};

	exports["default"] = leftMenu;
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _mainBlockJs = __webpack_require__(13);

	var _mainBlockJs2 = _interopRequireDefault(_mainBlockJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(3);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(17);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _helperFunctionsCreateLinesFunction = __webpack_require__(23);

	var _helperFunctionsCreateLinesFunction2 = _interopRequireDefault(_helperFunctionsCreateLinesFunction);

	var presetsBlocks = (function () {
	  function presetsBlocks() {
	    _classCallCheck(this, presetsBlocks);
	  }

	  _createClass(presetsBlocks, [{
	    key: "createPresetsBlocks",
	    value: function createPresetsBlocks(cordX, presetsType) {
	      //console.log(presetsType);
	      this.createPresetsEffects(cordX, presetsType);
	    }
	  }, {
	    key: "createPresetsEffects",
	    value: function createPresetsEffects(cordX, presetsType) {
	      var _this = this;

	      var workBlock = undefined;
	      var itemArr = undefined;
	      var objPreset = undefined;
	      var propertyOfEffectString = undefined;
	      var promise = undefined;
	      //let lowestCoordY=GlobalStorage.undermostEffectBlock.y;
	      //console.log(GlobalStorage.arrOfPresetsEffects[presetsType.name]);
	      //  GlobalStorage.arrOfPresetsEffects[presetsType.name].forEach((itemName)=>{
	      var effectBlocks = _storage2["default"].arrOfPresetsEffects[presetsType.name].propsArray;
	      //console.log(effectBlocks);
	      effectBlocks.forEach(function (obj, num) {
	        //console.log(obj);
	        //console.log(this.innerForEach(obj));
	        /*let itemArr=arrSecondButton.effects.filter((a, index)=>{
	          let keyName=Object.keys(obj)[0].replace (/(^")|("$)/g, '')
	          console.log(keyName);
	          return arrSecondButton.effects[index].name==keyName;
	          //return arrSecondButton.effects[index].name==keyName.slice(0, -1);
	        });*/

	        var item = Object.keys(obj)[0].replace(/(^")|("$)/g, '');
	        propertyOfEffectString = _this.innerForEach(obj);
	        //console.log(" propertyOfEffectString ",propertyOfEffectString);
	        _csInterfaceJs2["default"].evalScript("$._ext.applyEffectPresets(\"" + item + "\"," + propertyOfEffectString + ")", function (res) {
	          //push data into extend script
	          //let lowestCoordY=GlobalStorage.undermostEffectBlock.y+=40;
	          objPreset = JSON.parse(res);
	          console.log(" objPreset /// ", objPreset);
	          console.log(item);
	          promise = new Promise(function (resolve, reject) {
	            if (item != 'Slider Control' && item != 'Angle Control' && item != 'Point Control') {
	              workBlock = new _mainBlockJs2["default"]().createBlockEffects(cordX, _storage2["default"].undermostEffectBlock.y += 40, item, objPreset);
	            } else {
	              itemArr = _startArraysArrSecondButtonJs2["default"].commonControls.filter(function (a, index) {
	                return _startArraysArrSecondButtonJs2["default"].commonControls[index].name == item;
	              });
	              console.log(itemArr);
	              workBlock = new _mainBlockJs2["default"]().createBlockCommonControls(_storage2["default"].controlsCordX, _storage2["default"].undermostCommonControlBlock.y += 40, itemArr[0], false, objPreset.name);
	            }
	            resolve(objPreset.linesObj);
	          });
	          promise.then(function (resolve) {
	            if (resolve != 0) {
	              (0, _helperFunctionsCreateLinesFunction2["default"])(resolve);
	            }
	          });

	          //console.log(workBlock);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	          _storage2["default"].effectCreateDrag.active = false; // close ability to add this effect to dispatcher
	        });

	        /*else{
	          //console.log(propertyOfEffectString);
	          csInterface.evalScript(`$._ext.applyEffectPresets("${item}",${propertyOfEffectString})`,(res)=>{//push data into extend script
	          //let lowestCoordY=GlobalStorage.undermostEffectBlock.y+=40;
	          let objPreset=JSON.parse(res);
	          console.log('objPreset',objPreset);
	            //let workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=40,item,objPreset);
	            let workBlock=new mainBlock().createBlockCommonControls(GlobalStorage.controlsCordX,GlobalStorage.undermostCommonControlBlock.y+=40,item,false, objPreset);
	            //console.log(workBlock);
	            moveEffects(workBlock);
	            GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	        });
	        }*/
	      });
	      //for (var key in effectBlocks) {

	      //let propertyOfEffectString=JSON.stringify(effectBlocks[key]);

	      //console.log(propertyOfEffectString);
	      /*csInterface.evalScript(`$._ext.applyEffectPresets("${item.name}",${propertyOfEffectString})`,(res)=>{//push data into extend script
	      lowestCoordY+=40
	        let workBlock=new mainBlock().createBlockEffects(cordX,lowestCoordY,item,res);
	        console.log(workBlock);
	        moveEffects(workBlock);
	        GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	      });*/

	      //}

	      var propertyOfEffect = _storage2["default"].arrOfPresetsEffects[presetsType.name];
	      /*console.log(propertyOfEffect);
	      function stringProp (obj){
	        let ObjOfString={};
	      for (var key in obj) {
	                     ObjOfString[`"${key}"`]=`${obj[key]}`;
	        }
	        return ObjOfString;
	      }*/
	      //let testData=stringProp(propertyOfEffect);
	      //let propertyOfEffectString=JSON.stringify(stringProp(propertyOfEffect));

	      /*let testX=JSON.stringify(testData);
	      let objParsed=JSON.parse(testX);
	      console.log(objParsed["Mobius Zoom"].split(';'))*/
	      //let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name][itemName].join(';');
	      /*console.log(propertyOfEffect.forEach((i)=>{
	        console.log(i);
	      }));*/

	      //});
	    }
	  }, {
	    key: "innerForEach",
	    value: function innerForEach(obj) {
	      var objToStringlify = {};
	      var objName = Object.keys(obj)[0];
	      obj[objName].forEach(function (innerObj, innerNum) {
	        //let innerObjName=Object.keys(innerObj)[0];
	        //console.log('innerForEach',Object.keys(innerObj));
	        //let innerObjName=Object.keys(innerObj)[0];
	        var innerObjName = Object.keys(innerObj).forEach(function (item) {
	          objToStringlify[item] = innerObj[item];
	        });
	        //console.log(innerObjName);
	        //console.log(innerObj[innerObjName]);
	      });
	      return JSON.stringify(objToStringlify);
	    }
	  }]);

	  return presetsBlocks;
	})();

	;

	exports["default"] = presetsBlocks;
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	//import arrButton from "./startArrays/arrButtonMain.js";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _startArraysArrSecondButtonJs = __webpack_require__(3);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _mainBlockMainBlockJs = __webpack_require__(13);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	//import secondSideBarBlocks from "./secondSideBarBlocks.js";

	var _raphaelContainerJs = __webpack_require__(7);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(9);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(17);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _mainBlockPresetsBlocksJs = __webpack_require__(25);

	var _mainBlockPresetsBlocksJs2 = _interopRequireDefault(_mainBlockPresetsBlocksJs);

	var topMenu = function topMenu() {
	  _classCallCheck(this, topMenu);

	  var wrapUl = $('<ul>', {
	    id: "nav"
	  });
	  //blocks of First Menue
	  var commonControls = $('<li>', {
	    id: 'commonControls'
	  }).append("<div class='bage-small'>Controls</div>");
	  var commonControlsUl = commonControls.append("<ul class='subs'></ul>");
	  wrapUl.append(commonControls);

	  var effects = $('<li>', {
	    id: 'effects'
	  }).append("<div class='bage-small'>Effects</div>");
	  var effectsUl = effects.append("<ul class='subs'></ul>");
	  wrapUl.append(effects);

	  //blocks of second Menue with draggable
	  _startArraysArrSecondButtonJs2["default"].effects.forEach(function (item, i) {
	    if (item.name == "Mettle Mantra VR") {
	      return false;
	    }
	    var effectLi = $('<li>', {
	      id: item.name,
	      text: item.name,
	      dataPoi: item.poi,
	      "class": 'effects'
	    });

	    effectLi.click(function () {
	      //let cordX=250;
	      _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")", function (res) {
	        //push data into extend script
	        var obj = JSON.parse(res);
	        console.log(obj);
	        var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(_storage2["default"].effectsCordX, _storage2["default"].undermostEffectBlock.y += 40, item, obj);
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	      });
	    });
	    effects.children('ul').append(effectLi);
	    //console.log(item);
	  });

	  _startArraysArrSecondButtonJs2["default"].commonControls.forEach(function (item, i) {
	    var commonControlLi = $('<li>', {
	      id: item.name,
	      text: item.name
	    });
	    commonControlLi.click(function () {
	      //let cordX=100;
	      _csInterface2["default"].evalScript("$._ext.createControl(\"" + item.name + "\")", function (res) {
	        //push data into extend script
	        //console.log(res);
	        var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(_storage2["default"].controlsCordX, _storage2["default"].undermostCommonControlBlock.y += 40, item, false, res);
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	      });
	    });
	    commonControlsUl.children('ul').append(commonControlLi);
	    //console.log(item);
	  });

	  var menuDiv = $('#menutop').append(wrapUl);
	};

	exports["default"] = topMenu;
	module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function rightMouseClick() {
	  window.addEventListener("contextmenu", function (event) {
	    event.preventDefault();
	  });
	}
	exports["default"] = rightMouseClick;
	module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);