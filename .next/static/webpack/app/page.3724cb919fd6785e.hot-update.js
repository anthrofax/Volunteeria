"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/ui/jumbotron.tsx":
/*!**********************************!*\
  !*** ./src/app/ui/jumbotron.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Jumbotron() {\n    _s();\n    const jumbotron = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jumbotron border-2 h-[45rem] bg-purple2 transition-all\",\n        ref: jumbotron,\n        onMouseEnter: ()=>{\n            setIsHovered(true);\n        },\n        onMouseLeave: ()=>{\n            setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingBar, {}, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"left\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"right\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Jumbotron, \"TxQD3Z0oSC0VN+Xj7oJqn7seWO4=\");\n_c = Jumbotron;\nfunction SliderButton(param) {\n    let { direction, showed } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        className: \"h-28 w-14 absolute \".concat(direction === \"right\" ? \"right-0\" : \"\", \"  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all \").concat(!showed ? \"opacity-0\" : \"opacity-40\"),\n        children: [\n            direction === \"left\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowBack, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 45,\n                columnNumber: 32\n            }, this),\n            direction === \"right\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 46,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SliderButton;\nfunction LoadingBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black1  h-2 w-[5%]\"\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, this);\n}\n_c2 = LoadingBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Jumbotron\");\n$RefreshReg$(_c1, \"SliderButton\");\n$RefreshReg$(_c2, \"LoadingBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvanVtYm90cm9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNDO0FBQzBCO0FBRW5FLFNBQVNLOztJQUNQLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtRQUNWQyxLQUFLTDtRQUNMTSxjQUFjO1lBQ1pKLGFBQWE7UUFDZjtRQUNBSyxjQUFjO1lBQ1pMLGFBQWE7UUFDZjs7MEJBRUEsOERBQUNNOzs7OzswQkFDRCw4REFBQ0M7Z0JBQWFDLFdBQVU7Z0JBQU9DLFFBQVFWOzs7Ozs7MEJBQ3ZDLDhEQUFDUTtnQkFBYUMsV0FBVTtnQkFBUUMsUUFBUVY7Ozs7Ozs7Ozs7OztBQUc5QztHQXBCU0Y7S0FBQUE7QUF3QlQsU0FBU1UsYUFBYSxLQU1yQjtRQU5xQixFQUNwQkMsU0FBUyxFQUNUQyxNQUFNLEVBSVAsR0FOcUI7SUFPcEIscUJBQ0UsOERBQUNqQixrREFBTUE7UUFDTFUsV0FBVyxzQkFHVCxPQUZBTSxjQUFjLFVBQVUsWUFBWSxJQUNyQyxxRkFFQSxPQURDLENBQUNDLFNBQVMsY0FBYzs7WUFHekJELGNBQWMsd0JBQVUsOERBQUNaLGtIQUFjQTtnQkFBQ2MsTUFBTTs7Ozs7O1lBQzlDRixjQUFjLHlCQUFXLDhEQUFDYixxSEFBaUJBO2dCQUFDZSxNQUFNOzs7Ozs7Ozs7Ozs7QUFHekQ7TUFuQlNIO0FBcUJULFNBQVNEO0lBQ1AscUJBQU8sOERBQUNMO1FBQUlDLFdBQVU7Ozs7OztBQUN4QjtNQUZTSTtBQUlULCtEQUFlVCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvanVtYm90cm9uLnRzeD9hYzUwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImZsb3diaXRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCwgSW9Jb3NBcnJvd0JhY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcblxuZnVuY3Rpb24gSnVtYm90cm9uKCkge1xuICBjb25zdCBqdW1ib3Ryb24gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYm9yZGVyLTIgaC1bNDVyZW1dIGJnLXB1cnBsZTIgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgcmVmPXtqdW1ib3Ryb259XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgc2V0SXNIb3ZlcmVkKHRydWUpO1xuICAgICAgfX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8TG9hZGluZ0JhciAvPlxuICAgICAgPFNsaWRlckJ1dHRvbiBkaXJlY3Rpb249XCJsZWZ0XCIgc2hvd2VkPXtpc0hvdmVyZWR9IC8+XG4gICAgICA8U2xpZGVyQnV0dG9uIGRpcmVjdGlvbj1cInJpZ2h0XCIgc2hvd2VkPXtpc0hvdmVyZWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnR5cGUgZGlyZWN0aW9ucyA9IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG5mdW5jdGlvbiBTbGlkZXJCdXR0b24oe1xuICBkaXJlY3Rpb24sXG4gIHNob3dlZCxcbn06IHtcbiAgZGlyZWN0aW9uOiBkaXJlY3Rpb25zO1xuICBzaG93ZWQ6IGJvb2xlYW47XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgaC0yOCB3LTE0IGFic29sdXRlICR7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiID8gXCJyaWdodC0wXCIgOiBcIlwiXG4gICAgICB9ICB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctYmxhY2syIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOmgtMzYgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgIXNob3dlZCA/IFwib3BhY2l0eS0wXCIgOiBcIm9wYWNpdHktNDBcIlxuICAgICAgfWB9XG4gICAgPlxuICAgICAge2RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgPElvSW9zQXJyb3dCYWNrIHNpemU9ezUwfSAvPn1cbiAgICAgIHtkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiA8SW9Jb3NBcnJvd0ZvcndhcmQgc2l6ZT17NTB9IC8+fVxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2FkaW5nQmFyKCkge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjazEgIGgtMiB3LVs1JV1cIj48L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEp1bWJvdHJvbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIklvSW9zQXJyb3dGb3J3YXJkIiwiSW9Jb3NBcnJvd0JhY2siLCJKdW1ib3Ryb24iLCJqdW1ib3Ryb24iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJMb2FkaW5nQmFyIiwiU2xpZGVyQnV0dG9uIiwiZGlyZWN0aW9uIiwic2hvd2VkIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/jumbotron.tsx\n"));

/***/ })

});