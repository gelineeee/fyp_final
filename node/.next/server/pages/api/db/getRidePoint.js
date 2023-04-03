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
exports.id = "pages/api/db/getRidePoint";
exports.ids = ["pages/api/db/getRidePoint"];
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

/***/ "(api)/./pages/api/db/getRidePoint.js":
/*!**************************************!*\
  !*** ./pages/api/db/getRidePoint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst getRidePoint = async (req, res) => {\n  try {\n    console.log(req.query.title);\n    const query = `\n*[_type==\"rides\" && title==\"${req.query.title}\"]{\n    \"service\":title,\n    pointsEarned,\n}\n`;\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    res.status(200).send({\n      message: \"success\",\n      data: sanityResponse\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRidePoint);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0UmlkZVBvaW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUN2QyxJQUFJO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLEtBQUosQ0FBVUMsS0FBdEI7SUFDQSxNQUFNRCxLQUFLLEdBQUk7QUFDbkIsOEJBQThCSixHQUFHLENBQUNJLEtBQUosQ0FBVUMsS0FBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxDQUxJO0lBTUEsTUFBTUMsY0FBYyxHQUFHLE1BQU1SLHFEQUFBLENBQWFNLEtBQWIsQ0FBN0I7SUFFQUgsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsT0FBTyxFQUFFLFNBQVg7TUFBc0JDLElBQUksRUFBRUw7SUFBNUIsQ0FBckI7RUFDRCxDQVhELENBV0UsT0FBT00sS0FBUCxFQUFjO0lBQ2RYLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxPQUFYO01BQW9CQyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0Y7SUFBaEMsQ0FBckI7RUFDRDtBQUNGLENBZkQ7O0FBaUJBLGlFQUFlWCxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS8uL3BhZ2VzL2FwaS9kYi9nZXRSaWRlUG9pbnQuanM/Yzg0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nhbml0eVwiO1xyXG5cclxuY29uc3QgZ2V0UmlkZVBvaW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS50aXRsZSk7XHJcbiAgICBjb25zdCBxdWVyeSA9IGBcclxuKltfdHlwZT09XCJyaWRlc1wiICYmIHRpdGxlPT1cIiR7cmVxLnF1ZXJ5LnRpdGxlfVwiXXtcclxuICAgIFwic2VydmljZVwiOnRpdGxlLFxyXG4gICAgcG9pbnRzRWFybmVkLFxyXG59XHJcbmA7XHJcbiAgICBjb25zdCBzYW5pdHlSZXNwb25zZSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiwgZGF0YTogc2FuaXR5UmVzcG9uc2UgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogXCJlcnJvclwiLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJpZGVQb2ludDtcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsImdldFJpZGVQb2ludCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRpdGxlIiwic2FuaXR5UmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getRidePoint.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getRidePoint.js"));
module.exports = __webpack_exports__;

})();