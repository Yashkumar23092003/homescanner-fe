"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-interaction-external-pause";
exports.ids = ["vendor-chunks/tsparticles-interaction-external-pause"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pauser: () => (/* binding */ Pauser)\n/* harmony export */ });\n/* harmony import */ var tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/esm/Core/Utils/ExternalInteractorBase.js\");\n\nclass Pauser extends tsparticles_engine__WEBPACK_IMPORTED_MODULE_0__.ExternalInteractorBase {\n    constructor(container) {\n        super(container);\n        this.handleClickMode = (mode) => {\n            if (mode !== \"pause\") {\n                return;\n            }\n            const container = this.container;\n            if (container.getAnimationStatus()) {\n                container.pause();\n            }\n            else {\n                container.play();\n            }\n        };\n    }\n    clear() {\n    }\n    init() {\n    }\n    async interact() {\n    }\n    isEnabled() {\n        return true;\n    }\n    reset() {\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL1BhdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUNyRCxxQkFBcUIsc0VBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1uZXh0Ly4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLWludGVyYWN0aW9uLWV4dGVybmFsLXBhdXNlL2VzbS9QYXVzZXIuanM/MzQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbEludGVyYWN0b3JCYXNlIH0gZnJvbSBcInRzcGFydGljbGVzLWVuZ2luZVwiO1xuZXhwb3J0IGNsYXNzIFBhdXNlciBleHRlbmRzIEV4dGVybmFsSW50ZXJhY3RvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihjb250YWluZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrTW9kZSA9IChtb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kZSAhPT0gXCJwYXVzZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmdldEFuaW1hdGlvblN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICB9XG4gICAgYXN5bmMgaW50ZXJhY3QoKSB7XG4gICAgfVxuICAgIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/tsparticles-interaction-external-pause/esm/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadExternalPauseInteraction: () => (/* binding */ loadExternalPauseInteraction)\n/* harmony export */ });\n/* harmony import */ var _Pauser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pauser */ \"(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/Pauser.js\");\n\nasync function loadExternalPauseInteraction(engine, refresh = true) {\n    await engine.addInteractor(\"externalPause\", (container) => new _Pauser__WEBPACK_IMPORTED_MODULE_0__.Pauser(container), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQzNCO0FBQ1AsbUVBQW1FLDJDQUFNO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5leHQvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtaW50ZXJhY3Rpb24tZXh0ZXJuYWwtcGF1c2UvZXNtL2luZGV4LmpzPzg2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF1c2VyIH0gZnJvbSBcIi4vUGF1c2VyXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEV4dGVybmFsUGF1c2VJbnRlcmFjdGlvbihlbmdpbmUsIHJlZnJlc2ggPSB0cnVlKSB7XG4gICAgYXdhaXQgZW5naW5lLmFkZEludGVyYWN0b3IoXCJleHRlcm5hbFBhdXNlXCIsIChjb250YWluZXIpID0+IG5ldyBQYXVzZXIoY29udGFpbmVyKSwgcmVmcmVzaCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-interaction-external-pause/esm/index.js\n");

/***/ })

};
;