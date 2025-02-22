"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-plugin-easing-quad";
exports.ids = ["vendor-chunks/tsparticles-plugin-easing-quad"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsparticles-plugin-easing-quad/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadEasingQuadPlugin: () => (/* binding */ loadEasingQuadPlugin)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nasync function loadEasingQuadPlugin() {\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-quad\", (value) => value ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-out-quad\", (value) => 1 - (1 - value) ** 2);\n    (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.addEasing)(\"ease-in-out-quad\", (value) => (value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcGx1Z2luLWVhc2luZy1xdWFkL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQztBQUN4QztBQUNQLElBQUksNkRBQVM7QUFDYixJQUFJLDZEQUFTO0FBQ2IsSUFBSSw2REFBUztBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5leHQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcGx1Z2luLWVhc2luZy1xdWFkL2VzbS9pbmRleC5qcz81ODlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEVhc2luZyB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRWFzaW5nUXVhZFBsdWdpbigpIHtcbiAgICBhZGRFYXNpbmcoXCJlYXNlLWluLXF1YWRcIiwgKHZhbHVlKSA9PiB2YWx1ZSAqKiAyKTtcbiAgICBhZGRFYXNpbmcoXCJlYXNlLW91dC1xdWFkXCIsICh2YWx1ZSkgPT4gMSAtICgxIC0gdmFsdWUpICoqIDIpO1xuICAgIGFkZEVhc2luZyhcImVhc2UtaW4tb3V0LXF1YWRcIiwgKHZhbHVlKSA9PiAodmFsdWUgPCAwLjUgPyAyICogdmFsdWUgKiogMiA6IDEgLSAoLTIgKiB2YWx1ZSArIDIpICoqIDIgLyAyKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-plugin-easing-quad/esm/index.js\n");

/***/ })

};
;