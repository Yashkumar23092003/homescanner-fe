"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5leHQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanM/ZDE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaXhGYWN0b3IgPSBNYXRoLnNxcnQoMik7XG5leHBvcnQgY2xhc3MgU3F1YXJlRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3QgZml4ZWRSYWRpdXMgPSByYWRpdXMgLyBmaXhGYWN0b3IsIGZpeGVkRGlhbWV0ZXIgPSBmaXhlZFJhZGl1cyAqIDI7XG4gICAgICAgIGNvbnRleHQucmVjdCgtZml4ZWRSYWRpdXMsIC1maXhlZFJhZGl1cywgZml4ZWREaWFtZXRlciwgZml4ZWREaWFtZXRlcik7XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQoKSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\"edge\", \"square\"], new _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QztBQUNQLGtEQUFrRCx1REFBWTtBQUM5RCIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1uZXh0Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9lc20vaW5kZXguanM/Nzk3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmVEcmF3ZXIgfSBmcm9tIFwiLi9TcXVhcmVEcmF3ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3F1YXJlU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShbXCJlZGdlXCIsIFwic3F1YXJlXCJdLCBuZXcgU3F1YXJlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/index.js\n");

/***/ })

};
;