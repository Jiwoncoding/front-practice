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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar API_KEY = \"ca91d4fe545a80a5a8f72d6881928f5c\";\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), movies = ref[0], setMovies = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var results;\n            return C_Users_seoji_front_practice_nextjs_intro_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://api.themoviedb.org/3/movie/popular?api_key=\".concat(API_KEY));\n                    case 2:\n                        _ctx.next = 4;\n                        return _ctx.sent.json();\n                    case 4:\n                        results = _ctx.sent.results;\n                        // console.log(data);\n                        setMovies(results);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"jsx-69ce11d07b66d856\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                className: \"jsx-69ce11d07b66d856\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 19\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map(function(movie) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"jsx-69ce11d07b66d856\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                        className: \"jsx-69ce11d07b66d856\",\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this)\n                }, movie.id, false, {\n                    fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"69ce11d07b66d856\",\n                children: \".container.jsx-69ce11d07b66d856{display:grid;grid-template-column:1fr 1fr;padding:20px;gap:20px}.movie.jsx-69ce11d07b66d856 img.jsx-69ce11d07b66d856{max-width:100%;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-transition:-webkit-transform.2s ease-in-out;-moz-transition:-moz-transform.2s ease-in-out;-o-transition:-o-transform.2s ease-in-out;transition:-webkit-transform.2s ease-in-out;transition:-moz-transform.2s ease-in-out;transition:-o-transform.2s ease-in-out;transition:transform.2s ease-in-out;-webkit-box-shadow:rgba(0,0,0,.1)0px 4px 12px;-moz-box-shadow:rgba(0,0,0,.1)0px 4px 12px;box-shadow:rgba(0,0,0,.1)0px 4px 12px}.movie.jsx-69ce11d07b66d856:hover img.jsx-69ce11d07b66d856{-webkit-transform:scale(1.05)translateY(-10px);-moz-transform:scale(1.05)translateY(-10px);-ms-transform:scale(1.05)translateY(-10px);-o-transform:scale(1.05)translateY(-10px);transform:scale(1.05)translateY(-10px)}.movie.jsx-69ce11d07b66d856 h4.jsx-69ce11d07b66d856{font-size:18px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBNkI7QUFDZTtBQUNSOztBQUVwQyxJQUFNSSxPQUFPLEdBQUMsa0NBQWtDO0FBRWpDLFNBQVNDLElBQUksR0FBRzs7O0lBQzdCLElBQTRCSCxHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBL0JJLE1BQU0sR0FBZUosR0FBVSxHQUF6QixFQUFFSyxTQUFTLEdBQUlMLEdBQVUsR0FBZDtJQUN4QkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1gsNFBBQVM7Z0JBQ0RPLE9BQU87Ozs7OytCQUNOQyxLQUFLLENBQ1gscURBQW9ELENBQVUsT0FBUkwsT0FBTyxDQUFFLENBQzlEOzs7K0JBSG1CLFVBSWxCTSxJQUFJLEVBQUU7O3dCQUpKLE9BQVEsYUFBUEYsT0FBTyxDQUlKO3dCQUNSLHFCQUFxQjt3QkFDckJELFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Ozs7OztTQUN4QixJQUFHLENBQUM7S0FDTixFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0oscUJBQ0UsOERBQUNHLEtBQUc7OzswQkFDRiw4REFBQ1IsdURBQUc7Z0JBQUNTLEtBQUssRUFBQyxNQUFNOzs7OztvQkFBRztZQUNuQixDQUFDTixNQUFNLGtCQUFJLDhEQUFDTyxJQUFFOzswQkFBQyxZQUFVOzs7OztvQkFBSztZQUM5QlAsTUFBTSxhQUFOQSxNQUFNLFdBQUssR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxNQUFNLENBQUVRLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO3FDQUNqQiw4REFBQ0osS0FBRzs7OEJBQ0YsNEVBQUNFLElBQUU7O2tDQUFFRSxLQUFLLENBQUNDLGNBQWM7Ozs7OzZCQUFNO21CQUR2QkQsS0FBSyxDQUFDRSxFQUFFOzs7O3lCQUVaO2FBQ1AsQ0FBQzs7Ozs7Ozs7OztZQXNCRSxDQUNOO0NBQ0g7R0E3Q3VCWixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9cIjtcclxuXHJcbmNvbnN0IEFQSV9LRVk9XCJjYTkxZDRmZTU0NWE4MGE1YThmNzJkNjg4MTkyOGY1Y1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIChhc3luYygpPT57XHJcbiAgICAgIGNvbnN0IHtyZXN1bHRzfT1hd2FpdCAoXHJcbiAgICAgICAgYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7QVBJX0tFWX1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgICkuanNvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldE1vdmllcyhyZXN1bHRzKTtcclxuICB9KSgpO1xyXG59LFtdKTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U2VvIHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICAgIHshbW92aWVzICYmIDxoND5Mb2FkaW5nLi4uPC9oND59XHJcbiAgICAgIHttb3ZpZXM/Lm1hcCgobW92aWUpPT4oXHJcbiAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfT5cclxuICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbjogMWZyIDFmcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAubW92aWUgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMSkgMHB4IDRweCAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tb3ZpZTpob3ZlciBpbWd7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAubW92aWUgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZW8iLCJBUElfS0VZIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsInJlc3VsdHMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImg0IiwibWFwIiwibW92aWUiLCJvcmlnaW5hbF90aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});