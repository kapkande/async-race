/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".line {\n  width: 100%;\n  height: 5px;\n  background-color: black;\n}\n\n.car {\n  width: 50px;\n  position: relative;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  background-color: white;\n  color: black;\n}\n\n.button {\n  font-size: 16px;\n  margin: 5px 0 5px 0;\n  cursor: pointer;\n  background-color: black;\n  color: rgb(27, 184, 27);\n  font-weight: bold;\n  padding: 1px 5px 1px 5px;\n  border-radius: 5px;\n}\n\n.page-active {\n  background-color: rgb(27, 184, 27);\n  color: black;\n}\n\n.button:hover {\n  color: red;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/blockCars.scss","webpack://./src/assets/styles/index.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,WAAA;EACA,uBAAA;ACEF;;ADAA;EACE,WAAA;EACA,kBAAA;ACGF;;AAEA;EACI,iCAAA;EACA,uBAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;EACA,uBAAA;EACA,iBAAA;EACA,wBAAA;EACA,kBAAA;AACJ;;AACA;EACI,kCAAA;EACA,YAAA;AAEJ;;AAAA;EACI,UAAA;AAGJ;;AAAA;EACI,aAAA;AAGJ","sourcesContent":[".line{\r\n  width: 100%;\r\n  height: 5px;\r\n  background-color: black;\r\n}\r\n.car {\r\n  width: 50px;\r\n  position: relative;\r\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n@import \"blockCars\";\r\n// @import \"normalize\";\r\n// // @import \"wrapper\";\r\n// // @import \"header\";\r\n// // @import \"main\";\r\n// // @import \"range\";\r\n// // @import \"productPage\";\r\n// // @import \"popupImage\";\r\n// // @import \"basket\";\r\n// // @import \"payment\";\r\n// // @import \"footer\";\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.button {\r\n    font-size: 16px;\r\n    margin: 5px 0 5px 0;\r\n    cursor: pointer;\r\n    background-color: black;\r\n    color: rgb(27, 184, 27);\r\n    font-weight: bold;\r\n    padding: 1px 5px 1px 5px;\r\n    border-radius: 5px;\r\n}\r\n.page-active{\r\n    background-color: rgb(27, 184, 27);\r\n    color: black;\r\n}\r\n.button:hover {\r\n    color: red;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n// input {\r\n//     border: solid $silver 1.5px;\r\n// }\r\n// input::-webkit-outer-spin-button,\r\n// input::-webkit-inner-spin-button {\r\n//   -webkit-appearance: none;\r\n//   margin: 0;\r\n// }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/components/animation/setAmimation.ts":
/*!*********************************************************!*\
  !*** ./src/assets/components/animation/setAmimation.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionEngine_1 = __webpack_require__(/*! ../interactionEngine */ "./src/assets/components/interactionEngine.ts");
const saveWinners_1 = __webpack_require__(/*! ../winner/saveWinners */ "./src/assets/components/winner/saveWinners.ts");
const stopAmimation_1 = __webpack_require__(/*! ../animation/stopAmimation */ "./src/assets/components/animation/stopAmimation.ts");
async function setAmimation(carItem) {
    if (carItem.className == 'item-car') {
        return;
    }
    const start = new Date;
    let step = 0;
    const stopStartEngine = await interactionEngine_1.default.stopStartEngine(carItem.id, 'started');
    const wigthLine = document.querySelector('.line').clientWidth - 60;
    const velocity = wigthLine * stopStartEngine.velocity / 30000;
    interactionEngine_1.default.switchEngine(carItem.id, 'drive').catch(function (e) {
        if (e == `SyntaxError: Unexpected token 'C', "Car has be"... is not valid JSON`) {
            console.error(`Car has been stopped suddenly. It's engine was broken down`);
        }
        ;
        (0, stopAmimation_1.default)(carItem);
    });
    const img = carItem.children[2];
    requestAnimationFrame(function animate() {
        step = step + velocity;
        draw(step, img);
        let status = getStatus(step, wigthLine, carItem, start);
        if (!status) {
            (0, stopAmimation_1.default)(carItem);
            return true;
        }
        ;
        requestAnimationFrame(animate);
    });
}
function getStatus(step, wigthLine, carItem, start) {
    var _a;
    if (step > wigthLine) {
        carItem.classList.remove('driving');
        (0, saveWinners_1.default)(carItem, start);
        (_a = document.querySelector('.section__game')) === null || _a === void 0 ? void 0 : _a.classList.remove('game-active');
        return false;
    }
    ;
    if (!carItem.classList.contains('driving')) {
        carItem.classList.remove('driving');
        return false;
    }
    ;
    return true;
}
function draw(index, img) {
    img.style.left = `${index}px`;
}
;
exports["default"] = setAmimation;


/***/ }),

/***/ "./src/assets/components/animation/setLeft.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/animation/setLeft.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
async function setLeft(carItem) {
    const img = carItem.children[2];
    setTimeout(() => {
        img.style.left = '0px';
    }, 100);
}
exports["default"] = setLeft;


/***/ }),

/***/ "./src/assets/components/animation/startAllCars.ts":
/*!*********************************************************!*\
  !*** ./src/assets/components/animation/startAllCars.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const setAmimation_1 = __webpack_require__(/*! ./setAmimation */ "./src/assets/components/animation/setAmimation.ts");
function startAllCars() {
    var _a;
    (_a = document.querySelector('.section__game')) === null || _a === void 0 ? void 0 : _a.classList.add('game-active');
    const itemCars = document.querySelectorAll('.item-car');
    itemCars.forEach((element) => {
        if (!(element instanceof HTMLElement)) {
            return;
        }
        ;
        element.classList.add('driving');
        (0, setAmimation_1.default)(element);
    });
}
;
exports["default"] = startAllCars;
// const end:Date = new Date;
// saveWinners(+carItem.id, start, end);


/***/ }),

/***/ "./src/assets/components/animation/stopAmimation.ts":
/*!**********************************************************!*\
  !*** ./src/assets/components/animation/stopAmimation.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionEngine_1 = __webpack_require__(/*! ../interactionEngine */ "./src/assets/components/interactionEngine.ts");
async function stopAmimation(carItem) {
    interactionEngine_1.default.stopStartEngine(carItem.id, 'stopped');
    carItem.classList.remove('driving');
}
exports["default"] = stopAmimation;


/***/ }),

/***/ "./src/assets/components/createListenerCar.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/createListenerCar.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionGarage_1 = __webpack_require__(/*! ./interactionGarage */ "./src/assets/components/interactionGarage.ts");
const deleteWinner_1 = __webpack_require__(/*! ./winner/deleteWinner */ "./src/assets/components/winner/deleteWinner.ts");
const setDisabled_1 = __webpack_require__(/*! ./setDisabled */ "./src/assets/components/setDisabled.ts");
const removeItemActive_1 = __webpack_require__(/*! ./removeItemActive */ "./src/assets/components/removeItemActive.ts");
const setAmimation_1 = __webpack_require__(/*! ./animation/setAmimation */ "./src/assets/components/animation/setAmimation.ts");
const pagination_1 = __webpack_require__(/*! ./pagination/pagination */ "./src/assets/components/pagination/pagination.ts");
const setLeft_1 = __webpack_require__(/*! ./animation/setLeft */ "./src/assets/components/animation/setLeft.ts");
function createListenerCar(carItem, id) {
    carItem.addEventListener('click', async (e) => {
        var _a, _b, _c, _d;
        if (!(e.target instanceof HTMLElement || e.target instanceof HTMLButtonElement)) {
            return;
        }
        if (['button button__start'].includes((_a = e.target) === null || _a === void 0 ? void 0 : _a.className)) {
            carItem.classList.add('driving');
            (0, setAmimation_1.default)(carItem);
        }
        if (['button button__stop'].includes((_b = e.target) === null || _b === void 0 ? void 0 : _b.className)) {
            carItem.classList.remove('driving');
            await (0, setAmimation_1.default)(carItem);
            await (0, setLeft_1.default)(carItem);
        }
        if (['button button__remuve'].includes((_c = e.target) === null || _c === void 0 ? void 0 : _c.className)) {
            await interactionGarage_1.default.deleteCar(id);
            await (0, deleteWinner_1.default)(id);
            (0, pagination_1.default)();
        }
        if (['button button__select'].includes((_d = e.target) === null || _d === void 0 ? void 0 : _d.className)) {
            (0, removeItemActive_1.default)();
            carItem.classList.add('item-active');
            (0, setDisabled_1.default)();
        }
    });
}
exports["default"] = createListenerCar;


/***/ }),

/***/ "./src/assets/components/interactionEngine.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/interactionEngine.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionEngine = {
    rootLinck: 'http://127.0.0.1:3000/engine',
    stopStartEngine: (async (id, status) => {
        const response = await fetch(`${interactionEngine.rootLinck}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return await response.json();
    }),
    switchEngine: (async (id, status) => {
        const response = await fetch(`${interactionEngine.rootLinck}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return await response.json();
    }),
};
exports["default"] = interactionEngine;


/***/ }),

/***/ "./src/assets/components/interactionGarage.ts":
/*!****************************************************!*\
  !*** ./src/assets/components/interactionGarage.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionGarage = {
    rootLinck: 'http://127.0.0.1:3000/garage',
    getCars: async () => {
        const response = await fetch(interactionGarage.rootLinck);
        return await response.json();
    },
    getCar: async (id) => {
        const response = await fetch(`${interactionGarage.rootLinck}/${id}`);
        return await response.json();
    },
    createCar: (async (data) => {
        const response = await fetch(interactionGarage.rootLinck, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }),
    deleteCar: async (id) => {
        const response = await fetch(`${interactionGarage.rootLinck}/${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    },
    updateCar: (async (data, id) => {
        const response = await fetch(`${interactionGarage.rootLinck}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }),
};
exports["default"] = interactionGarage;


/***/ }),

/***/ "./src/assets/components/interactionWinners.ts":
/*!*****************************************************!*\
  !*** ./src/assets/components/interactionWinners.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionWinners = {
    rootLinck: 'http://127.0.0.1:3000/winners',
    getWinners: async (starus) => {
        const response = await fetch(`${interactionWinners.rootLinck}${starus ? starus : ''}`);
        return await response.json();
    },
    getWinner: async (id) => {
        const response = await fetch(`${interactionWinners.rootLinck}/${id}`);
        return await response.json();
    },
    createWinner: (async (data) => {
        const response = await fetch(interactionWinners.rootLinck, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }),
    deleteWinner: async (id) => {
        const response = await fetch(`${interactionWinners.rootLinck}/${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    },
    updateWinner: (async (data, id) => {
        const response = await fetch(`${interactionWinners.rootLinck}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }),
};
exports["default"] = interactionWinners;


/***/ }),

/***/ "./src/assets/components/main/createGameHtml.ts":
/*!******************************************************!*\
  !*** ./src/assets/components/main/createGameHtml.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const createListenerCar_1 = __webpack_require__(/*! ../createListenerCar */ "./src/assets/components/createListenerCar.ts");
const car_1 = __webpack_require__(/*! ../../image/car */ "./src/assets/image/car.ts");
let catsBlock = document.createElement('div');
catsBlock.classList.add('carsBlock');
function createCar(carsName, color, id) {
    const sectionGame = document.querySelector('.section__game');
    let carItem = document.createElement('div');
    let navCar = document.createElement('div');
    navCar.classList.add('nav-car');
    carItem.classList.add('item-car');
    let buttonSelect = document.createElement('button');
    buttonSelect.classList.add('button', 'button__select');
    buttonSelect.textContent = 'Select';
    navCar.appendChild(buttonSelect);
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('button', 'button__remuve');
    buttonRemove.textContent = 'Remuve';
    navCar.appendChild(buttonRemove);
    let title = document.createElement('div');
    title.textContent = `${carsName}`;
    title.classList.add('nameCar');
    navCar.appendChild(title);
    carItem.appendChild(navCar);
    let startStop = document.createElement('div');
    startStop.classList.add('start-stop');
    let buttonStart = document.createElement('button');
    buttonStart.classList.add('button', 'button__start');
    buttonStart.textContent = 'A';
    startStop.appendChild(buttonStart);
    let buttonStop = document.createElement('button');
    buttonStop.classList.add('button', 'button__stop');
    buttonStop.textContent = 'B';
    startStop.appendChild(buttonStop);
    carItem.appendChild(startStop);
    let car = document.createElement('div');
    car.classList.add('car');
    car.innerHTML = car_1.default;
    car.style.fill = `${color}`;
    carItem.appendChild(car);
    let line = document.createElement('div');
    line.classList.add('line');
    carItem.appendChild(line);
    (0, createListenerCar_1.default)(carItem, id);
    // убрать id из функции выше, если оно в дальшейшем не нужно
    carItem.id = String(id);
    catsBlock.appendChild(carItem);
    sectionGame.appendChild(catsBlock);
}
exports["default"] = createCar;


/***/ }),

/***/ "./src/assets/components/main/createMainHtml.ts":
/*!******************************************************!*\
  !*** ./src/assets/components/main/createMainHtml.ts ***!
  \******************************************************/
/***/ (() => {


const body = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body === null || body === void 0 ? void 0 : body.appendChild(wrapper);
let header = document.createElement('header');
header.classList.add('header');
wrapper.appendChild(header);
let buttonGarage = document.createElement('button');
buttonGarage.classList.add('button', 'button__gatage');
buttonGarage.textContent = 'To Garage';
let buttonWinner = document.createElement('button');
buttonWinner.classList.add('button', 'button__winners');
buttonWinner.textContent = 'To Winners';
header.appendChild(buttonGarage);
header.appendChild(buttonWinner);
let main = document.createElement('main');
main.classList.add('main');
wrapper.appendChild(main);
let sectionForm = document.createElement('section');
sectionForm.classList.add('section__form');
main.appendChild(sectionForm);
let formCriate = document.createElement('form');
sectionForm.appendChild(formCriate);
formCriate.setAttribute('onSubmit', 'return false');
let inputCriateText = document.createElement('input');
inputCriateText.type = "text";
inputCriateText.setAttribute("required", 'true');
inputCriateText.id = 'inputCriateText';
let inputCriateColor = document.createElement('input');
inputCriateColor.type = "color";
inputCriateColor.id = 'inputCriateColor';
let inputCriateSubmit = document.createElement('button');
inputCriateSubmit.type = "submit";
inputCriateSubmit.classList.add('inputCriateSubmit');
inputCriateSubmit.textContent = "CRIATE";
formCriate.appendChild(inputCriateText);
formCriate.appendChild(inputCriateColor);
formCriate.appendChild(inputCriateSubmit);
let formUpdate = document.createElement('form');
sectionForm.appendChild(formUpdate);
formUpdate.setAttribute('onSubmit', 'return false');
// formUpdate.setAttribute('onSubmit', 'return false')
let inputUpdateText = document.createElement('input');
inputUpdateText.type = "text";
inputUpdateText.id = 'inputUpdateText';
inputUpdateText.disabled = true;
inputUpdateText.setAttribute("required", 'true');
let inputUpdateColor = document.createElement('input');
inputUpdateColor.type = "color";
inputUpdateColor.id = 'inputUpdateColor';
inputUpdateColor.disabled = true;
let inputUpdateSubmit = document.createElement('button');
inputUpdateSubmit.type = "submit";
inputUpdateSubmit.textContent = 'UPDATE';
inputUpdateSubmit.id = 'inputUpdateSubmit';
inputUpdateSubmit.disabled = true;
// inputUpdateSubmit.value = "UPDATE";
formUpdate.appendChild(inputUpdateText);
formUpdate.appendChild(inputUpdateColor);
formUpdate.appendChild(inputUpdateSubmit);
let blockButton = document.createElement('div');
blockButton.classList.add('buttons-block');
let buttonRace = document.createElement('button');
buttonRace.classList.add('button', 'button__race');
buttonRace.textContent = 'Race';
blockButton.appendChild(buttonRace);
let buttonReset = document.createElement('button');
buttonReset.classList.add('button', 'button__reset');
buttonReset.textContent = 'Reset';
blockButton.appendChild(buttonReset);
let buttonGenerate = document.createElement('button');
buttonGenerate.classList.add('button', 'button__gererate');
buttonGenerate.textContent = 'Reset';
blockButton.appendChild(buttonGenerate);
sectionForm.appendChild(blockButton);
let sectionGame = document.createElement('section');
sectionGame.classList.add('section__game');
let paginationBlock = document.createElement('div');
paginationBlock.classList.add('paginationBlock');
sectionGame.appendChild(paginationBlock);
main.appendChild(sectionGame);
let titleGame = document.createElement('div');
titleGame.classList.add('game__title');
sectionGame.appendChild(titleGame);
let subTitleGame = document.createElement('div');
subTitleGame.classList.add('game__subTitle');
sectionGame.appendChild(subTitleGame);
let sectionWinners = document.createElement('section');
sectionWinners.classList.add('section__winners', 'hidden');
// sectionWinners.classList.add('section__winners');
let titleWinners = document.createElement('div');
titleWinners.classList.add('winners__title');
sectionWinners.appendChild(titleWinners);
let subTitleWinners = document.createElement('div');
subTitleWinners.classList.add('winners__subTitle');
sectionWinners.appendChild(subTitleWinners);
sectionWinners.appendChild(titleWinners);
sectionWinners.appendChild(subTitleWinners);
main.appendChild(sectionWinners);


/***/ }),

/***/ "./src/assets/components/main/setNumbarPage.ts":
/*!*****************************************************!*\
  !*** ./src/assets/components/main/setNumbarPage.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionGarage_1 = __webpack_require__(/*! ../interactionGarage */ "./src/assets/components/interactionGarage.ts");
async function setQuantityCars() {
    const gameTitle = document.querySelector('.game__title');
    const cars = await interactionGarage_1.default.getCars();
    gameTitle.textContent = `Garage ${cars.length}`;
}
exports["default"] = setQuantityCars;


/***/ }),

/***/ "./src/assets/components/main/swopPage.ts":
/*!************************************************!*\
  !*** ./src/assets/components/main/swopPage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const removeTable_1 = __webpack_require__(/*! ../winner/removeTable */ "./src/assets/components/winner/removeTable.ts");
const createTable_1 = __webpack_require__(/*! ../winner/createTable */ "./src/assets/components/winner/createTable.ts");
function swopPage(e) {
    var _a, _b;
    if (!(e.target instanceof HTMLElement || e.target instanceof HTMLButtonElement)) {
        return;
    }
    const sectionForm = document.querySelector('.section__form');
    const sectionGame = document.querySelector('.section__game');
    const sectionWinners = document.querySelector('.section__winners');
    if (['button button__gatage'].includes((_a = e.target) === null || _a === void 0 ? void 0 : _a.className)) {
        sectionWinners === null || sectionWinners === void 0 ? void 0 : sectionWinners.classList.add('hidden');
        sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.remove('hidden');
        sectionGame === null || sectionGame === void 0 ? void 0 : sectionGame.classList.remove('hidden');
        (0, removeTable_1.default)();
        (0, createTable_1.default)();
    }
    if (['button button__winners'].includes((_b = e.target) === null || _b === void 0 ? void 0 : _b.className)) {
        sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.add('hidden');
        sectionGame === null || sectionGame === void 0 ? void 0 : sectionGame.classList.add('hidden');
        sectionWinners === null || sectionWinners === void 0 ? void 0 : sectionWinners.classList.remove('hidden');
    }
}
exports["default"] = swopPage;


/***/ }),

/***/ "./src/assets/components/pagination/pagination.ts":
/*!********************************************************!*\
  !*** ./src/assets/components/pagination/pagination.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionGarage_1 = __webpack_require__(/*! ../interactionGarage */ "./src/assets/components/interactionGarage.ts");
const createGameHtml_1 = __webpack_require__(/*! ../main/createGameHtml */ "./src/assets/components/main/createGameHtml.ts");
const remuveCars_1 = __webpack_require__(/*! ../remuveCars */ "./src/assets/components/remuveCars.ts");
const setNumberPage_1 = __webpack_require__(/*! ./setNumberPage */ "./src/assets/components/pagination/setNumberPage.ts");
const setNumbarPage_1 = __webpack_require__(/*! ../main/setNumbarPage */ "./src/assets/components/main/setNumbarPage.ts");
let index = 0;
async function setPagination() {
    (0, setNumbarPage_1.default)();
    (0, remuveCars_1.default)();
    const splitArray = [];
    const arrayCars = await interactionGarage_1.default.getCars();
    const size = 7;
    for (let i = 0; i < Math.ceil(arrayCars.length / size); i++) {
        splitArray[i] = arrayCars.slice((i * size), (i * size) + size);
    }
    if (splitArray.length == 0) {
        return;
    }
    if (index != splitArray.length) {
        (0, setNumberPage_1.default)();
        index = splitArray.length;
    }
    let page;
    const pageActive = document.querySelector('.page-active');
    if (!pageActive) {
        page = 0;
    }
    else {
        page = Number(pageActive === null || pageActive === void 0 ? void 0 : pageActive.textContent) - 1;
    }
    ;
    splitArray[page].forEach(element => {
        (0, createGameHtml_1.default)(element.name, element.color, element.id);
    });
}
exports["default"] = setPagination;


/***/ }),

/***/ "./src/assets/components/pagination/setNumberPage.ts":
/*!***********************************************************!*\
  !*** ./src/assets/components/pagination/setNumberPage.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const remuveCars_1 = __webpack_require__(/*! ../remuveCars */ "./src/assets/components/remuveCars.ts");
const interactionGarage_1 = __webpack_require__(/*! ../interactionGarage */ "./src/assets/components/interactionGarage.ts");
const pagination_1 = __webpack_require__(/*! ./pagination */ "./src/assets/components/pagination/pagination.ts");
let index = 0;
async function createNumberPage() {
    const arrayCarsLemgth = await interactionGarage_1.default.getCars();
    const paginationBlock = document.querySelector('.paginationBlock');
    removeNumberPage();
    for (let i = 0; i < Math.ceil(arrayCarsLemgth.length / 7); i++) {
        let div = document.createElement('span');
        div.classList.add('numbarPage', 'button');
        div.textContent = `${i + 1}`;
        if (index == i) {
            div.classList.add('page-active');
        }
        paginationBlock === null || paginationBlock === void 0 ? void 0 : paginationBlock.appendChild(div);
    }
    paginationBlock === null || paginationBlock === void 0 ? void 0 : paginationBlock.addEventListener('click', updatePage);
}
exports["default"] = createNumberPage;
function updatePage(e) {
    const pageActive = document.querySelector('.page-active');
    let target = e.target;
    if (['numbarPage button'].includes(target.className)) {
        index = Number(target.textContent) - 1;
        (0, remuveCars_1.default)();
        if (pageActive) {
            pageActive.classList.remove('page-active');
        }
        target.classList.add('page-active');
        (0, pagination_1.default)();
    }
}
function removeNumberPage() {
    const paginationBlock = document.querySelectorAll('.numbarPage');
    paginationBlock.forEach(element => {
        element.remove();
    });
}


/***/ }),

/***/ "./src/assets/components/removeItemActive.ts":
/*!***************************************************!*\
  !*** ./src/assets/components/removeItemActive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function removeItemActive() {
    const itemActive = document.querySelectorAll('.item-active');
    if (itemActive.length > 0) {
        itemActive.forEach(element => {
            element.classList.remove('item-active');
        });
    }
}
exports["default"] = removeItemActive;


/***/ }),

/***/ "./src/assets/components/remuveCars.ts":
/*!*********************************************!*\
  !*** ./src/assets/components/remuveCars.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function remuveCars() {
    const arrayCars = document.querySelectorAll('.item-car');
    arrayCars.forEach(element => {
        element.remove();
    });
}
exports["default"] = remuveCars;


/***/ }),

/***/ "./src/assets/components/setDisabled.ts":
/*!**********************************************!*\
  !*** ./src/assets/components/setDisabled.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function setDisabled() {
    const itemActive = document.querySelector('.item-active');
    let Flag;
    if (!itemActive) {
        Flag = true;
    }
    else {
        Flag = false;
    }
    inputUpdateText.disabled = Flag;
    inputUpdateColor.disabled = Flag;
    inputUpdateSubmit.disabled = Flag;
}
exports["default"] = setDisabled;


/***/ }),

/***/ "./src/assets/components/winner/createTable.ts":
/*!*****************************************************!*\
  !*** ./src/assets/components/winner/createTable.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionWinners_1 = __webpack_require__(/*! ../interactionWinners */ "./src/assets/components/interactionWinners.ts");
const createTableItem_1 = __webpack_require__(/*! ./createTableItem */ "./src/assets/components/winner/createTableItem.ts");
async function createTable() {
    const winners = await interactionWinners_1.default.getWinners();
    winners.forEach(element => {
        const date = {
            id: element.id,
            wins: element.wins,
            time: element.time,
        };
        (0, createTableItem_1.default)(date);
    });
}
exports["default"] = createTable;


/***/ }),

/***/ "./src/assets/components/winner/createTableHeader.ts":
/*!***********************************************************!*\
  !*** ./src/assets/components/winner/createTableHeader.ts ***!
  \***********************************************************/
/***/ (() => {


const sectionW1inners = document.querySelector('.section__winners');
let table = document.createElement('table');
table.classList.add('winners__table');
sectionW1inners === null || sectionW1inners === void 0 ? void 0 : sectionW1inners.appendChild(table);
let trHeader = document.createElement('tr');
trHeader.classList.add('winners__trHeader');
// th open
let thHeaderNum = document.createElement('th');
thHeaderNum.classList.add('winners__thNum');
thHeaderNum.textContent = 'Number';
trHeader.appendChild(thHeaderNum);
let thHeaderCar = document.createElement('th');
thHeaderCar.classList.add('winners__thCar');
thHeaderCar.textContent = 'Car';
trHeader.appendChild(thHeaderCar);
let thHeaderName = document.createElement('th');
thHeaderName.classList.add('winners__thName');
thHeaderName.textContent = 'Name';
trHeader.appendChild(thHeaderName);
let thHeaderWins = document.createElement('th');
thHeaderWins.classList.add('winners__thWins');
thHeaderWins.textContent = 'Wins';
trHeader.appendChild(thHeaderWins);
let thBastTime = document.createElement('th');
thBastTime.classList.add('winners__thBastTime');
thBastTime.textContent = 'Bast Time';
trHeader.appendChild(thBastTime);
// th close
table === null || table === void 0 ? void 0 : table.appendChild(trHeader);
// `<table>
//   <tr>
//     <th>№ п/п</th>
//     <th>Наименование</th>
//     <th>Цена, руб.</th>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>Карандаш цветной</td>
//     <td>20,00</td>
//   </tr>
//   <tr>
//     <td>2</td>
//     <td>Линейка 20 см</td>
//     <td>30,00</td>
//   </tr>
// </table>`


/***/ }),

/***/ "./src/assets/components/winner/createTableItem.ts":
/*!*********************************************************!*\
  !*** ./src/assets/components/winner/createTableItem.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionGarage_1 = __webpack_require__(/*! ../interactionGarage */ "./src/assets/components/interactionGarage.ts");
const car_1 = __webpack_require__(/*! ../../image/car */ "./src/assets/image/car.ts");
const setNumberInTablete_1 = __webpack_require__(/*! ../winner/setNumberInTablete */ "./src/assets/components/winner/setNumberInTablete.ts");
async function createTableItem(date) {
    const winnersTable = document.querySelector('.winners__table');
    const getCarInGarage = await interactionGarage_1.default.getCar(date.id);
    let bases = document.createElement('tr');
    bases.classList.add('tr');
    let trNumber = document.createElement('td');
    trNumber.classList.add('winners__tr-number');
    bases.appendChild(trNumber);
    let trCar = document.createElement('td');
    trCar.classList.add('winners__tr-car');
    trCar.innerHTML = car_1.default;
    trCar.style.fill = `${getCarInGarage.color}`;
    bases.appendChild(trCar);
    let trName = document.createElement('td');
    trName.classList.add('winners__tr-name');
    trName.textContent = `${getCarInGarage.name}`;
    bases.appendChild(trName);
    let trWins = document.createElement('td');
    trWins.classList.add('winners__tr-wins');
    trWins.textContent = `${date.wins}`;
    bases.appendChild(trWins);
    let trTime = document.createElement('td');
    trTime.classList.add('winners__tr-time');
    trTime.textContent = `${date.time}`;
    bases.appendChild(trTime);
    winnersTable === null || winnersTable === void 0 ? void 0 : winnersTable.appendChild(bases);
    (0, setNumberInTablete_1.default)();
}
exports["default"] = createTableItem;
// function msToTime(duration:string) {
// const milliseconds = parseInt((+duration%1000))
// const seconds = parseInt((duration/1000)%60)
// const minutes = parseInt((duration/(1000*60))%60)
// const hours = parseInt((duration/(1000*60*60))%24);
// hours = (hours < 10) ? "0" + hours : hours;
// minutes = (minutes < 10) ? "0" + minutes : minutes;
// seconds = (seconds < 10) ? "0" + seconds : seconds;
// return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }
// `<table>
//   <tr>
//     <th>№ п/п</th>
//     <th>Наименование</th>
//     <th>Цена, руб.</th>
//   </tr>
//   <tr>
//     <td>1</td>
//     <td>Карандаш цветной</td>
//     <td>20,00</td>
//   </tr>
//   <tr>
//     <td>2</td>
//     <td>Линейка 20 см</td>
//     <td>30,00</td>
//   </tr>
// </table>`


/***/ }),

/***/ "./src/assets/components/winner/deleteWinner.ts":
/*!******************************************************!*\
  !*** ./src/assets/components/winner/deleteWinner.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionWinners_1 = __webpack_require__(/*! ../interactionWinners */ "./src/assets/components/interactionWinners.ts");
async function setWinner(id) {
    const arrayWinners = await interactionWinners_1.default.getWinners();
    arrayWinners.forEach(element => {
        if (element.id == id) {
            interactionWinners_1.default.deleteWinner(id);
        }
    });
}
exports["default"] = setWinner;


/***/ }),

/***/ "./src/assets/components/winner/removeTable.ts":
/*!*****************************************************!*\
  !*** ./src/assets/components/winner/removeTable.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function createTableIe() {
    const tr = document.querySelectorAll('.tr');
    tr.forEach(element => {
        element.remove();
    });
}
exports["default"] = createTableIe;


/***/ }),

/***/ "./src/assets/components/winner/saveWinners.ts":
/*!*****************************************************!*\
  !*** ./src/assets/components/winner/saveWinners.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interactionWinners_1 = __webpack_require__(/*! ../interactionWinners */ "./src/assets/components/interactionWinners.ts");
async function saveWinners(carItem, start) {
    const gameActive = document.querySelector('.section__game');
    if ((gameActive === null || gameActive === void 0 ? void 0 : gameActive.className) == 'section__game') {
        return;
    }
    const stop = new Date;
    const arrayWinners = await interactionWinners_1.default.getWinners();
    let gwin;
    arrayWinners.forEach(element => {
        if (element.id == +carItem.id) {
            gwin = interactionWinners_1.default.getWinner(carItem.id);
        }
    });
    const date = {
        id: +carItem.id,
        wins: 1,
        time: `${stop.getTime() - start.getTime()}`,
    };
    if (!gwin) {
        interactionWinners_1.default.createWinner(date);
        return;
    }
    let obj = await interactionWinners_1.default.getWinner(+carItem.id);
    date.time = `${Math.min(+date.time, +obj.time)}`;
    date.wins = obj.wins + 1;
    interactionWinners_1.default.updateWinner(date, carItem.id);
}
exports["default"] = saveWinners;


/***/ }),

/***/ "./src/assets/components/winner/setNumberInTablete.ts":
/*!************************************************************!*\
  !*** ./src/assets/components/winner/setNumberInTablete.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function setNumberInTablete() {
    const winnersTrNumber = document.querySelectorAll('.winners__tr-number');
    for (let i = 0; i < winnersTrNumber.length; i++) {
        winnersTrNumber[i].textContent = `${i + 1}`;
    }
}
exports["default"] = setNumberInTablete;


/***/ }),

/***/ "./src/assets/image/car.ts":
/*!*********************************!*\
  !*** ./src/assets/image/car.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const svgCar = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11.5 38q-2.3 0-3.9-1.6T6 32.5H2v-19q0-1.45 1.025-2.475Q4.05 10 5.5 10h28.8L46 21.7v10.8h-4q0 2.3-1.6 3.9T36.5 38q-2.3 0-3.9-1.6T31 32.5H17q0 2.3-1.6 3.9T11.5 38ZM30 20h9.7l-7-7H30Zm-12.5 0H27v-7h-9.5ZM5 20h9.5v-7H5Zm6.5 15.5q1.25 0 2.125-.875T14.5 32.5q0-1.25-.875-2.125T11.5 29.5q-1.25 0-2.125.875T8.5 32.5q0 1.25.875 2.125t2.125.875Zm25 0q1.25 0 2.125-.875T39.5 32.5q0-1.25-.875-2.125T36.5 29.5q-1.25 0-2.125.875T33.5 32.5q0 1.25.875 2.125t2.125.875ZM5 29.5h1.85q.85-1.3 2.125-1.9Q10.25 27 11.5 27t2.525.6q1.275.6 2.125 1.9h15.7q.85-1.3 2.125-1.9Q35.25 27 36.5 27t2.525.6q1.275.6 2.125 1.9H43V23H5ZM43 23H5Z"/></svg>`;
exports["default"] = svgCar;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './assets/icons/basket.svg';
__webpack_require__(/*! ./assets/styles/index.scss */ "./src/assets/styles/index.scss");
__webpack_require__(/*! ./assets/components/animation/setAmimation */ "./src/assets/components/animation/setAmimation.ts");
// import './assets/components/createListenerCar';
// import IBasicNew from './assets/components/data/productInterfaceNew';
// import newBasic from './assets/components/impBasicInit';
// import loadBasket from './assets/components/basket/basketLoader';
// import showMain from './assets/components/main/showMain';
// import setBlock from './assets/components/main/showMainBlock'
// import createCars from "./assets/components/createCars"
const pagination_1 = __webpack_require__(/*! ./assets/components/pagination/pagination */ "./src/assets/components/pagination/pagination.ts");
const setNumberPage_1 = __webpack_require__(/*! ./assets/components/pagination/setNumberPage */ "./src/assets/components/pagination/setNumberPage.ts");
// 11
__webpack_require__(/*! ./assets/components/main/createMainHtml */ "./src/assets/components/main/createMainHtml.ts");
__webpack_require__(/*! ./assets/components/main/createGameHtml */ "./src/assets/components/main/createGameHtml.ts");
__webpack_require__(/*! ./assets/components/winner/createTableHeader */ "./src/assets/components/winner/createTableHeader.ts");
const interactionGarage_1 = __webpack_require__(/*! ./assets/components/interactionGarage */ "./src/assets/components/interactionGarage.ts");
const createGameHtml_1 = __webpack_require__(/*! ./assets/components/main/createGameHtml */ "./src/assets/components/main/createGameHtml.ts");
const removeItemActive_1 = __webpack_require__(/*! ./assets/components/removeItemActive */ "./src/assets/components/removeItemActive.ts");
const setDisabled_1 = __webpack_require__(/*! ./assets/components/setDisabled */ "./src/assets/components/setDisabled.ts");
const startAllCars_1 = __webpack_require__(/*! ./assets/components/animation/startAllCars */ "./src/assets/components/animation/startAllCars.ts");
const setNumbarPage_1 = __webpack_require__(/*! ./assets/components/main/setNumbarPage */ "./src/assets/components/main/setNumbarPage.ts");
const swopPage_1 = __webpack_require__(/*! ./assets/components/main/swopPage */ "./src/assets/components/main/swopPage.ts");
const createTable_1 = __webpack_require__(/*! ./assets/components/winner/createTable */ "./src/assets/components/winner/createTable.ts");
const inputCriate = document.querySelector('.inputCriateSubmit');
inputCriate === null || inputCriate === void 0 ? void 0 : inputCriate.addEventListener('click', criateInput);
async function criateInput() {
    if (!inputCriateText.value) {
        return;
    }
    ;
    const date = {
        "name": inputCriateText.value,
        "color": inputCriateColor.value,
    };
    // console.log(document.querySelectorAll('.item-car'));
    if (document.querySelectorAll('.item-car').length < 7) {
        await interactionGarage_1.default.createCar(date).then((e) => {
            (0, createGameHtml_1.default)(inputCriateText.value, inputCriateColor.value, e.id);
        });
    }
    else {
        await interactionGarage_1.default.createCar(date);
    }
    inputCriateColor.value = '#000000';
    inputCriateText.value = '';
    (0, setNumberPage_1.default)();
    (0, setNumbarPage_1.default)();
}
const inputUpdateSubmit = document.querySelector('#inputUpdateSubmit');
inputUpdateSubmit === null || inputUpdateSubmit === void 0 ? void 0 : inputUpdateSubmit.addEventListener('click', inputUpdate);
function inputUpdate() {
    const itemActive = document.querySelector('.item-active');
    if (!inputUpdateText.value) {
        return;
    }
    ;
    itemActive.children[0].children[2].textContent = inputUpdateText === null || inputUpdateText === void 0 ? void 0 : inputUpdateText.value;
    const img = itemActive.children[2];
    img.style.fill = String(inputUpdateColor === null || inputUpdateColor === void 0 ? void 0 : inputUpdateColor.value);
    interactionGarage_1.default.updateCar({ "name": inputUpdateText === null || inputUpdateText === void 0 ? void 0 : inputUpdateText.value, "color": inputUpdateColor === null || inputUpdateColor === void 0 ? void 0 : inputUpdateColor.value, }, itemActive === null || itemActive === void 0 ? void 0 : itemActive.id);
    inputUpdateText.value = '';
    (0, removeItemActive_1.default)();
    (0, setDisabled_1.default)();
}
const buttonsBlock = document.querySelector('.buttons-block');
buttonsBlock === null || buttonsBlock === void 0 ? void 0 : buttonsBlock.addEventListener('click', managingAllCars);
function managingAllCars(e) {
    var _a, _b, _c;
    if (!(e.target instanceof HTMLElement || e.target instanceof HTMLButtonElement)) {
        return;
    }
    console.log(e.target);
    if (['button button__race'].includes((_a = e.target) === null || _a === void 0 ? void 0 : _a.className)) {
        (0, startAllCars_1.default)();
    }
    ;
    if (['button button__reset'].includes((_b = e.target) === null || _b === void 0 ? void 0 : _b.className)) {
    }
    ;
    if (['button button__gererate'].includes((_c = e.target) === null || _c === void 0 ? void 0 : _c.className)) {
    }
}
(0, pagination_1.default)();
(0, setNumbarPage_1.default)();
(0, createTable_1.default)();
const header = document.querySelector('.header');
header === null || header === void 0 ? void 0 : header.addEventListener('click', swopPage_1.default);
// interactionWinners.getWinners().then((date:object)=>console.log(date));
// interactionEngine.switchEngine(1,'drive').then((date:object)=>console.log(date));
// interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.deleteCar('/garage', 2).then((data:any) => {console.log(data)})
// interactionGarage.updateCar(carsObject, 1).then((data:any) => {console.log(data)})
// interactionGarage.getCars().then((data:any) => {console.log(data)})
// interactionCars.createCar('http://127.0.0.1:3000/garage', obj)
// getasd('http://127.0.0.1:3000/garage').then((data) => {console.log(data)})

})();

/******/ })()
;
//# sourceMappingURL=main.7924c76d522857b46b0f.js.map