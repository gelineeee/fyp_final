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
exports.id = "pages/api/map/getLocationCoordinates";
exports.ids = ["pages/api/map/getLocationCoordinates"];
exports.modules = {

/***/ "(api)/./pages/api/map/getLocationCoordinates.js":
/*!*************************************************!*\
  !*** ./pages/api/map/getLocationCoordinates.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLocationCoordinates = async (req, res) => {\n  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${\"pk.eyJ1IjoiZ2VsaW5lIiwiYSI6ImNsZDVuZ3dodjA0Y3AzdnRhZ3d3djI2MDQifQ.4cT0u1biWcZjxJ4t6iEUjA\"}`;\n\n  try {\n    const response = await fetch(mapboxUrl);\n    const data = await response.json();\n    res.status(200).send({\n      message: \"success\",\n      data: data.features[0].center\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocationCoordinates);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwL2dldExvY2F0aW9uQ29vcmRpbmF0ZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLHNCQUFzQixHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUNqRCxNQUFNQyxTQUFTLEdBQUksR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFzQixJQUFHTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsUUFBUyxzQkFBcUJKLDBGQUE0QyxFQUE3STs7RUFFQSxJQUFJO0lBQ0YsTUFBTU0sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1IsU0FBRCxDQUE1QjtJQUNBLE1BQU1TLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7SUFFQVgsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsT0FBTyxFQUFFLFNBQVg7TUFBc0JKLElBQUksRUFBRUEsSUFBSSxDQUFDSyxRQUFMLENBQWMsQ0FBZCxFQUFpQkM7SUFBN0MsQ0FBckI7RUFDRCxDQUxELENBS0UsT0FBT0MsS0FBUCxFQUFjO0lBQ2RqQixHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFFQyxPQUFPLEVBQUUsT0FBWDtNQUFvQkosSUFBSSxFQUFFTyxLQUFLLENBQUNIO0lBQWhDLENBQXJCO0VBQ0Q7QUFDRixDQVhEOztBQWFBLGlFQUFlaEIsc0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLy4vcGFnZXMvYXBpL21hcC9nZXRMb2NhdGlvbkNvb3JkaW5hdGVzLmpzPzY0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TG9jYXRpb25Db29yZGluYXRlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IG1hcGJveFVybCA9IGAke3Byb2Nlc3MuZW52Lk1BUEJPWF9QTEFDRVNfQVBJX1VSTH0vJHtyZXEuYm9keS5sb2NhdGlvbn0uanNvbj9hY2Nlc3NfdG9rZW49JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOfWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1hcGJveFVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJzdWNjZXNzXCIsIGRhdGE6IGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiZXJyb3JcIiwgZGF0YTogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbkNvb3JkaW5hdGVzO1xyXG4iXSwibmFtZXMiOlsiZ2V0TG9jYXRpb25Db29yZGluYXRlcyIsInJlcSIsInJlcyIsIm1hcGJveFVybCIsInByb2Nlc3MiLCJlbnYiLCJNQVBCT1hfUExBQ0VTX0FQSV9VUkwiLCJib2R5IiwibG9jYXRpb24iLCJORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJmZWF0dXJlcyIsImNlbnRlciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/map/getLocationCoordinates.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/map/getLocationCoordinates.js"));
module.exports = __webpack_exports__;

})();