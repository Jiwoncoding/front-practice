"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar API_KEY = \"ca91d4fe545a80a5a8f72d6881928f5c\";\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(useStatetate([]), 2), movies = ref[0], setMovies = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var results;\n            return C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://api.themoviedb.org/3/movie/popular?api_key=\".concat(API_KEY));\n                    case 2:\n                        _ctx.next = 4;\n                        return _ctx.sent.json();\n                    case 4:\n                        results = _ctx.sent.results;\n                        // console.log(data);\n                        setMovies(results);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            movies.map(function(movie) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, movie.id, false, {\n                    fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"wEQVZpfaGeBARNNIh3UNIkjQdqU=\", true);\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE2QjtBQUNlO0FBQ1I7O0FBRXBDLElBQU1JLE9BQU8sR0FBQyxrQ0FBa0M7QUFFakMsU0FBU0MsSUFBSSxHQUFHOzs7SUFDN0IsSUFBNEJDLEdBQWdCLG9GQUFoQkEsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFyQ0MsTUFBTSxHQUFlRCxHQUFnQixHQUEvQixFQUFFRSxTQUFTLEdBQUlGLEdBQWdCLEdBQXBCO0lBQ3hCTCxnREFBUyxDQUFDLFdBQUk7UUFDWCw0UEFBUztnQkFDRFEsT0FBTzs7Ozs7K0JBQ05DLEtBQUssQ0FDWCxxREFBb0QsQ0FBVSxPQUFSTixPQUFPLENBQUUsQ0FDOUQ7OzsrQkFIbUIsVUFJbEJPLElBQUksRUFBRTs7d0JBSkosT0FBUSxhQUFQRixPQUFPLENBSUo7d0JBQ1IscUJBQXFCO3dCQUNyQkQsU0FBUyxDQUFDQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O1NBQ3hCLElBQUcsQ0FBQztLQUNOLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDSixxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNULHVEQUFHO2dCQUFDVSxLQUFLLEVBQUMsTUFBTTs7Ozs7b0JBQUc7WUFDbkJOLE1BQU0sQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLEtBQUs7cUNBQ2hCLDhEQUFDSCxLQUFHOzhCQUNGLDRFQUFDSSxJQUFFO2tDQUFFRCxLQUFLLENBQUNFLGNBQWM7Ozs7OzZCQUFNO21CQUR2QkYsS0FBSyxDQUFDRyxFQUFFOzs7O3lCQUVaO2FBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0dBdkJ1QmIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XHJcblxyXG5jb25zdCBBUElfS0VZPVwiY2E5MWQ0ZmU1NDVhODBhNWE4ZjcyZDY4ODE5MjhmNWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRldGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAoYXN5bmMoKT0+e1xyXG4gICAgICBjb25zdCB7cmVzdWx0c309YXdhaXQgKFxyXG4gICAgICAgIGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT0ke0FQSV9LRVl9YFxyXG4gICAgICAgIClcclxuICAgICAgICApLmpzb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRNb3ZpZXMocmVzdWx0cyk7XHJcbiAgfSkoKTtcclxufSxbXSk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFNlbyB0aXRsZT1cIkhvbWVcIiAvPlxyXG4gICAgICB7bW92aWVzLm1hcCgobW92aWUpPT4oXHJcbiAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfT5cclxuICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlbyIsIkFQSV9LRVkiLCJIb21lIiwidXNlU3RhdGV0YXRlIiwibW92aWVzIiwic2V0TW92aWVzIiwicmVzdWx0cyIsImZldGNoIiwianNvbiIsImRpdiIsInRpdGxlIiwibWFwIiwibW92aWUiLCJoNCIsIm9yaWdpbmFsX3RpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});