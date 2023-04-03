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
exports.id = "pages/api/db/updateUserPoint";
exports.ids = ["pages/api/db/updateUserPoint"];
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

/***/ "(api)/./pages/api/db/updateUserPoint.js":
/*!*****************************************!*\
  !*** ./pages/api/db/updateUserPoint.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst updateUserPoint = async (req, res) => {\n  try {\n    console.log(req.body._id, req.body.points);\n    await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.patch(req.body._id).inc({\n      points: req.body.points\n    }).commit();\n    res.status(200).send({\n      message: \"success\"\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateUserPoint);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvdXBkYXRlVXNlclBvaW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUMxQyxJQUFJO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsR0FBckIsRUFBMEJMLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRSxNQUFuQztJQUNBLE1BQU1SLHFEQUFBLENBQ0dFLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxHQURaLEVBRUhHLEdBRkcsQ0FFQztNQUNIRixNQUFNLEVBQUVOLEdBQUcsQ0FBQ0ksSUFBSixDQUFTRTtJQURkLENBRkQsRUFLSEcsTUFMRyxFQUFOO0lBT0FSLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRTtJQUFYLENBQXJCO0VBQ0QsQ0FWRCxDQVVFLE9BQU9DLEtBQVAsRUFBYztJQUNkWixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkUsSUFBSSxFQUFFRCxLQUFLLENBQUNEO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQWREOztBQWdCQSxpRUFBZWIsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vZGUvLi9wYWdlcy9hcGkvZGIvdXBkYXRlVXNlclBvaW50LmpzPzRkMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zYW5pdHlcIjtcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXJQb2ludCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5faWQsIHJlcS5ib2R5LnBvaW50cyk7XHJcbiAgICBhd2FpdCBjbGllbnRcclxuICAgICAgLnBhdGNoKHJlcS5ib2R5Ll9pZClcclxuICAgICAgLmluYyh7XHJcbiAgICAgICAgcG9pbnRzOiByZXEuYm9keS5wb2ludHMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jb21taXQoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVVc2VyUG9pbnQ7XHJcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJ1cGRhdGVVc2VyUG9pbnQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIl9pZCIsInBvaW50cyIsInBhdGNoIiwiaW5jIiwiY29tbWl0Iiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJlcnJvciIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/updateUserPoint.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/updateUserPoint.js"));
module.exports = __webpack_exports__;

})();