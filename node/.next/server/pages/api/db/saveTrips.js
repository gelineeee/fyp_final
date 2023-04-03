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
exports.id = "pages/api/db/saveTrips";
exports.ids = ["pages/api/db/saveTrips"];
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

/***/ "(api)/./pages/api/db/saveTrips.js":
/*!***********************************!*\
  !*** ./pages/api/db/saveTrips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst saveTrips = async (req, res) => {\n  try {\n    const tripDoc = {\n      _type: \"trips\",\n      _id: `${req.body.userWalletAddress}-${Date.now()}`,\n      pickup: req.body.pickupLocation,\n      dropoff: req.body.dropoffLocation,\n      rideTimestamp: new Date(Date.now()).toISOString(),\n      price: parseFloat(req.body.price),\n      rideCategory: req.body.selectedRide.service,\n      rideStatus: \"Created\",\n      contractAddress: req.body.contractAddress,\n      passenger: {\n        _key: `passenger-${req.body.userWalletAddress}-${new Date(Date.now()).toISOString()}`,\n        _ref: req.body.userWalletAddress,\n        _type: \"reference\"\n      }\n    };\n    await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.createIfNotExists(tripDoc);\n    res.status(200).send({\n      message: \"success\"\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTrips);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvc2F2ZVRyaXBzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUNwQyxJQUFJO0lBQ0YsTUFBTUMsT0FBTyxHQUFHO01BQ2RDLEtBQUssRUFBRSxPQURPO01BRWRDLEdBQUcsRUFBRyxHQUFFSixHQUFHLENBQUNLLElBQUosQ0FBU0MsaUJBQWtCLElBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFXLEVBRm5DO01BR2RDLE1BQU0sRUFBRVQsR0FBRyxDQUFDSyxJQUFKLENBQVNLLGNBSEg7TUFJZEMsT0FBTyxFQUFFWCxHQUFHLENBQUNLLElBQUosQ0FBU08sZUFKSjtNQUtkQyxhQUFhLEVBQUUsSUFBSU4sSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsRUFBVCxFQUFxQk0sV0FBckIsRUFMRDtNQU1kQyxLQUFLLEVBQUVDLFVBQVUsQ0FBQ2hCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTVSxLQUFWLENBTkg7TUFPZEUsWUFBWSxFQUFFakIsR0FBRyxDQUFDSyxJQUFKLENBQVNhLFlBQVQsQ0FBc0JDLE9BUHRCO01BUWRDLFVBQVUsRUFBRSxTQVJFO01BU2RDLGVBQWUsRUFBRXJCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTZ0IsZUFUWjtNQVVkQyxTQUFTLEVBQUU7UUFDVEMsSUFBSSxFQUFHLGFBQVl2QixHQUFHLENBQUNLLElBQUosQ0FBU0MsaUJBQWtCLElBQUcsSUFBSUMsSUFBSixDQUMvQ0EsSUFBSSxDQUFDQyxHQUFMLEVBRCtDLEVBRS9DTSxXQUYrQyxFQUVqQyxFQUhQO1FBSVRVLElBQUksRUFBRXhCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxpQkFKTjtRQUtUSCxLQUFLLEVBQUU7TUFMRTtJQVZHLENBQWhCO0lBbUJBLE1BQU1MLGlFQUFBLENBQXlCSSxPQUF6QixDQUFOO0lBRUFELEdBQUcsQ0FBQ3lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUU7SUFBWCxDQUFyQjtFQUNELENBdkJELENBdUJFLE9BQU9DLEtBQVAsRUFBYztJQUNkNUIsR0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxPQUFYO01BQW9CRSxJQUFJLEVBQUVELEtBQUssQ0FBQ0Q7SUFBaEMsQ0FBckI7RUFDRDtBQUNGLENBM0JEOztBQTZCQSxpRUFBZTdCLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLy4vcGFnZXMvYXBpL2RiL3NhdmVUcmlwcy5qcz8yZTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc2FuaXR5XCI7XHJcblxyXG5jb25zdCBzYXZlVHJpcHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdHJpcERvYyA9IHtcclxuICAgICAgX3R5cGU6IFwidHJpcHNcIixcclxuICAgICAgX2lkOiBgJHtyZXEuYm9keS51c2VyV2FsbGV0QWRkcmVzc30tJHtEYXRlLm5vdygpfWAsXHJcbiAgICAgIHBpY2t1cDogcmVxLmJvZHkucGlja3VwTG9jYXRpb24sXHJcbiAgICAgIGRyb3BvZmY6IHJlcS5ib2R5LmRyb3BvZmZMb2NhdGlvbixcclxuICAgICAgcmlkZVRpbWVzdGFtcDogbmV3IERhdGUoRGF0ZS5ub3coKSkudG9JU09TdHJpbmcoKSxcclxuICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocmVxLmJvZHkucHJpY2UpLFxyXG4gICAgICByaWRlQ2F0ZWdvcnk6IHJlcS5ib2R5LnNlbGVjdGVkUmlkZS5zZXJ2aWNlLFxyXG4gICAgICByaWRlU3RhdHVzOiBcIkNyZWF0ZWRcIixcclxuICAgICAgY29udHJhY3RBZGRyZXNzOiByZXEuYm9keS5jb250cmFjdEFkZHJlc3MsXHJcbiAgICAgIHBhc3Nlbmdlcjoge1xyXG4gICAgICAgIF9rZXk6IGBwYXNzZW5nZXItJHtyZXEuYm9keS51c2VyV2FsbGV0QWRkcmVzc30tJHtuZXcgRGF0ZShcclxuICAgICAgICAgIERhdGUubm93KClcclxuICAgICAgICApLnRvSVNPU3RyaW5nKCl9YCxcclxuICAgICAgICBfcmVmOiByZXEuYm9keS51c2VyV2FsbGV0QWRkcmVzcyxcclxuICAgICAgICBfdHlwZTogXCJyZWZlcmVuY2VcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgY2xpZW50LmNyZWF0ZUlmTm90RXhpc3RzKHRyaXBEb2MpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJzdWNjZXNzXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogXCJlcnJvclwiLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhdmVUcmlwcztcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsInNhdmVUcmlwcyIsInJlcSIsInJlcyIsInRyaXBEb2MiLCJfdHlwZSIsIl9pZCIsImJvZHkiLCJ1c2VyV2FsbGV0QWRkcmVzcyIsIkRhdGUiLCJub3ciLCJwaWNrdXAiLCJwaWNrdXBMb2NhdGlvbiIsImRyb3BvZmYiLCJkcm9wb2ZmTG9jYXRpb24iLCJyaWRlVGltZXN0YW1wIiwidG9JU09TdHJpbmciLCJwcmljZSIsInBhcnNlRmxvYXQiLCJyaWRlQ2F0ZWdvcnkiLCJzZWxlY3RlZFJpZGUiLCJzZXJ2aWNlIiwicmlkZVN0YXR1cyIsImNvbnRyYWN0QWRkcmVzcyIsInBhc3NlbmdlciIsIl9rZXkiLCJfcmVmIiwiY3JlYXRlSWZOb3RFeGlzdHMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImVycm9yIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/saveTrips.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/saveTrips.js"));
module.exports = __webpack_exports__;

})();