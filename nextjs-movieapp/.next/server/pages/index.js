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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\components\\\\Seo.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\components\\\\Seo.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTZCO0FBRWQsU0FBU0MsR0FBRyxDQUFDLEVBQUNDLEtBQUssR0FBQyxFQUFDO0lBQ2xDLHFCQUNBLDhEQUFDRixrREFBSTtrQkFDSCw0RUFBQ0UsT0FBSzs7Z0JBQUVBLEtBQUs7Z0JBQUMsZ0JBQWM7Ozs7OztnQkFBUTs7Ozs7WUFDL0IsQ0FDTDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWludHJvLy4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8oe3RpdGxlfSl7XHJcbiAgcmV0dXJuIChcclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZXM8L3RpdGxlPlxyXG4gIDwvSGVhZD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJTZW8iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n\n\n\nconst API_KEY = \"ca91d4fe545a80a5a8f72d6881928f5c\";\nfunction Home() {\n    const { 0: movies , 1: setMovies  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const { results  } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();\n            // console.log(data);\n            setMovies(results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            !movies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 19\n            }, this),\n            movies?.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: movie.original_title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, movie.id, false, {\n                    fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\seoji\\\\front-practice\\\\nextjs-intro\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNSO0FBRXBDLE1BQU1HLE9BQU8sR0FBQyxrQ0FBa0M7QUFFakMsU0FBU0MsSUFBSSxHQUFHO0lBQzdCLE1BQU0sS0FBQ0MsTUFBTSxNQUFFQyxTQUFTLE1BQUlMLCtDQUFRLEVBQUU7SUFDdENELGdEQUFTLENBQUMsSUFBSTtRQUNaLENBQUMsVUFBUztZQUNSLE1BQU0sRUFBQ08sT0FBTyxHQUFDLEdBQUMsTUFBTSxDQUNwQixNQUFNQyxLQUFLLENBQ1gsQ0FBQyxtREFBbUQsRUFBRUwsT0FBTyxDQUFDLENBQUMsQ0FDOUQsQ0FDQSxDQUFDTSxJQUFJLEVBQUU7WUFDUixxQkFBcUI7WUFDckJILFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxFQUFFLENBQUM7S0FDTixFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0oscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDUix1REFBRztnQkFBQ1MsS0FBSyxFQUFDLE1BQU07Ozs7O29CQUFHO1lBQ25CLENBQUNOLE1BQU0sa0JBQUksOERBQUNPLElBQUU7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7WUFDOUJQLE1BQU0sRUFBRVEsR0FBRyxDQUFDLENBQUNDLEtBQUssaUJBQ2pCLDhEQUFDSixLQUFHOzhCQUNGLDRFQUFDRSxJQUFFO2tDQUFFRSxLQUFLLENBQUNDLGNBQWM7Ozs7OzRCQUFNO21CQUR2QkQsS0FBSyxDQUFDRSxFQUFFOzs7O3dCQUVaLENBQ047Ozs7OztZQUNFLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1pbnRyby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL1Nlb1wiO1xyXG5cclxuY29uc3QgQVBJX0tFWT1cImNhOTFkNGZlNTQ1YTgwYTVhOGY3MmQ2ODgxOTI4ZjVjXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgKGFzeW5jKCk9PntcclxuICAgICAgY29uc3Qge3Jlc3VsdHN9PWF3YWl0IChcclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElfS0VZfWBcclxuICAgICAgICApXHJcbiAgICAgICAgKS5qc29uKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3VsdHMpO1xyXG4gIH0pKCk7XHJcbn0sW10pO1xyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTZW8gdGl0bGU9XCJIb21lXCIgLz5cclxuICAgICAgeyFtb3ZpZXMgJiYgPGg0PkxvYWRpbmcuLi48L2g0Pn1cclxuICAgICAge21vdmllcz8ubWFwKChtb3ZpZSk9PihcclxuICAgICAgICA8ZGl2IGtleT17bW92aWUuaWR9PlxyXG4gICAgICAgICAgPGg0Pnttb3ZpZS5vcmlnaW5hbF90aXRsZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZW8iLCJBUElfS0VZIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsInJlc3VsdHMiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJ0aXRsZSIsImg0IiwibWFwIiwibW92aWUiLCJvcmlnaW5hbF90aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();