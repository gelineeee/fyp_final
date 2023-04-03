"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db/getRideTypes";
exports.ids = ["pages/api/db/getRideTypes"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"l5skxf4a\",\n  dataset: \"production\",\n  apiVersion: \"v1\",\n  token: process.env.SANITY_TOKEN,\n  useCdn: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsTUFBTSxHQUFHRCxxREFBWSxDQUFDO0VBQ2pDRSxTQUFTLEVBQUUsVUFEc0I7RUFFakNDLE9BQU8sRUFBRSxZQUZ3QjtFQUdqQ0MsVUFBVSxFQUFFLElBSHFCO0VBSWpDQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUpjO0VBS2pDQyxNQUFNLEVBQUU7QUFMeUIsQ0FBRCxDQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUvLi9saWIvc2FuaXR5LmpzP2Q4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCJsNXNreGY0YVwiLFxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gIGFwaVZlcnNpb246IFwidjFcIixcclxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX1RPS0VOLFxyXG4gIHVzZUNkbjogZmFsc2UsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJTQU5JVFlfVE9LRU4iLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/getRideTypes.js":
/*!**************************************!*\
  !*** ./pages/api/db/getRideTypes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst query = `\n*[_type==\"rides\"]{\n    \"service\":title,\n    \"iconUrl\": icon.asset->url,\n    priceMultiplier,\n    orderById\n}|order(orderById asc)\n`;\n\nconst getRideTypes = async (req, res) => {\n  try {\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    res.status(200).send({\n      message: \"success\",\n      data: sanityResponse\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRideTypes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0UmlkZVR5cGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQSxNQUFNQyxLQUFLLEdBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLE1BQU1DLFlBQVksR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDdkMsSUFBSTtJQUNGLE1BQU1DLGNBQWMsR0FBRyxNQUFNTCxxREFBQSxDQUFhQyxLQUFiLENBQTdCO0lBRUFHLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxTQUFYO01BQXNCQyxJQUFJLEVBQUVMO0lBQTVCLENBQXJCO0VBQ0QsQ0FKRCxDQUlFLE9BQU9NLEtBQVAsRUFBYztJQUNkUCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkMsSUFBSSxFQUFFQyxLQUFLLENBQUNGO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQVJEOztBQVVBLGlFQUFlUCxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS8uL3BhZ2VzL2FwaS9kYi9nZXRSaWRlVHlwZXMuanM/OWM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nhbml0eVwiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBgXHJcbipbX3R5cGU9PVwicmlkZXNcIl17XHJcbiAgICBcInNlcnZpY2VcIjp0aXRsZSxcclxuICAgIFwiaWNvblVybFwiOiBpY29uLmFzc2V0LT51cmwsXHJcbiAgICBwcmljZU11bHRpcGxpZXIsXHJcbiAgICBvcmRlckJ5SWRcclxufXxvcmRlcihvcmRlckJ5SWQgYXNjKVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0UmlkZVR5cGVzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNhbml0eVJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCBkYXRhOiBzYW5pdHlSZXNwb25zZSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBcImVycm9yXCIsIGRhdGE6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmlkZVR5cGVzO1xyXG4iXSwibmFtZXMiOlsiY2xpZW50IiwicXVlcnkiLCJnZXRSaWRlVHlwZXMiLCJyZXEiLCJyZXMiLCJzYW5pdHlSZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getRideTypes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getRideTypes.js"));
module.exports = __webpack_exports__;

})();