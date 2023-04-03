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
exports.id = "pages/api/map/getDirection";
exports.ids = ["pages/api/map/getDirection"];
exports.modules = {

/***/ "(api)/./pages/api/map/getDirection.js":
/*!***************************************!*\
  !*** ./pages/api/map/getDirection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDirection = async (req, res) => {\n  const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}?geometries=geojson&access_token=${\"pk.eyJ1IjoiZ2VsaW5lIiwiYSI6ImNsZDVuZ3dodjA0Y3AzdnRhZ3d3djI2MDQifQ.4cT0u1biWcZjxJ4t6iEUjA\"}`;\n\n  try {\n    const response = await fetch(mapboxUrl);\n    const data = await response.json();\n    res.status(200).send({\n      message: \"success\",\n      data: data.routes[0].geometry.coordinates\n    });\n  } catch (error) {\n    res.status(500).send({\n      message: \"error\",\n      data: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDirection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFwL2dldERpcmVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtFQUN2QyxNQUFNQyxTQUFTLEdBQUksR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHlCQUEwQixJQUFHTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsaUJBQWtCLElBQUdQLEdBQUcsQ0FBQ00sSUFBSixDQUFTRSxrQkFBbUIsb0NBQW1DTCwwRkFBNEMsRUFBdk07O0VBRUEsSUFBSTtJQUNGLE1BQU1PLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNULFNBQUQsQ0FBNUI7SUFDQSxNQUFNVSxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CO0lBRUFaLEdBQUcsQ0FDQWEsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO01BQUVDLE9BQU8sRUFBRSxTQUFYO01BQXNCSixJQUFJLEVBQUVBLElBQUksQ0FBQ0ssTUFBTCxDQUFZLENBQVosRUFBZUMsUUFBZixDQUF3QkM7SUFBcEQsQ0FGUjtFQUdELENBUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7SUFDZG5CLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVDLE9BQU8sRUFBRSxPQUFYO01BQW9CSixJQUFJLEVBQUVRLEtBQUssQ0FBQ0o7SUFBaEMsQ0FBckI7RUFDRDtBQUNGLENBYkQ7O0FBZUEsaUVBQWVqQixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZS8uL3BhZ2VzL2FwaS9tYXAvZ2V0RGlyZWN0aW9uLmpzP2IyZGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0RGlyZWN0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgbWFwYm94VXJsID0gYCR7cHJvY2Vzcy5lbnYuTUFQQk9YX0RJUkVDVElPTlNfQVBJX1VSTH0vJHtyZXEuYm9keS5waWNrdXBDb29yZGluYXRlc307JHtyZXEuYm9keS5kcm9wb2ZmQ29vcmRpbmF0ZXN9P2dlb21ldHJpZXM9Z2VvanNvbiZhY2Nlc3NfdG9rZW49JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOfWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1hcGJveFVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiwgZGF0YTogZGF0YS5yb3V0ZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogXCJlcnJvclwiLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERpcmVjdGlvbjtcclxuIl0sIm5hbWVzIjpbImdldERpcmVjdGlvbiIsInJlcSIsInJlcyIsIm1hcGJveFVybCIsInByb2Nlc3MiLCJlbnYiLCJNQVBCT1hfRElSRUNUSU9OU19BUElfVVJMIiwiYm9keSIsInBpY2t1cENvb3JkaW5hdGVzIiwiZHJvcG9mZkNvb3JkaW5hdGVzIiwiTkVYVF9QVUJMSUNfTUFQQk9YX0FDQ0VTU19UT0tFTiIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicm91dGVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/map/getDirection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/map/getDirection.js"));
module.exports = __webpack_exports__;

})();