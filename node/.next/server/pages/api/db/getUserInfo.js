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
exports.id = "pages/api/db/getUserInfo";
exports.ids = ["pages/api/db/getUserInfo"];
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

/***/ "(api)/./pages/api/db/getUserInfo.js":
/*!*************************************!*\
  !*** ./pages/api/db/getUserInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst getUserInfo = async (req, res) => {\n  try {\n    const query = `\n    *[_type==\"users\" && walletAddress==\"${req.query.walletAddress}\"]{\n        name,\n        walletAddress,\n        \"imageUrl\": icon.asset->url,\n        points,\n        rating,\n        contactNumber,\n        accountType,\n        carPlate,\n        carModel\n    }\n    `;\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    console.log(sanityResponse);\n    res.status(200).send({\n      message: \"success\",\n      data: sanityResponse[0]\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0VXNlckluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0VBQ3RDLElBQUk7SUFDRixNQUFNQyxLQUFLLEdBQUk7QUFDbkIsMENBQTBDRixHQUFHLENBQUNFLEtBQUosQ0FBVUMsYUFBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkk7SUFjQSxNQUFNQyxjQUFjLEdBQUcsTUFBTU4scURBQUEsQ0FBYUksS0FBYixDQUE3QjtJQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsY0FBWjtJQUNBSCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsU0FBWDtNQUFzQkMsSUFBSSxFQUFFUCxjQUFjLENBQUMsQ0FBRDtJQUExQyxDQUFyQjtFQUNELENBbEJELENBa0JFLE9BQU9RLEtBQVAsRUFBYztJQUNkWCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkMsSUFBSSxFQUFFQyxLQUFLLENBQUNGO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQXRCRDs7QUF3QkEsaUVBQWVYLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLy4vcGFnZXMvYXBpL2RiL2dldFVzZXJJbmZvLmpzPzcyZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zYW5pdHlcIjtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgKltfdHlwZT09XCJ1c2Vyc1wiICYmIHdhbGxldEFkZHJlc3M9PVwiJHtyZXEucXVlcnkud2FsbGV0QWRkcmVzc31cIl17XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB3YWxsZXRBZGRyZXNzLFxyXG4gICAgICAgIFwiaW1hZ2VVcmxcIjogaWNvbi5hc3NldC0+dXJsLFxyXG4gICAgICAgIHBvaW50cyxcclxuICAgICAgICByYXRpbmcsXHJcbiAgICAgICAgY29udGFjdE51bWJlcixcclxuICAgICAgICBhY2NvdW50VHlwZSxcclxuICAgICAgICBjYXJQbGF0ZSxcclxuICAgICAgICBjYXJNb2RlbFxyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBzYW5pdHlSZXNwb25zZSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XHJcbiAgICBjb25zb2xlLmxvZyhzYW5pdHlSZXNwb25zZSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCBkYXRhOiBzYW5pdHlSZXNwb25zZVswXSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBcImVycm9yXCIsIGRhdGE6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckluZm87XHJcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJnZXRVc2VySW5mbyIsInJlcSIsInJlcyIsInF1ZXJ5Iiwid2FsbGV0QWRkcmVzcyIsInNhbml0eVJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getUserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getUserInfo.js"));
module.exports = __webpack_exports__;

})();