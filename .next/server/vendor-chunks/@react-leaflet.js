"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-leaflet";
exports.ids = ["vendor-chunks/@react-leaflet"];
exports.modules = {

/***/ "(ssr)/./node_modules/@react-leaflet/core/lib/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-leaflet/core/lib/context.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT_VERSION: () => (/* binding */ CONTEXT_VERSION),\n/* harmony export */   LeafletContext: () => (/* binding */ LeafletContext),\n/* harmony export */   LeafletProvider: () => (/* binding */ LeafletProvider),\n/* harmony export */   createLeafletContext: () => (/* binding */ createLeafletContext),\n/* harmony export */   extendContext: () => (/* binding */ extendContext),\n/* harmony export */   useLeafletContext: () => (/* binding */ useLeafletContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nconst CONTEXT_VERSION = 1;\nfunction createLeafletContext(map) {\n    return Object.freeze({\n        __version: CONTEXT_VERSION,\n        map\n    });\n}\nfunction extendContext(source, extra) {\n    return Object.freeze({\n        ...source,\n        ...extra\n    });\n}\nconst LeafletContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst LeafletProvider = LeafletContext.Provider;\nfunction useLeafletContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LeafletContext);\n    if (context == null) {\n        throw new Error('No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>');\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWxlYWZsZXQvY29yZS9saWIvY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQzNDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPLHVCQUF1QixvREFBYTtBQUNwQztBQUNBO0FBQ1Asb0JBQW9CLGlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtbmV4dC8uL25vZGVfbW9kdWxlcy9AcmVhY3QtbGVhZmxldC9jb3JlL2xpYi9jb250ZXh0LmpzPzkzZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBDT05URVhUX1ZFUlNJT04gPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxlYWZsZXRDb250ZXh0KG1hcCkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgX192ZXJzaW9uOiBDT05URVhUX1ZFUlNJT04sXG4gICAgICAgIG1hcFxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZENvbnRleHQoc291cmNlLCBleHRyYSkge1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgLi4uc291cmNlLFxuICAgICAgICAuLi5leHRyYVxuICAgIH0pO1xufVxuZXhwb3J0IGNvbnN0IExlYWZsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBjb25zdCBMZWFmbGV0UHJvdmlkZXIgPSBMZWFmbGV0Q29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VMZWFmbGV0Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMZWFmbGV0Q29udGV4dCk7XG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbnRleHQgcHJvdmlkZWQ6IHVzZUxlYWZsZXRDb250ZXh0KCkgY2FuIG9ubHkgYmUgdXNlZCBpbiBhIGRlc2NlbmRhbnQgb2YgPE1hcENvbnRhaW5lcj4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-leaflet/core/lib/context.js\n");

/***/ })

};
;