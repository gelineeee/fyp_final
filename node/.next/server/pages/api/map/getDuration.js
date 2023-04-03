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
exports.id = "pages/api/map/getDuration";
exports.ids = ["pages/api/map/getDuration"];
exports.modules = {

/***/ "(api)/./pages/api/map/getDuration.js":
/*!**************************************!*\
  !*** ./pages/api/map/getDuration.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDuration = async (req, res) => {\n  const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${\"pk.eyJ1IjoiZ2VsaW5lIiwiYSI6ImNsZDVuZ3dodjA0Y3AzdnRhZ3d3djI2MDQifQ.4cT0u1biWcZjxJ4t6iEUjA\"}`;\n\n  try {\n    const response = await fetch(mapboxUrl);\n    const data = await response.json();\n    res.status(200).send({\n      message: \"success\",\n      data: data.routes[0].duration\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDuration);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwL2dldER1cmF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0VBQ3RDLE1BQU1DLFNBQVMsR0FBSSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMseUJBQTBCLElBQUdMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxpQkFBa0IsSUFBR1AsR0FBRyxDQUFDTSxJQUFKLENBQVNFLGtCQUFtQixzQkFBcUJMLDBGQUE0QyxFQUF6TDs7RUFFQSxJQUFJO0lBQ0YsTUFBTU8sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1QsU0FBRCxDQUE1QjtJQUNBLE1BQU1VLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7SUFFQVosR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBRUMsT0FBTyxFQUFFLFNBQVg7TUFBc0JKLElBQUksRUFBRUEsSUFBSSxDQUFDSyxNQUFMLENBQVksQ0FBWixFQUFlQztJQUEzQyxDQUFyQjtFQUNELENBTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7SUFDZGxCLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxPQUFYO01BQW9CSixJQUFJLEVBQUVPLEtBQUssQ0FBQ0g7SUFBaEMsQ0FBckI7RUFDRDtBQUNGLENBWEQ7O0FBYUEsaUVBQWVqQixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS8uL3BhZ2VzL2FwaS9tYXAvZ2V0RHVyYXRpb24uanM/ZDg5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXREdXJhdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IG1hcGJveFVybCA9IGAke3Byb2Nlc3MuZW52Lk1BUEJPWF9ESVJFQ1RJT05TX0FQSV9VUkx9LyR7cmVxLmJvZHkucGlja3VwQ29vcmRpbmF0ZXN9OyR7cmVxLmJvZHkuZHJvcG9mZkNvb3JkaW5hdGVzfS5qc29uP2FjY2Vzc190b2tlbj0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9BQ0NFU1NfVE9LRU59YDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWFwYm94VXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiwgZGF0YTogZGF0YS5yb3V0ZXNbMF0uZHVyYXRpb24gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogXCJlcnJvclwiLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldER1cmF0aW9uO1xyXG4iXSwibmFtZXMiOlsiZ2V0RHVyYXRpb24iLCJyZXEiLCJyZXMiLCJtYXBib3hVcmwiLCJwcm9jZXNzIiwiZW52IiwiTUFQQk9YX0RJUkVDVElPTlNfQVBJX1VSTCIsImJvZHkiLCJwaWNrdXBDb29yZGluYXRlcyIsImRyb3BvZmZDb29yZGluYXRlcyIsIk5FWFRfUFVCTElDX01BUEJPWF9BQ0NFU1NfVE9LRU4iLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInJvdXRlcyIsImR1cmF0aW9uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/map/getDuration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/map/getDuration.js"));
module.exports = __webpack_exports__;

})();