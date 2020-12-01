(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colorFilters/glimgBrightnessFilter.js":
/*!***************************************************!*\
  !*** ./src/colorFilters/glimgBrightnessFilter.js ***!
  \***************************************************/
/*! exports provided: GLImgBrightnessFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgBrightnessFilter\", function() { return GLImgBrightnessFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgBrightnessFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float brightness;\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        gl_FragColor = vec4(textureColor.rgb+vec3(brightness), textureColor.a);\r\n      }\r\n\r\n    `;\r\n    this.flipY = -1.0;\r\n    this.brightness = 0.2;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'brightness', this.brightness);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgBrightnessFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgColormatrixFilter.js":
/*!****************************************************!*\
  !*** ./src/colorFilters/glimgColormatrixFilter.js ***!
  \****************************************************/
/*! exports provided: GLImgColormatrixFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgColormatrixFilter\", function() { return GLImgColormatrixFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgColormatrixFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp mat4 colorMatrix;\r\n      uniform lowp float intensity;\r\n  \r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        lowp vec4 outputColor = textureColor * colorMatrix;        \r\n        gl_FragColor = (intensity * outputColor) + ((1.0 - intensity) * textureColor);\r\n\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.colorMatrix =\r\n    [1, 0, 0, 0,\r\n     1, 1, 1, 0,\r\n     0, 1, 1, 0,\r\n     0, 0, 0, 1\r\n    ];\r\n    this.intensity = 0.5;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'intensity', this.intensity);\r\n    this.setUniformMatrix4fv(gl, glProgram, 'colorMatrix', this.colorMatrix);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgColormatrixFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgContrastFilter.js":
/*!*************************************************!*\
  !*** ./src/colorFilters/glimgContrastFilter.js ***!
  \*************************************************/
/*! exports provided: GLImgContrastFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgContrastFilter\", function() { return GLImgContrastFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgContrastFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float contrast;\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        gl_FragColor = vec4(((textureColor.rgb - vec3(0.5)) * contrast + vec3(0.5)), textureColor.a);\r\n\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.contrast = 2.0;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'contrast', this.contrast);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgContrastFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgExposureFilter.js":
/*!*************************************************!*\
  !*** ./src/colorFilters/glimgExposureFilter.js ***!
  \*************************************************/
/*! exports provided: GLImgExposureFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgExposureFilter\", function() { return GLImgExposureFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgExposureFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float exposure;\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        gl_FragColor = vec4(textureColor.rgb * pow(2.0, exposure), textureColor.a);\r\n\r\n      }\r\n\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.exposure = 1.0;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'exposure', this.exposure);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgExposureFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgGammaFilter.js":
/*!**********************************************!*\
  !*** ./src/colorFilters/glimgGammaFilter.js ***!
  \**********************************************/
/*! exports provided: GLImgGammaFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgGammaFilter\", function() { return GLImgGammaFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgGammaFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float gamma;\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\r\n        gl_FragColor = vec4(pow(textureColor.rgb, vec3(gamma)), textureColor.a);\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.gamma = 2.0;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'gamma', this.gamma);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgGammaFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgGrayscaleFilter.js":
/*!**************************************************!*\
  !*** ./src/colorFilters/glimgGrayscaleFilter.js ***!
  \**************************************************/
/*! exports provided: GLImgGrayscaleFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgGrayscaleFilter\", function() { return GLImgGrayscaleFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgGrayscaleFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      const highp vec3 W = vec3(0.2125, 0.7154, 0.0721);\r\n  \r\n      void main()\r\n      {\r\n          lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n          float luminance = dot(textureColor.rgb, W);\r\n          \r\n          gl_FragColor = vec4(vec3(luminance), textureColor.a);\r\n      }\r\n    `;\r\n    this.flipY = -1.0;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgGrayscaleFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgHighlightShadowFilter.js":
/*!********************************************************!*\
  !*** ./src/colorFilters/glimgHighlightShadowFilter.js ***!
  \********************************************************/
/*! exports provided: GLImgHighlightShadowFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgHighlightShadowFilter\", function() { return GLImgHighlightShadowFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgHighlightShadowFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float shadows;\r\n      uniform lowp float highlights;\r\n\r\n      const mediump vec3 luminanceWeighting = vec3(0.3, 0.3, 0.3);\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\t\r\n        mediump float luminance = dot(textureColor.rgb, luminanceWeighting);\r\n    \r\n        mediump float shadow = clamp((pow(luminance, 1.0/(shadows+1.0)) + (-0.76)*pow(luminance, 2.0/(shadows+1.0))) - luminance, 0.0, 1.0);\r\n        mediump float highlight = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-highlights)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-highlights)))) - luminance, -1.0, 0.0);\r\n        lowp vec3 result = vec3(0.0, 0.0, 0.0) + ((luminance + shadow + highlight) - 0.0) * ((textureColor.rgb - vec3(0.0, 0.0, 0.0))/(luminance - 0.0));\r\n      \r\n        gl_FragColor = vec4(result, textureColor.a);\r\n        \r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.shadows = 0.0;\r\n    this.highlights = 1.0;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'shadows', this.shadows);\r\n    this.setUniformValue1f(gl, glProgram, 'highlights', this.highlights);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgHighlightShadowFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgHueFilter.js":
/*!********************************************!*\
  !*** ./src/colorFilters/glimgHueFilter.js ***!
  \********************************************/
/*! exports provided: GLImgHueFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgHueFilter\", function() { return GLImgHueFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgHueFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n    \r\n      uniform mediump float hueAdjust;\r\n      const highp  vec4  kRGBToYPrime = vec4 (0.299, 0.587, 0.114, 0.0);\r\n      const highp  vec4  kRGBToI     = vec4 (0.595716, -0.274453, -0.321263, 0.0);\r\n      const highp  vec4  kRGBToQ     = vec4 (0.211456, -0.522591, 0.31135, 0.0);\r\n      \r\n      const highp  vec4  kYIQToR   = vec4 (1.0, 0.9563, 0.6210, 0.0);\r\n      const highp  vec4  kYIQToG   = vec4 (1.0, -0.2721, -0.6474, 0.0);\r\n      const highp  vec4  kYIQToB   = vec4 (1.0, -1.1070, 1.7046, 0.0);\r\n    \r\n\r\n      void main() {\r\n        highp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\r\n        // Convert to YIQ\r\n        highp float   YPrime  = dot (textureColor, kRGBToYPrime);\r\n        highp float   I      = dot (textureColor, kRGBToI);\r\n        highp float   Q      = dot (textureColor, kRGBToQ);\r\n        \r\n        // Calculate the hue and chroma\r\n        highp float   hue     = atan (Q, I);\r\n        highp float   chroma  = sqrt (I * I + Q * Q);\r\n        \r\n        // Make the user's adjustments\r\n        hue += (-hueAdjust); //why negative rotation?\r\n        \r\n        // Convert back to YIQ\r\n        Q = chroma * sin (hue);\r\n        I = chroma * cos (hue);\r\n        \r\n        // Convert back to RGB\r\n        highp vec4    yIQ   = vec4 (YPrime, I, Q, 0.0);\r\n        textureColor.r = dot (yIQ, kYIQToR);\r\n        textureColor.g = dot (yIQ, kYIQToG);\r\n        textureColor.b = dot (yIQ, kYIQToB);\r\n        \r\n        // Save the result\r\n        gl_FragColor = textureColor;\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.hueAdjust = 90;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'hueAdjust', this.hueAdjust);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgHueFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgLevelsFilter.js":
/*!***********************************************!*\
  !*** ./src/colorFilters/glimgLevelsFilter.js ***!
  \***********************************************/
/*! exports provided: GLImgLevelsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgLevelsFilter\", function() { return GLImgLevelsFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgLevelsFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n\r\n    /*\r\n    ** Gamma correction\r\n    ** Details: http://blog.mouaif.org/2009/01/22/photoshop-gamma-correction-shader/\r\n    */\r\n    #define GammaCorrection(color, gamma)\t\t\t\t\t\t\t\tpow(color, 1.0 / gamma)\r\n    \r\n    /*\r\n    ** Levels control (input (+gamma), output)\r\n    ** Details: http://blog.mouaif.org/2009/01/28/levels-control-shader/\r\n    */    \r\n    #define LevelsControlInputRange(color, minInput, maxInput)\t\t\t\tmin(max(color - minInput, vec3(0.0)) / (maxInput - minInput), vec3(1.0))\r\n    #define LevelsControlInput(color, minInput, gamma, maxInput)\t\t\t\tGammaCorrection(LevelsControlInputRange(color, minInput, maxInput), gamma)\r\n    #define LevelsControlOutputRange(color, minOutput, maxOutput) \t\t\tmix(minOutput, maxOutput, color)\r\n    #define LevelsControl(color, minInput, gamma, maxInput, minOutput, maxOutput) \tLevelsControlOutputRange(LevelsControlInput(color, minInput, gamma, maxInput), minOutput, maxOutput)\r\n   \r\n    precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform mediump vec3 levelMinimum;\r\n      uniform mediump vec3 levelMiddle;\r\n      uniform mediump vec3 levelMaximum;\r\n      uniform mediump vec3 minOutput;\r\n      uniform mediump vec3 maxOutput;\r\n     \r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        gl_FragColor = vec4(LevelsControl(textureColor.rgb, levelMinimum, levelMiddle, levelMaximum, minOutput, maxOutput), textureColor.a);\r\n      }\r\n    `;\r\n\r\n\r\n    this.flipY = -1.0;\r\n    this.levelMinimum = [0.1, 0.1, 0.1];\r\n    this.levelMaximum = [0.9, 0.9, 0.9];\r\n    this.levelMiddle = [0.3, 0.3, 0.3];\r\n    this.minOutput = [0.3, 0.3, 0.3];\r\n    this.maxOutput = [0.8, 0.8, 0.8];\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'gamma', this.gamma);\r\n    this.setUniformValue3fv(gl, glProgram, 'levelMiddle', this.levelMiddle);\r\n    this.setUniformValue3fv(gl, glProgram, 'levelMinimum', this.levelMinimum);\r\n    this.setUniformValue3fv(gl, glProgram, 'levelMaximum', this.levelMaximum);\r\n    this.setUniformValue3fv(gl, glProgram, 'minOutput', this.minOutput);\r\n    this.setUniformValue3fv(gl, glProgram, 'maxOutput', this.maxOutput);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgLevelsFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgRGBFilter.js":
/*!********************************************!*\
  !*** ./src/colorFilters/glimgRGBFilter.js ***!
  \********************************************/
/*! exports provided: GLImgRGBFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgRGBFilter\", function() { return GLImgRGBFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgRGBFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform highp float redAdjustment;\r\n      uniform highp float greenAdjustment;\r\n      uniform highp float blueAdjustment;\r\n     \r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n        gl_FragColor = vec4(textureColor.r * redAdjustment, textureColor.g * greenAdjustment, textureColor.b * blueAdjustment, textureColor.a);\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.redAdjustment = 0.9;\r\n    this.greenAdjustment = 0.1;\r\n    this.blueAdjustment = 0.1;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'redAdjustment', this.redAdjustment);\r\n    this.setUniformValue1f(gl, glProgram, 'greenAdjustment', this.greenAdjustment);\r\n    this.setUniformValue1f(gl, glProgram, 'blueAdjustment', this.blueAdjustment);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgRGBFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgSaturationFilter.js":
/*!***************************************************!*\
  !*** ./src/colorFilters/glimgSaturationFilter.js ***!
  \***************************************************/
/*! exports provided: GLImgSaturationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgSaturationFilter\", function() { return GLImgSaturationFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgSaturationFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float saturation;\r\n\r\n      // Values from \"Graphics Shaders: Theory and Practice\" by Bailey and Cunningham\r\n      const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\r\n        lowp float luminance = dot(textureColor.rgb, luminanceWeighting);\r\n        lowp vec3 greyScaleColor = vec3(luminance);\r\n \r\n        gl_FragColor = vec4(mix(greyScaleColor, textureColor.rgb, saturation), textureColor.a);\r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.saturation = 1.5;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'saturation', this.saturation);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgSaturationFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgTemperatureFilter.js":
/*!****************************************************!*\
  !*** ./src/colorFilters/glimgTemperatureFilter.js ***!
  \****************************************************/
/*! exports provided: GLImgTemperatureFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgTemperatureFilter\", function() { return GLImgTemperatureFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgTemperatureFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float temperature;\r\n\r\n      lowp float normTemperature = (temperature < 5000.0) ? (0.0004*(temperature-5000.0)) : (0.00006*(temperature-5000.0));\r\n      const lowp vec3 warmFilter = vec3(0.93, 0.54, 0.0);\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\t\r\n        lowp vec3 processed = vec3(\r\n          (textureColor.r < 0.5 ? (2.0 * textureColor.r * warmFilter.r) : (1.0 - 2.0 * (1.0 - textureColor.r) * (1.0 - warmFilter.r))), //adjusting temperature\r\n          (textureColor.g < 0.5 ? (2.0 * textureColor.g * warmFilter.g) : (1.0 - 2.0 * (1.0 - textureColor.g) * (1.0 - warmFilter.g))), \r\n          (textureColor.b < 0.5 ? (2.0 * textureColor.b * warmFilter.b) : (1.0 - 2.0 * (1.0 - textureColor.b) * (1.0 - warmFilter.b))));\r\n      \r\n        gl_FragColor = vec4(mix(textureColor.rgb, processed, normTemperature), textureColor.a);\r\n      \r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.temperature = 4000;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'temperature', this.temperature);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgTemperatureFilter.js?");

/***/ }),

/***/ "./src/colorFilters/glimgTintFilter.js":
/*!*********************************************!*\
  !*** ./src/colorFilters/glimgTintFilter.js ***!
  \*********************************************/
/*! exports provided: GLImgTintFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgTintFilter\", function() { return GLImgTintFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgTintFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n      uniform lowp float tint;\r\n\r\n      lowp float normTint = tint/100.0;\r\n\r\n      const mediump mat3 RGBtoYIQ = mat3(0.299, 0.587, 0.114, 0.596, -0.274, -0.322, 0.212, -0.523, 0.311);\r\n      const mediump mat3 YIQtoRGB = mat3(1.0, 0.956, 0.621, 1.0, -0.272, -0.647, 1.0, -1.105, 1.702);\r\n\r\n\r\n      void main() {\r\n        lowp vec4 textureColor = texture2D(textureID, textureCoordinate);\r\n\t\r\n        mediump vec3 yiq = RGBtoYIQ * textureColor.rgb; //adjusting tint\r\n        yiq.b = clamp(yiq.b + normTint*0.5226*0.1, -0.5226, 0.5226);\r\n        lowp vec3 rgb = YIQtoRGB * yiq;\r\n      \r\n        gl_FragColor = vec4(rgb, textureColor.a);\r\n      \r\n      }\r\n    `;\r\n\r\n    this.flipY = -1.0;\r\n    this.tint = 200;\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n    this.setUniformValue1f(gl, glProgram, 'tint', this.tint);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/colorFilters/glimgTintFilter.js?");

/***/ }),

/***/ "./src/glimg.js":
/*!**********************!*\
  !*** ./src/glimg.js ***!
  \**********************/
/*! exports provided: GLImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImage\", function() { return GLImage; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glimgFilter */ \"./src/glimgFilter.js\");\n\r\n \r\nclass GLImage {\r\n\r\n  constructor() {\r\n    this._canvas = document.createElement('canvas');\r\n\r\n    this._gl = this._canvas.getContext('webgl2');  \r\n    if(!this._gl) {\r\n      throw new Error('WebGL2 not supported');\r\n    }\r\n\r\n    this._filters = [];\r\n\r\n    this.defineUrlProperty();\r\n  }\r\n\r\n\r\n  addFilter(filter){\r\n    if(filter.isAssembeFilter){\r\n      var filters = filter.getAssemblingFilters();\r\n      for(let i=0; i<filters.length; ++i){\r\n        this.addFilter(filters[i]);\r\n      }\r\n    }else{\r\n      this._filters.push(filter);\r\n    }\r\n  }\r\n\r\n  defineUrlProperty(){\r\n    Object.defineProperty(this, 'url', {\r\n      get() {\r\n        return this._url;\r\n      },\r\n      set(url){\r\n        this._url = url;\r\n        const image = new Image();\r\n        image.onload = ()=> {\r\n          this.setupCanvasAndTexture(image);\r\n          this.setupFilterChainTextureFrameBuffers();\r\n          this.setupTempTextureFrameBuffers();\r\n\r\n          for(var i=0; i<this._filters.length; ++i){\r\n            this.drawTexture(this._filters[i]);\r\n          }\r\n          var lastFilter = new _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"]();\r\n          lastFilter.outputTextureId = null;\r\n          this.drawTexture(lastFilter);\r\n          this.onload();\r\n        };    \r\n        image.src = url;\r\n      }\r\n    });\r\n  }\r\n\r\n  setupCanvasAndTexture(image){\r\n    this._canvas.width = image.width;\r\n    this._canvas.height = image.height;\r\n    this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);\r\n\r\n    const level = 0;\r\n    const internalFormat = this._gl.RGBA;\r\n    const srcFormat = this._gl.RGBA;\r\n    const srcType = this._gl.UNSIGNED_BYTE;\r\n    this._texture = this._gl.createTexture();\r\n    this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);\r\n    this._gl.texImage2D(this._gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);\r\n    this._gl.generateMipmap(this._gl.TEXTURE_2D);\r\n  }\r\n\r\n  setupFilterChainTextureFrameBuffers(){\r\n    this._filterChainFramebufferTextures = [];\r\n    this._filterChainFramebuffers = [];\r\n    for (let i=0; i<2; ++i){\r\n      var texture = this._gl.createTexture();\r\n      this._filterChainFramebufferTextures.push(texture);\r\n      this._gl.bindTexture(this._gl.TEXTURE_2D, texture);\r\n      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._canvas.width, this._canvas.height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null);\r\n      this._gl.generateMipmap(this._gl.TEXTURE_2D);\r\n\r\n      var fbo = this._gl.createFramebuffer();\r\n      this._filterChainFramebuffers.push(fbo);\r\n      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, fbo);\r\n      this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, texture, 0);\r\n    }\r\n    this._activeFilterChainFrameBufferId = null;\r\n  }\r\n\r\n  //temp frame buffers for filters with multiple input textures\r\n  setupTempTextureFrameBuffers(){\r\n    this._tempFramebufferTextures = [];\r\n    this._tempFramebuffers = [];\r\n    for (let i=0; i<5; ++i){\r\n      var texture = this._gl.createTexture();\r\n      this._tempFramebufferTextures.push(texture);\r\n      this._gl.bindTexture(this._gl.TEXTURE_2D, texture);\r\n      this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._canvas.width, this._canvas.height, 0, this._gl.RGBA, this._gl.UNSIGNED_BYTE, null);\r\n      this._gl.generateMipmap(this._gl.TEXTURE_2D);\r\n\r\n      var fbo = this._gl.createFramebuffer();\r\n      this._tempFramebuffers.push(fbo);\r\n      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, fbo);\r\n      this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, texture, 0);\r\n    }\r\n  }\r\n\r\n  getImage() {\r\n    var image = new Image();\r\n    image.src = this._canvas.toDataURL();\r\n    return image;\r\n  }\r\n\r\n  getCanvas() {\r\n    return this._canvas;\r\n  }\r\n\r\n  setupShader(filter) {\r\n    if(this._activeVertexShader){\r\n      this._gl.detachShader(this._glProgram, this._activeVertexShader);\r\n      this._gl.deleteShader(this._activeVertexShader);\r\n    }\r\n\r\n    if(this._activeFragmentShader){\r\n      this._gl.detachShader(this._glProgram, this._activeFragmentShader);\r\n      this._gl.deleteShader(this._activeFragmentShader);\r\n    }\r\n    \r\n    if(this._glProgram){\r\n      this._gl.deleteProgram(this._glProgram);\r\n    }\r\n\r\n    this._glProgram = this._gl.createProgram();\r\n\r\n    const vertexShader = this._gl.createShader(this._gl.VERTEX_SHADER);\r\n    this._gl.shaderSource(vertexShader, filter.vertexShader);\r\n    this._gl.compileShader(vertexShader);\r\n  \r\n    const fragmentShader = this._gl.createShader(this._gl.FRAGMENT_SHADER);\r\n    this._gl.shaderSource(fragmentShader, filter.fragmentShader);\r\n    this._gl.compileShader(fragmentShader);\r\n\r\n\r\n    this._activeVertexShader = vertexShader;\r\n    this._gl.attachShader(this._glProgram, this._activeVertexShader);\r\n\r\n    this._activeFragmentShader = fragmentShader;\r\n    this._gl.attachShader(this._glProgram, this._activeFragmentShader);\r\n  \r\n    this._gl.linkProgram(this._glProgram);\r\n  }\r\n\r\n  bindShaderAttributes(filter){\r\n    filter.bindShaderAttributes(this._gl, this._glProgram);\r\n  }\r\n\r\n  drawTexture(filter){\r\n\r\n    //filter should have input textureid, and output textureid\r\n    this.bindInputTexture(filter);\r\n    this.bindOutputTexture(filter);\r\n\r\n    this._gl.viewport(0, 0, this._canvas.width, this._canvas.height);\r\n    this.setupShader(filter);\r\n    this.bindShaderAttributes(filter);\r\n    this._gl.drawArrays(this._gl.TRIANGLE_STRIP, 0, 4);\r\n  }\r\n\r\n  bindInputTexture(filter) {\r\n    //if input textureid is 0, then it is either _texture, or the activefilterChainBufferTexture\r\n    // else the input textures are a list of the tempBufferTexture, need to attach\r\n    if(filter.inputTextureId === 0){\r\n      this._gl.activeTexture(this._gl.TEXTURE0);\r\n      if(this._activeFilterChainFrameBufferId === null){\r\n        this._gl.bindTexture(this._gl.TEXTURE_2D, this._texture);\r\n      }else{\r\n        this._gl.bindTexture(this._gl.TEXTURE_2D, this._filterChainFramebufferTextures[this._activeFilterChainFrameBufferId]);\r\n      }\r\n    }else if(Array.isArray(filter.inputTextureId)){\r\n      // Todo: need to handle a list of inputTexture\r\n      for(var i=0; i<filter.inputTextureId.length; ++i){\r\n        this._gl.activeTexture(this._gl.TEXTURE0+filter.inputTextureId[i]);\r\n        this._gl.bindTexture(this._gl.TEXTURE_2D, this._tempFramebufferTextures[filter.inputTextureId[i]-filter.tempTextureIDOffset]);  \r\n      }\r\n    }else{\r\n      this._gl.activeTexture(this._gl.TEXTURE0+filter.inputTextureId);\r\n      this._gl.bindTexture(this._gl.TEXTURE_2D, this._tempFramebufferTextures[filter.inputTextureId-filter.tempTextureIDOffset]);\r\n    }\r\n\r\n  }\r\n\r\n  bindOutputTexture(filter) {\r\n\r\n    //filter has outputTextureID\r\n    //if outputTextureId is null, then render to canvas\r\n    //if outputTextureId is 0, then render to filterChainFrameBuffer\r\n    //if outputTextureId is larger than 0, then reder to tempBufferTexture\r\n    if(filter.outputTextureId === null){\r\n      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);\r\n    }else if(filter.outputTextureId === 0){\r\n      if(this._activeFilterChainFrameBufferId === null){\r\n        this._activeFilterChainFrameBufferId = 0;\r\n      }else{\r\n        this._activeFilterChainFrameBufferId = (this._activeFilterChainFrameBufferId + 1) % 2;\r\n      }\r\n      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._filterChainFramebuffers[this._activeFilterChainFrameBufferId]);\r\n    }else{\r\n      this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._tempFramebuffers[filter.outputTextureId-filter.tempTextureIDOffset]);\r\n    }\r\n\r\n\r\n\r\n  }\r\n\r\n}\r\n\r\nGLImage.prototype.onload = () => {};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/glimg.js?");

/***/ }),

/***/ "./src/glimg3x3ConvFilter.js":
/*!***********************************!*\
  !*** ./src/glimg3x3ConvFilter.js ***!
  \***********************************/
/*! exports provided: GLImg3x3ConvFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImg3x3ConvFilter\", function() { return GLImg3x3ConvFilter; });\n/* harmony import */ var _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glimg3x3Filter */ \"./src/glimg3x3Filter.js\");\n\r\nclass GLImg3x3ConvFilter extends _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3Filter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n\r\n      uniform sampler2D textureID;\r\n      \r\n      uniform mediump mat3 convolutionMatrix;\r\n      \r\n      varying vec2 textureCoordinate;\r\n      varying vec2 leftTextureCoordinate;\r\n      varying vec2 rightTextureCoordinate;\r\n      \r\n      varying vec2 topTextureCoordinate;\r\n      varying vec2 topLeftTextureCoordinate;\r\n      varying vec2 topRightTextureCoordinate;\r\n      \r\n      varying vec2 bottomTextureCoordinate;\r\n      varying vec2 bottomLeftTextureCoordinate;\r\n      varying vec2 bottomRightTextureCoordinate;\r\n      \r\n      void main()\r\n      {\r\n          mediump vec3 bottomColor = texture2D(textureID, bottomTextureCoordinate).rgb;\r\n          mediump vec3 bottomLeftColor = texture2D(textureID, bottomLeftTextureCoordinate).rgb;\r\n          mediump vec3 bottomRightColor = texture2D(textureID, bottomRightTextureCoordinate).rgb;\r\n          mediump vec4 centerColor = texture2D(textureID, textureCoordinate);\r\n          mediump vec3 leftColor = texture2D(textureID, leftTextureCoordinate).rgb;\r\n          mediump vec3 rightColor = texture2D(textureID, rightTextureCoordinate).rgb;\r\n          mediump vec3 topColor = texture2D(textureID, topTextureCoordinate).rgb;\r\n          mediump vec3 topRightColor = texture2D(textureID, topRightTextureCoordinate).rgb;\r\n          mediump vec3 topLeftColor = texture2D(textureID, topLeftTextureCoordinate).rgb;\r\n    \r\n          mediump vec3 resultColor = topLeftColor * convolutionMatrix[0][0] + topColor * convolutionMatrix[0][1] + topRightColor * convolutionMatrix[0][2];\r\n          resultColor += leftColor * convolutionMatrix[1][0] + centerColor.rgb * convolutionMatrix[1][1] + rightColor * convolutionMatrix[1][2];\r\n          resultColor += bottomLeftColor * convolutionMatrix[2][0] + bottomColor * convolutionMatrix[2][1] + bottomRightColor * convolutionMatrix[2][2];\r\n    \r\n          gl_FragColor = vec4(resultColor, centerColor.a);\r\n      }\r\n    `;\r\n    this.convMatrix =  [\r\n      0.0, 0.0, 0.0,\r\n      0.0, 1.0, 0.0,\r\n      0.0, 0.0, 0.0,\r\n    ];\r\n  }\r\n\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n\r\n    const convMatrixData = new Float32Array(this.convMatrix);\r\n  \r\n    const texelWidth = 1.0/gl.canvas.width;\r\n    const texelHeight = 1.0/gl.canvas.height;\r\n      \r\n    this.setUniformValue1f(gl, glProgram, 'texelWidth', texelWidth);\r\n    this.setUniformValue1f(gl, glProgram, 'texelHeight', texelHeight);\r\n    this.setUniformMatrix3fv(gl, glProgram, 'convolutionMatrix', convMatrixData);\r\n  }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/glimg3x3ConvFilter.js?");

/***/ }),

/***/ "./src/glimg3x3Filter.js":
/*!*******************************!*\
  !*** ./src/glimg3x3Filter.js ***!
  \*******************************/
/*! exports provided: GLImg3x3Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImg3x3Filter\", function() { return GLImg3x3Filter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImg3x3Filter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n  constructor() {\r\n    super();\r\n    this.vertexShader = `\r\n      attribute vec3 inputPosition;\r\n      attribute vec2 inputTextureCoordinate;\r\n      \r\n      uniform float texelWidth;\r\n      uniform float texelHeight; \r\n\r\n      uniform float flipY;\r\n      \r\n      varying vec2 textureCoordinate;\r\n      varying vec2 leftTextureCoordinate;\r\n      varying vec2 rightTextureCoordinate;\r\n      \r\n      varying vec2 topTextureCoordinate;\r\n      varying vec2 topLeftTextureCoordinate;\r\n      varying vec2 topRightTextureCoordinate;\r\n      \r\n      varying vec2 bottomTextureCoordinate;\r\n      varying vec2 bottomLeftTextureCoordinate;\r\n      varying vec2 bottomRightTextureCoordinate;\r\n      \r\n      void main()\r\n      {\r\n        gl_Position = vec4(inputPosition * vec3(1, flipY, 1), 1);\r\n        \r\n        vec2 widthStep = vec2(texelWidth, 0.0);\r\n        vec2 heightStep = vec2(0.0, texelHeight);\r\n        vec2 widthHeightStep = vec2(texelWidth, texelHeight);\r\n        vec2 widthNegativeHeightStep = vec2(texelWidth, -texelHeight);\r\n        \r\n        textureCoordinate = inputTextureCoordinate;\r\n        leftTextureCoordinate = inputTextureCoordinate - widthStep;\r\n        rightTextureCoordinate = inputTextureCoordinate + widthStep;\r\n        \r\n        topTextureCoordinate = inputTextureCoordinate - heightStep;\r\n        topLeftTextureCoordinate = inputTextureCoordinate - widthHeightStep;\r\n        topRightTextureCoordinate = inputTextureCoordinate + widthNegativeHeightStep;\r\n        \r\n        bottomTextureCoordinate = inputTextureCoordinate + heightStep;\r\n        bottomLeftTextureCoordinate = inputTextureCoordinate - widthNegativeHeightStep;\r\n        bottomRightTextureCoordinate = inputTextureCoordinate + widthHeightStep;\r\n      }\r\n    `;\r\n    this.flipY = -1.0;\r\n  }\r\n\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n\r\n    const convMatrixData = new Float32Array(this.convMatrix);\r\n  \r\n    const texelWidth = 1.0/gl.canvas.width;\r\n    const texelHeight = 1.0/gl.canvas.height;\r\n      \r\n    this.setUniformValue1f(gl, glProgram, 'texelWidth', texelWidth);\r\n    this.setUniformValue1f(gl, glProgram, 'texelHeight', texelHeight);\r\n    this.setUniformMatrix3fv(gl, glProgram, 'convolutionMatrix', convMatrixData);\r\n  }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/glimg3x3Filter.js?");

/***/ }),

/***/ "./src/glimgFilter.js":
/*!****************************!*\
  !*** ./src/glimgFilter.js ***!
  \****************************/
/*! exports provided: GLImgFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgFilter\", function() { return GLImgFilter; });\nclass GLImgFilter {\r\n  constructor() {\r\n    this.vertexShader = `\r\n      precision mediump float;\r\n\r\n      attribute vec3 inputPosition;\r\n      attribute vec2 inputTextureCoordinate;\r\n\r\n      uniform float flipY;\r\n    \r\n      varying vec2 textureCoordinate;\r\n\r\n      void main() {\r\n        gl_Position = vec4(inputPosition * vec3(1, flipY, 1), 1);\r\n        textureCoordinate = inputTextureCoordinate;\r\n      }\r\n    `;\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      varying vec2 textureCoordinate;\r\n      uniform sampler2D textureID;\r\n\r\n      void main() {\r\n        gl_FragColor = texture2D(textureID, textureCoordinate);\r\n      }\r\n    `;\r\n\r\n    this.flipY = 1.0;\r\n    this.inputTextureId = 0;\r\n    this.outputTextureId = 0;\r\n    this.tempTextureIDOffset = 5;\r\n  }\r\n\r\n  bindDataToAttribute(gl, glProgram, attri, data, size) {\r\n    const dataBuffer = gl.createBuffer();\r\n    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuffer);\r\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);\r\n\r\n    const attriLocation = gl.getAttribLocation(glProgram, attri);\r\n    gl.enableVertexAttribArray(attriLocation);\r\n    gl.bindBuffer(gl.ARRAY_BUFFER, dataBuffer);\r\n    gl.vertexAttribPointer(attriLocation, size, gl.FLOAT, false, 0, 0);\r\n  }\r\n\r\n  setUniformValue1i(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniform1i(uniformLocation, data);  \r\n  }\r\n\r\n  setUniformValue1f(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniform1f(uniformLocation, data);  \r\n  }\r\n\r\n  setUniformValue1fv(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniform1fv(uniformLocation, data);  \r\n  }\r\n\r\n  setUniformValue3fv(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniform3fv(uniformLocation, data);  \r\n  }\r\n\r\n  setUniformMatrix3fv(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniformMatrix3fv(uniformLocation, false, data); \r\n  }\r\n\r\n  setUniformMatrix4fv(gl, glProgram, attri, data) {\r\n    const uniformLocation = gl.getUniformLocation(glProgram, attri);\r\n    gl.useProgram(glProgram);\r\n    gl.uniformMatrix4fv(uniformLocation, false, data); \r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    const vertexData = [\r\n      -1.0, -1.0, 0.0,\r\n      1.0, -1.0, 0.0,\r\n      -1.0, 1.0, 0.0,\r\n      1.0, 1.0, 0.0,\r\n    ];\r\n  \r\n    const textureCoordinateData = [\r\n      0.0, 1.0,\r\n      1.0, 1.0,\r\n      0.0, 0.0,\r\n      1.0, 0.0,\r\n    ]\r\n  \r\n    this.bindDataToAttribute(gl, glProgram, 'inputPosition', vertexData, 3);\r\n    this.bindDataToAttribute(gl, glProgram, 'inputTextureCoordinate', textureCoordinateData, 2);\r\n    this.setUniformValue1f(gl, glProgram, 'flipY', this.flipY);\r\n    this.setUniformValue1i(gl, glProgram, 'textureID', this.inputTextureId);\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/glimgFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgAverageColorFilter.js":
/*!********************************************************!*\
  !*** ./src/imageProcessing/glimgAverageColorFilter.js ***!
  \********************************************************/
/*! exports provided: GLImgAverageColorFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgAverageColorFilter\", function() { return GLImgAverageColorFilter; });\n/* harmony import */ var _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimg3x3Filter */ \"./src/glimg3x3Filter.js\");\n\r\n\r\nclass GLImgAverageColorFilter extends _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3Filter\"] {\r\n\r\n  constructor() {\r\n    super();\r\n\r\n\r\n    this.fragmentShader = `\r\n      precision highp float;\r\n      uniform sampler2D textureID;\r\n      \r\n      varying vec2 textureCoordinate;\r\n      varying vec2 leftTextureCoordinate;\r\n      varying vec2 rightTextureCoordinate;\r\n      \r\n      varying vec2 topTextureCoordinate;\r\n      varying vec2 topLeftTextureCoordinate;\r\n      varying vec2 topRightTextureCoordinate;\r\n      \r\n      varying vec2 bottomTextureCoordinate;\r\n      varying vec2 bottomLeftTextureCoordinate;\r\n      varying vec2 bottomRightTextureCoordinate;\r\n\r\n      \r\n      void main()\r\n      {\r\n          highp vec4 topLeftColor = texture2D(textureID, topLeftTextureCoordinate);\r\n          highp vec4 topRightColor = texture2D(textureID, topRightTextureCoordinate);\r\n          highp vec4 bottomLeftColor = texture2D(textureID, bottomLeftTextureCoordinate);\r\n          highp vec4 bottomRightColor = texture2D(textureID, bottomRightTextureCoordinate);\r\n          \r\n          gl_FragColor = 0.25 * (topLeftColor + topRightColor + bottomLeftColor + bottomRightColor);\r\n      }\r\n    `;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgAverageColorFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgEmbossFilter.js":
/*!**************************************************!*\
  !*** ./src/imageProcessing/glimgEmbossFilter.js ***!
  \**************************************************/
/*! exports provided: GLImgEmbossFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgEmbossFilter\", function() { return GLImgEmbossFilter; });\n/* harmony import */ var _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimg3x3ConvFilter */ \"./src/glimg3x3ConvFilter.js\");\n\r\n\r\nclass GLImgEmbossFilter extends _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3ConvFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.convMatrix = [\r\n      -2.0, -1.0, 0.0,\r\n      -1.0, 1.0, 1.0,\r\n      0.0, 1.0, 2.0,\r\n    ]\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgEmbossFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgGradientXFilter.js":
/*!*****************************************************!*\
  !*** ./src/imageProcessing/glimgGradientXFilter.js ***!
  \*****************************************************/
/*! exports provided: GLImgGradientXFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgGradientXFilter\", function() { return GLImgGradientXFilter; });\n/* harmony import */ var _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimg3x3ConvFilter */ \"./src/glimg3x3ConvFilter.js\");\n\r\n\r\nclass GLImgGradientXFilter extends _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3ConvFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.convMatrix = [\r\n      1.0, 0.0, -1.0,\r\n      2.0, 0.0, -2.0,\r\n      1.0, 0.0, -1.0,\r\n    ]\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgGradientXFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgGradientYFilter.js":
/*!*****************************************************!*\
  !*** ./src/imageProcessing/glimgGradientYFilter.js ***!
  \*****************************************************/
/*! exports provided: GLImgGradientYFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgGradientYFilter\", function() { return GLImgGradientYFilter; });\n/* harmony import */ var _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimg3x3ConvFilter */ \"./src/glimg3x3ConvFilter.js\");\n\r\n\r\nclass GLImgGradientYFilter extends _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3ConvFilter\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.convMatrix = [\r\n      1.0, 2.0, 1.0,\r\n      0.0, 0.0, 0.0,\r\n      -1.0, -2.0, -1.0,\r\n    ]\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgGradientYFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgMedianFilter.js":
/*!**************************************************!*\
  !*** ./src/imageProcessing/glimgMedianFilter.js ***!
  \**************************************************/
/*! exports provided: GLImgMedianFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgMedianFilter\", function() { return GLImgMedianFilter; });\n/* harmony import */ var _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimg3x3Filter */ \"./src/glimg3x3Filter.js\");\n/*\r\n 3x3 median filter, adapted from \"A Fast, Small-Radius GPU Median Filter\" by Morgan McGuire in ShaderX6\r\n http://graphics.cs.williams.edu/papers/MedianShaderX6/\r\n \r\n Morgan McGuire and Kyle Whitson\r\n Williams College\r\n \r\n Register allocation tips by Victor Huang Xiaohuang\r\n University of Illinois at Urbana-Champaign\r\n \r\n http://graphics.cs.williams.edu\r\n \r\n \r\n Copyright (c) Morgan McGuire and Williams College, 2006\r\n All rights reserved.\r\n \r\n Redistribution and use in source and binary forms, with or without\r\n modification, are permitted provided that the following conditions are\r\n met:\r\n \r\n Redistributions of source code must retain the above copyright notice,\r\n this list of conditions and the following disclaimer.\r\n \r\n Redistributions in binary form must reproduce the above copyright\r\n notice, this list of conditions and the following disclaimer in the\r\n documentation and/or other materials provided with the distribution.\r\n \r\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\r\n \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\r\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\r\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\r\n HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\r\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\r\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\r\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\r\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\r\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\r\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\r\n */\r\n\r\n\r\nclass GLImgMedianFilter extends _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_0__[\"GLImg3x3Filter\"] {\r\n\r\n    constructor() {\r\n      super();\r\n\r\n      this.fragmentShader = `\r\n\r\n        precision highp float;\r\n  \r\n        varying vec2 textureCoordinate;\r\n        varying vec2 leftTextureCoordinate;\r\n        varying vec2 rightTextureCoordinate;\r\n        \r\n        varying vec2 topTextureCoordinate;\r\n        varying vec2 topLeftTextureCoordinate;\r\n        varying vec2 topRightTextureCoordinate;\r\n        \r\n        varying vec2 bottomTextureCoordinate;\r\n        varying vec2 bottomLeftTextureCoordinate;\r\n        varying vec2 bottomRightTextureCoordinate;\r\n        \r\n        uniform sampler2D textureID;\r\n        \r\n        #define s2(a, b)\t\t\t\ttemp = a; a = min(a, b); b = max(temp, b);\r\n        #define mn3(a, b, c)\t\t\ts2(a, b); s2(a, c);\r\n        #define mx3(a, b, c)\t\t\ts2(b, c); s2(a, c);\r\n        \r\n        #define mnmx3(a, b, c)\t\t\tmx3(a, b, c); s2(a, b);                                   // 3 exchanges\r\n        #define mnmx4(a, b, c, d)\t\ts2(a, b); s2(c, d); s2(a, c); s2(b, d);                   // 4 exchanges\r\n        #define mnmx5(a, b, c, d, e)\ts2(a, b); s2(c, d); mn3(a, c, e); mx3(b, d, e);           // 6 exchanges\r\n        #define mnmx6(a, b, c, d, e, f) s2(a, d); s2(b, e); s2(c, f); mn3(a, b, c); mx3(d, e, f); // 7 exchanges\r\n      \r\n        void main()\r\n        {\r\n          vec3 v[6];\r\n    \r\n          v[0] = texture2D(textureID, bottomLeftTextureCoordinate).rgb;\r\n          v[1] = texture2D(textureID, topRightTextureCoordinate).rgb;\r\n          v[2] = texture2D(textureID, topLeftTextureCoordinate).rgb;\r\n          v[3] = texture2D(textureID, bottomRightTextureCoordinate).rgb;\r\n          v[4] = texture2D(textureID, leftTextureCoordinate).rgb;\r\n          v[5] = texture2D(textureID, rightTextureCoordinate).rgb;\r\n\r\n          vec3 temp;\r\n      \r\n          mnmx6(v[0], v[1], v[2], v[3], v[4], v[5]);\r\n          \r\n          v[5] = texture2D(textureID, bottomTextureCoordinate).rgb;\r\n                      \r\n          mnmx5(v[1], v[2], v[3], v[4], v[5]);\r\n                      \r\n          v[5] = texture2D(textureID, topTextureCoordinate).rgb;\r\n                                    \r\n          mnmx4(v[2], v[3], v[4], v[5]);\r\n                                    \r\n          v[5] = texture2D(textureID, textureCoordinate).rgb;\r\n                                                \r\n          mnmx3(v[3], v[4], v[5]);\r\n        \r\n          gl_FragColor = vec4(v[4], 1.0);\r\n        }\r\n      `;\r\n    }\r\n }\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgMedianFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgNormalFilter.js":
/*!**************************************************!*\
  !*** ./src/imageProcessing/glimgNormalFilter.js ***!
  \**************************************************/
/*! exports provided: GLImgNormalFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgNormalFilter\", function() { return GLImgNormalFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n\r\n\r\nclass GLImgNormalFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"] {\r\n\r\n  constructor(){\r\n    super();\r\n\r\n    this.fragmentShader = `\r\n    precision highp float;\r\n    varying vec2 textureCoordinate;\r\n    uniform sampler2D textureID1;\r\n    uniform sampler2D textureID2;\r\n    \r\n\r\n    void main()\r\n    {\r\n        lowp vec4 textureColor1 = texture2D(textureID1, textureCoordinate);\r\n        lowp vec4 textureColor2 = texture2D(textureID2, textureCoordinate);\r\n        \r\n        gl_FragColor = vec4(sqrt(pow(textureColor1.rgb, vec3(2)) + pow(textureColor2.rgb, vec3(2))), textureColor1.a);\r\n    }\r\n  `;\r\n  this.flipY = -1.0;\r\n\r\n  }\r\n\r\n  bindShaderAttributes(gl, glProgram){  \r\n    super.bindShaderAttributes(gl, glProgram);\r\n\r\n    this.setUniformValue1i(gl, glProgram, 'textureID1', this.inputTextureId[0]);\r\n    this.setUniformValue1i(gl, glProgram, 'textureID2', this.inputTextureId[1]);\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgNormalFilter.js?");

/***/ }),

/***/ "./src/imageProcessing/glimgSobelEdgeFilter.js":
/*!*****************************************************!*\
  !*** ./src/imageProcessing/glimgSobelEdgeFilter.js ***!
  \*****************************************************/
/*! exports provided: GLImgSobelEdgeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLImgSobelEdgeFilter\", function() { return GLImgSobelEdgeFilter; });\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glimgFilter */ \"./src/glimgFilter.js\");\n/* harmony import */ var _glimgGradientXFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glimgGradientXFilter */ \"./src/imageProcessing/glimgGradientXFilter.js\");\n/* harmony import */ var _glimgGradientYFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glimgGradientYFilter */ \"./src/imageProcessing/glimgGradientYFilter.js\");\n/* harmony import */ var _colorFilters_glimgGrayscaleFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colorFilters/glimgGrayscaleFilter */ \"./src/colorFilters/glimgGrayscaleFilter.js\");\n/* harmony import */ var _glimgNormalFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glimgNormalFilter */ \"./src/imageProcessing/glimgNormalFilter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GLImgSobelEdgeFilter extends _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"]{\r\n  constructor() {\r\n    super();\r\n    this.isAssembeFilter = true;\r\n  }\r\n\r\n  getAssemblingFilters(){\r\n    var grayscaleFilter = new _colorFilters_glimgGrayscaleFilter__WEBPACK_IMPORTED_MODULE_3__[\"GLImgGrayscaleFilter\"]();\r\n    grayscaleFilter.inputTextureId = 0;\r\n    grayscaleFilter.outputTextureId = 0;\r\n    var gradientXFilter = new _glimgGradientXFilter__WEBPACK_IMPORTED_MODULE_1__[\"GLImgGradientXFilter\"]();\r\n    gradientXFilter.inputTextureId = 0;\r\n    gradientXFilter.outputTextureId = this.tempTextureIDOffset;\r\n    var gradientYFilter = new _glimgGradientYFilter__WEBPACK_IMPORTED_MODULE_2__[\"GLImgGradientYFilter\"]();\r\n    gradientYFilter.inputTextureId = 0;\r\n    gradientYFilter.outputTextureId = this.tempTextureIDOffset+1;\r\n    var normalFilter = new _glimgNormalFilter__WEBPACK_IMPORTED_MODULE_4__[\"GLImgNormalFilter\"]();\r\n    normalFilter.inputTextureId = [this.tempTextureIDOffset, this.tempTextureIDOffset+1];\r\n    normalFilter.outputTextureId = 0;\r\n\r\n    return [\r\n      grayscaleFilter,\r\n      gradientXFilter,\r\n      gradientYFilter,\r\n      normalFilter,\r\n    ];\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/imageProcessing/glimgSobelEdgeFilter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GLImgFilter, GLImgBrightnessFilter, GLImgContrastFilter, GLImgSaturationFilter, GLImgGammaFilter, GLImgLevelsFilter, GLImgColormatrixFilter, GLImgRGBFilter, GLImgHueFilter, GLImgTintFilter, GLImgTemperatureFilter, GLImgHighlightShadowFilter, GLImgExposureFilter, GLImg3x3Filter, GLImg3x3ConvFilter, GLImgAverageColorFilter, GLImgEmbossFilter, GLImgMedianFilter, GLImgGradientXFilter, GLImgGradientYFilter, GLImgNormalFilter, GLImgSobelEdgeFilter, GLImgGrayscaleFilter, GLImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _glimgFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glimgFilter */ \"./src/glimgFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgFilter\", function() { return _glimgFilter__WEBPACK_IMPORTED_MODULE_0__[\"GLImgFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgBrightnessFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorFilters/glimgBrightnessFilter */ \"./src/colorFilters/glimgBrightnessFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgBrightnessFilter\", function() { return _colorFilters_glimgBrightnessFilter__WEBPACK_IMPORTED_MODULE_1__[\"GLImgBrightnessFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgContrastFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorFilters/glimgContrastFilter */ \"./src/colorFilters/glimgContrastFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgContrastFilter\", function() { return _colorFilters_glimgContrastFilter__WEBPACK_IMPORTED_MODULE_2__[\"GLImgContrastFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgSaturationFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorFilters/glimgSaturationFilter */ \"./src/colorFilters/glimgSaturationFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgSaturationFilter\", function() { return _colorFilters_glimgSaturationFilter__WEBPACK_IMPORTED_MODULE_3__[\"GLImgSaturationFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgGammaFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorFilters/glimgGammaFilter */ \"./src/colorFilters/glimgGammaFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgGammaFilter\", function() { return _colorFilters_glimgGammaFilter__WEBPACK_IMPORTED_MODULE_4__[\"GLImgGammaFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgLevelsFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorFilters/glimgLevelsFilter */ \"./src/colorFilters/glimgLevelsFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgLevelsFilter\", function() { return _colorFilters_glimgLevelsFilter__WEBPACK_IMPORTED_MODULE_5__[\"GLImgLevelsFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgColormatrixFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorFilters/glimgColormatrixFilter */ \"./src/colorFilters/glimgColormatrixFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgColormatrixFilter\", function() { return _colorFilters_glimgColormatrixFilter__WEBPACK_IMPORTED_MODULE_6__[\"GLImgColormatrixFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgRGBFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colorFilters/glimgRGBFilter */ \"./src/colorFilters/glimgRGBFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgRGBFilter\", function() { return _colorFilters_glimgRGBFilter__WEBPACK_IMPORTED_MODULE_7__[\"GLImgRGBFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgHueFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colorFilters/glimgHueFilter */ \"./src/colorFilters/glimgHueFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgHueFilter\", function() { return _colorFilters_glimgHueFilter__WEBPACK_IMPORTED_MODULE_8__[\"GLImgHueFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgTintFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./colorFilters/glimgTintFilter */ \"./src/colorFilters/glimgTintFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgTintFilter\", function() { return _colorFilters_glimgTintFilter__WEBPACK_IMPORTED_MODULE_9__[\"GLImgTintFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgTemperatureFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colorFilters/glimgTemperatureFilter */ \"./src/colorFilters/glimgTemperatureFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgTemperatureFilter\", function() { return _colorFilters_glimgTemperatureFilter__WEBPACK_IMPORTED_MODULE_10__[\"GLImgTemperatureFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgHighlightShadowFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colorFilters/glimgHighlightShadowFilter */ \"./src/colorFilters/glimgHighlightShadowFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgHighlightShadowFilter\", function() { return _colorFilters_glimgHighlightShadowFilter__WEBPACK_IMPORTED_MODULE_11__[\"GLImgHighlightShadowFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgExposureFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colorFilters/glimgExposureFilter */ \"./src/colorFilters/glimgExposureFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgExposureFilter\", function() { return _colorFilters_glimgExposureFilter__WEBPACK_IMPORTED_MODULE_12__[\"GLImgExposureFilter\"]; });\n\n/* harmony import */ var _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glimg3x3Filter */ \"./src/glimg3x3Filter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImg3x3Filter\", function() { return _glimg3x3Filter__WEBPACK_IMPORTED_MODULE_13__[\"GLImg3x3Filter\"]; });\n\n/* harmony import */ var _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./glimg3x3ConvFilter */ \"./src/glimg3x3ConvFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImg3x3ConvFilter\", function() { return _glimg3x3ConvFilter__WEBPACK_IMPORTED_MODULE_14__[\"GLImg3x3ConvFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgAverageColorFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./imageProcessing/glimgAverageColorFilter */ \"./src/imageProcessing/glimgAverageColorFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgAverageColorFilter\", function() { return _imageProcessing_glimgAverageColorFilter__WEBPACK_IMPORTED_MODULE_15__[\"GLImgAverageColorFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgEmbossFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./imageProcessing/glimgEmbossFilter */ \"./src/imageProcessing/glimgEmbossFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgEmbossFilter\", function() { return _imageProcessing_glimgEmbossFilter__WEBPACK_IMPORTED_MODULE_16__[\"GLImgEmbossFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgMedianFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./imageProcessing/glimgMedianFilter */ \"./src/imageProcessing/glimgMedianFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgMedianFilter\", function() { return _imageProcessing_glimgMedianFilter__WEBPACK_IMPORTED_MODULE_17__[\"GLImgMedianFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgGradientXFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./imageProcessing/glimgGradientXFilter */ \"./src/imageProcessing/glimgGradientXFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgGradientXFilter\", function() { return _imageProcessing_glimgGradientXFilter__WEBPACK_IMPORTED_MODULE_18__[\"GLImgGradientXFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgGradientYFilter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./imageProcessing/glimgGradientYFilter */ \"./src/imageProcessing/glimgGradientYFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgGradientYFilter\", function() { return _imageProcessing_glimgGradientYFilter__WEBPACK_IMPORTED_MODULE_19__[\"GLImgGradientYFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgNormalFilter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./imageProcessing/glimgNormalFilter */ \"./src/imageProcessing/glimgNormalFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgNormalFilter\", function() { return _imageProcessing_glimgNormalFilter__WEBPACK_IMPORTED_MODULE_20__[\"GLImgNormalFilter\"]; });\n\n/* harmony import */ var _imageProcessing_glimgSobelEdgeFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./imageProcessing/glimgSobelEdgeFilter */ \"./src/imageProcessing/glimgSobelEdgeFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgSobelEdgeFilter\", function() { return _imageProcessing_glimgSobelEdgeFilter__WEBPACK_IMPORTED_MODULE_21__[\"GLImgSobelEdgeFilter\"]; });\n\n/* harmony import */ var _colorFilters_glimgGrayscaleFilter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./colorFilters/glimgGrayscaleFilter */ \"./src/colorFilters/glimgGrayscaleFilter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImgGrayscaleFilter\", function() { return _colorFilters_glimgGrayscaleFilter__WEBPACK_IMPORTED_MODULE_22__[\"GLImgGrayscaleFilter\"]; });\n\n/* harmony import */ var _glimg_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./glimg.js */ \"./src/glimg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GLImage\", function() { return _glimg_js__WEBPACK_IMPORTED_MODULE_23__[\"GLImage\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});