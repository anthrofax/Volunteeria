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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Jumbotron() {\n    _s();\n    const jumbotron = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jumbotron border-2 h-[45rem] bg-purple2 transition-all\",\n        ref: jumbotron,\n        onMouseEnter: ()=>{\n            setIsHovered(true);\n        },\n        onMouseLeave: ()=>{\n            setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingBar, {}, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"left\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"right\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Jumbotron, \"TxQD3Z0oSC0VN+Xj7oJqn7seWO4=\");\n_c = Jumbotron;\nfunction SliderButton(param) {\n    let { direction, showed } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        className: \"h-28 w-14 absolute \".concat(direction === \"right\" ? \"right-0\" : \"\", \"  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all \").concat(!showed ? \"opacity-0\" : \"opacity-40\"),\n        children: [\n            direction === \"left\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowBack, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 37,\n                columnNumber: 32\n            }, this),\n            direction === \"right\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 38,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SliderButton;\nfunction LoadingBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black1 w-full h-3\"\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_c2 = LoadingBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Jumbotron\");\n$RefreshReg$(_c1, \"SliderButton\");\n$RefreshReg$(_c2, \"LoadingBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvanVtYm90cm9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNDO0FBQzBCO0FBRW5FLFNBQVNLOztJQUNQLE1BQU1DLFlBQVlMLDZDQUFNQSxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtRQUNWQyxLQUFLTDtRQUNMTSxjQUFjO1lBQ1pKLGFBQWE7UUFDZjtRQUNBSyxjQUFjO1lBQ1pMLGFBQWE7UUFDZjs7MEJBRUUsOERBQUNNOzs7OzswQkFDSCw4REFBQ0M7Z0JBQWFDLFdBQVU7Z0JBQU9DLFFBQVFWOzs7Ozs7MEJBQ3ZDLDhEQUFDUTtnQkFBYUMsV0FBVTtnQkFBUUMsUUFBUVY7Ozs7Ozs7Ozs7OztBQUc5QztHQXBCU0Y7S0FBQUE7QUF3QlQsU0FBU1UsYUFBYSxLQUFpRTtRQUFqRSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBOEMsR0FBakU7SUFDcEIscUJBQ0UsOERBQUNqQixrREFBTUE7UUFDTFUsV0FBVyxzQkFFeUUsT0FEbEZNLGNBQWMsVUFBVSxZQUFZLElBQ3JDLHFGQUF3SCxPQUFyQyxDQUFDQyxTQUFTLGNBQWM7O1lBRTNHRCxjQUFjLHdCQUFVLDhEQUFDWixrSEFBY0E7Z0JBQUNjLE1BQU07Ozs7OztZQUM5Q0YsY0FBYyx5QkFBVyw4REFBQ2IscUhBQWlCQTtnQkFBQ2UsTUFBTTs7Ozs7Ozs7Ozs7O0FBR3pEO01BWFNIO0FBYVQsU0FBU0Q7SUFDTCxxQkFDSSw4REFBQ0w7UUFBSUMsV0FBVTs7Ozs7O0FBSXZCO01BTlNJO0FBUVQsK0RBQWVULFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9qdW1ib3Ryb24udHN4P2FjNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZmxvd2JpdGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkLCBJb0lvc0Fycm93QmFjayB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuXG5mdW5jdGlvbiBKdW1ib3Ryb24oKSB7XG4gIGNvbnN0IGp1bWJvdHJvbiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImp1bWJvdHJvbiBib3JkZXItMiBoLVs0NXJlbV0gYmctcHVycGxlMiB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICByZWY9e2p1bWJvdHJvbn1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICBzZXRJc0hvdmVyZWQodHJ1ZSk7XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgIHNldElzSG92ZXJlZChmYWxzZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgICAgPExvYWRpbmdCYXIvPlxuICAgICAgPFNsaWRlckJ1dHRvbiBkaXJlY3Rpb249XCJsZWZ0XCIgc2hvd2VkPXtpc0hvdmVyZWR9Lz5cbiAgICAgIDxTbGlkZXJCdXR0b24gZGlyZWN0aW9uPVwicmlnaHRcIiBzaG93ZWQ9e2lzSG92ZXJlZH0vPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIGRpcmVjdGlvbnMgPSBcImxlZnRcIiB8IFwicmlnaHRcIjtcblxuZnVuY3Rpb24gU2xpZGVyQnV0dG9uKHsgZGlyZWN0aW9uLCBzaG93ZWQgfTogeyBkaXJlY3Rpb246IGRpcmVjdGlvbnMsIHNob3dlZDogYm9vbGVhbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgaC0yOCB3LTE0IGFic29sdXRlICR7XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiID8gXCJyaWdodC0wXCIgOiBcIlwiXG4gICAgICB9ICB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctYmxhY2syIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOmgtMzYgdHJhbnNpdGlvbi1hbGwgJHshc2hvd2VkID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS00MCd9YH1cbiAgICA+XG4gICAgICB7ZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiA8SW9Jb3NBcnJvd0JhY2sgc2l6ZT17NTB9IC8+fVxuICAgICAge2RpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIDxJb0lvc0Fycm93Rm9yd2FyZCBzaXplPXs1MH0gLz59XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExvYWRpbmdCYXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjazEgdy1mdWxsIGgtM1wiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVtYm90cm9uO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVJlZiIsInVzZVN0YXRlIiwiSW9Jb3NBcnJvd0ZvcndhcmQiLCJJb0lvc0Fycm93QmFjayIsIkp1bWJvdHJvbiIsImp1bWJvdHJvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIkxvYWRpbmdCYXIiLCJTbGlkZXJCdXR0b24iLCJkaXJlY3Rpb24iLCJzaG93ZWQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/jumbotron.tsx\n"));

/***/ })

});