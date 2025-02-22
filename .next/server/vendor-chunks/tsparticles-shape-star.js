"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-star";
exports.ids = ["vendor-chunks/tsparticles-shape-star"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/StarDrawer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StarDrawer: () => (/* binding */ StarDrawer)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Utils/NumberUtils.js\");\n\nclass StarDrawer {\n    draw(context, particle, radius) {\n        const sides = particle.sides, inset = particle.starInset ?? 2;\n        context.moveTo(0, 0 - radius);\n        for (let i = 0; i < sides; i++) {\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius * inset);\n            context.rotate(Math.PI / sides);\n            context.lineTo(0, 0 - radius);\n        }\n    }\n    getSidesCount(particle) {\n        const star = particle.shapeData;\n        return Math.round((0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.sides ?? star?.nb_sides ?? 5));\n    }\n    particleInit(container, particle) {\n        const star = particle.shapeData, inset = (0,tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.getRangeValue)(star?.inset ?? 2);\n        particle.starInset = inset;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vU3RhckRyYXdlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUM1QztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQWE7QUFDdkM7QUFDQTtBQUNBLGlEQUFpRCxpRUFBYTtBQUM5RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtbmV4dC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zdGFyL2VzbS9TdGFyRHJhd2VyLmpzPzIzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZ2VWYWx1ZSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1lbmdpbmVcIjtcbmV4cG9ydCBjbGFzcyBTdGFyRHJhd2VyIHtcbiAgICBkcmF3KGNvbnRleHQsIHBhcnRpY2xlLCByYWRpdXMpIHtcbiAgICAgICAgY29uc3Qgc2lkZXMgPSBwYXJ0aWNsZS5zaWRlcywgaW5zZXQgPSBwYXJ0aWNsZS5zdGFySW5zZXQgPz8gMjtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCAtIHJhZGl1cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lkZXM7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIHNpZGVzKTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVRvKDAsIDAgLSByYWRpdXMgKiBpbnNldCk7XG4gICAgICAgICAgICBjb250ZXh0LnJvdGF0ZShNYXRoLlBJIC8gc2lkZXMpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lVG8oMCwgMCAtIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudChwYXJ0aWNsZSkge1xuICAgICAgICBjb25zdCBzdGFyID0gcGFydGljbGUuc2hhcGVEYXRhO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChnZXRSYW5nZVZhbHVlKHN0YXI/LnNpZGVzID8/IHN0YXI/Lm5iX3NpZGVzID8/IDUpKTtcbiAgICB9XG4gICAgcGFydGljbGVJbml0KGNvbnRhaW5lciwgcGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgc3RhciA9IHBhcnRpY2xlLnNoYXBlRGF0YSwgaW5zZXQgPSBnZXRSYW5nZVZhbHVlKHN0YXI/Lmluc2V0ID8/IDIpO1xuICAgICAgICBwYXJ0aWNsZS5zdGFySW5zZXQgPSBpbnNldDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-star/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsparticles-shape-star/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStarShape: () => (/* binding */ loadStarShape)\n/* harmony export */ });\n/* harmony import */ var _StarDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarDrawer */ \"(ssr)/./node_modules/tsparticles-shape-star/esm/StarDrawer.js\");\n\nasync function loadStarShape(engine, refresh = true) {\n    await engine.addShape(\"star\", new _StarDrawer__WEBPACK_IMPORTED_MODULE_0__.StarDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3Rhci9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDbkM7QUFDUCxzQ0FBc0MsbURBQVU7QUFDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtbmV4dC8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zdGFyL2VzbS9pbmRleC5qcz9kZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJEcmF3ZXIgfSBmcm9tIFwiLi9TdGFyRHJhd2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFN0YXJTaGFwZShlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZFNoYXBlKFwic3RhclwiLCBuZXcgU3RhckRyYXdlcigpLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-star/esm/index.js\n");

/***/ })

};
;