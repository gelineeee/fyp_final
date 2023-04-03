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
exports.id = "pages/api/db/updateUser";
exports.ids = ["pages/api/db/updateUser"];
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

/***/ "(api)/./pages/api/db/updateUser.js":
/*!************************************!*\
  !*** ./pages/api/db/updateUser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst updateUser = async (req, res) => {\n  try {\n    await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.patch(req.body._id).set({\n      driver: {\n        _ref: req.body.driver,\n        _type: \"reference\"\n      },\n      rideStatus: req.body.rideStatus\n    }).commit();\n    res.status(200).send({\n      message: \"success\"\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateUser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvdXBkYXRlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDckMsSUFBSTtJQUNGLE1BQU1ILHFEQUFBLENBQ0dFLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxHQURaLEVBRUhDLEdBRkcsQ0FFQztNQUNIQyxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFUCxHQUFHLENBQUNHLElBQUosQ0FBU0csTUFEVDtRQUVORSxLQUFLLEVBQUU7TUFGRCxDQURMO01BS0hDLFVBQVUsRUFBRVQsR0FBRyxDQUFDRyxJQUFKLENBQVNNO0lBTGxCLENBRkQsRUFTSEMsTUFURyxFQUFOO0lBV0FULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRTtJQUFYLENBQXJCO0VBQ0QsQ0FiRCxDQWFFLE9BQU9DLEtBQVAsRUFBYztJQUNkYixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkUsSUFBSSxFQUFFRCxLQUFLLENBQUNEO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQWpCRDs7QUFtQkEsaUVBQWVkLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLy4vcGFnZXMvYXBpL2RiL3VwZGF0ZVVzZXIuanM/MTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nhbml0eVwiO1xyXG5cclxuY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjbGllbnRcclxuICAgICAgLnBhdGNoKHJlcS5ib2R5Ll9pZClcclxuICAgICAgLnNldCh7XHJcbiAgICAgICAgZHJpdmVyOiB7XHJcbiAgICAgICAgICBfcmVmOiByZXEuYm9keS5kcml2ZXIsXHJcbiAgICAgICAgICBfdHlwZTogXCJyZWZlcmVuY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpZGVTdGF0dXM6IHJlcS5ib2R5LnJpZGVTdGF0dXMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jb21taXQoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVVc2VyO1xyXG4iXSwibmFtZXMiOlsiY2xpZW50IiwidXBkYXRlVXNlciIsInJlcSIsInJlcyIsInBhdGNoIiwiYm9keSIsIl9pZCIsInNldCIsImRyaXZlciIsIl9yZWYiLCJfdHlwZSIsInJpZGVTdGF0dXMiLCJjb21taXQiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImVycm9yIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/updateUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/updateUser.js"));
module.exports = __webpack_exports__;

})();