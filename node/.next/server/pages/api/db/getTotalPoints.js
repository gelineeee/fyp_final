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
exports.id = "pages/api/db/getTotalPoints";
exports.ids = ["pages/api/db/getTotalPoints"];
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

/***/ "(api)/./pages/api/db/getTotalPoints.js":
/*!****************************************!*\
  !*** ./pages/api/db/getTotalPoints.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst getTotalPoints = async (req, res) => {\n  try {\n    const query = `\n    *[_type==\"points\"]{totalPoints}\n    `;\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    console.log(sanityResponse);\n    res.status(200).send({\n      message: \"success\",\n      data: sanityResponse\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalPoints);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0VG90YWxQb2ludHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0VBQ3pDLElBQUk7SUFDRixNQUFNQyxLQUFLLEdBQUk7QUFDbkI7QUFDQSxLQUZJO0lBSUEsTUFBTUMsY0FBYyxHQUFHLE1BQU1MLHFEQUFBLENBQWFJLEtBQWIsQ0FBN0I7SUFDQUcsT0FBTyxDQUFDQyxHQUFSLENBQVlILGNBQVo7SUFDQUYsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsT0FBTyxFQUFFLFNBQVg7TUFBc0JDLElBQUksRUFBRVA7SUFBNUIsQ0FBckI7RUFDRCxDQVJELENBUUUsT0FBT1EsS0FBUCxFQUFjO0lBQ2RWLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxPQUFYO01BQW9CQyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0Y7SUFBaEMsQ0FBckI7RUFDRDtBQUNGLENBWkQ7O0FBY0EsaUVBQWVWLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLy4vcGFnZXMvYXBpL2RiL2dldFRvdGFsUG9pbnRzLmpzPzQ5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zYW5pdHlcIjtcclxuXHJcbmNvbnN0IGdldFRvdGFsUG9pbnRzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgKltfdHlwZT09XCJwb2ludHNcIl17dG90YWxQb2ludHN9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHNhbml0eVJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnNvbGUubG9nKHNhbml0eVJlc3BvbnNlKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJzdWNjZXNzXCIsIGRhdGE6IHNhbml0eVJlc3BvbnNlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRUb3RhbFBvaW50cztcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsImdldFRvdGFsUG9pbnRzIiwicmVxIiwicmVzIiwicXVlcnkiLCJzYW5pdHlSZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getTotalPoints.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getTotalPoints.js"));
module.exports = __webpack_exports__;

})();