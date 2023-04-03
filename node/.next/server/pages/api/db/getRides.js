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
exports.id = "pages/api/db/getRides";
exports.ids = ["pages/api/db/getRides"];
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

/***/ "(api)/./pages/api/db/getRides.js":
/*!**********************************!*\
  !*** ./pages/api/db/getRides.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\n\nconst getRides = async (req, res) => {\n  try {\n    console.log(\"hi\", req.query.walletAddress);\n    const query = `\n    *[_type==\"trips\" && (rideStatus==\"Created\" || rideStatus==\"Ongoing\" || rideStatus==\"Matched\") && passenger._ref==\"${req.query.walletAddress}\"]{pickup,dropoff,rideTimestamp,price,rideStatus,rideCategory,passenger,driver,contractAddress,_id}\n    `;\n    const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n    console.log(sanityResponse);\n    res.status(200).send({\n      message: \"success\",\n      data: sanityResponse\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRides);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0UmlkZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0VBQ25DLElBQUk7SUFDRkMsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQkgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLGFBQTVCO0lBQ0EsTUFBTUQsS0FBSyxHQUFJO0FBQ25CLHdIQUF3SEosR0FBRyxDQUFDSSxLQUFKLENBQVVDLGFBQWM7QUFDaEosS0FGSTtJQUlBLE1BQU1DLGNBQWMsR0FBRyxNQUFNUixxREFBQSxDQUFhTSxLQUFiLENBQTdCO0lBQ0FGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxjQUFaO0lBQ0FMLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxTQUFYO01BQXNCQyxJQUFJLEVBQUVMO0lBQTVCLENBQXJCO0VBQ0QsQ0FURCxDQVNFLE9BQU9NLEtBQVAsRUFBYztJQUNkWCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkMsSUFBSSxFQUFFQyxLQUFLLENBQUNGO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQWJEOztBQWVBLGlFQUFlWCxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS8uL3BhZ2VzL2FwaS9kYi9nZXRSaWRlcy5qcz9lMGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc2FuaXR5XCI7XHJcblxyXG5jb25zdCBnZXRSaWRlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIsIHJlcS5xdWVyeS53YWxsZXRBZGRyZXNzKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgKltfdHlwZT09XCJ0cmlwc1wiICYmIChyaWRlU3RhdHVzPT1cIkNyZWF0ZWRcIiB8fCByaWRlU3RhdHVzPT1cIk9uZ29pbmdcIiB8fCByaWRlU3RhdHVzPT1cIk1hdGNoZWRcIikgJiYgcGFzc2VuZ2VyLl9yZWY9PVwiJHtyZXEucXVlcnkud2FsbGV0QWRkcmVzc31cIl17cGlja3VwLGRyb3BvZmYscmlkZVRpbWVzdGFtcCxwcmljZSxyaWRlU3RhdHVzLHJpZGVDYXRlZ29yeSxwYXNzZW5nZXIsZHJpdmVyLGNvbnRyYWN0QWRkcmVzcyxfaWR9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IHNhbml0eVJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICAgIGNvbnNvbGUubG9nKHNhbml0eVJlc3BvbnNlKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJzdWNjZXNzXCIsIGRhdGE6IHNhbml0eVJlc3BvbnNlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSaWRlcztcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsImdldFJpZGVzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwid2FsbGV0QWRkcmVzcyIsInNhbml0eVJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getRides.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getRides.js"));
module.exports = __webpack_exports__;

})();