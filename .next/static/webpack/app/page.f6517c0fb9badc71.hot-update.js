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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nlet loadingProgress = 0;\nfunction Jumbotron() {\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jumbotron border-2 h-[45rem] bg-purple2 transition-all\",\n        onMouseEnter: ()=>{\n            setIsHovered(true);\n        },\n        onMouseLeave: ()=>{\n            setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingBar, {}, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"left\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                direction: \"right\",\n                showed: isHovered\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(Jumbotron, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = Jumbotron;\nfunction SliderButton(param) {\n    let { direction, showed } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        className: \"h-28 w-14 absolute \".concat(direction === \"right\" ? \"right-0\" : \"\", \"  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all \").concat(!showed ? \"opacity-0\" : \"opacity-40\"),\n        children: [\n            direction === \"left\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowBack, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 45,\n                columnNumber: 32\n            }, this),\n            direction === \"right\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowForward, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 46,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SliderButton;\nfunction LoadingBar() {\n    _s1();\n    const [loadingProgress, setLoadingProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    //   const loadingProgressString = loadingProgress.toString();\n    const loadingBar = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        const interval = setInterval(function() {\n            if (loadingProgress === 100) {\n                loadingBar.current.style.trasitionDuration = \"0ms\";\n                setLoadingProgress(0);\n                loadingBar.current.style.trasitionDuration = \"150ms\";\n            }\n            setLoadingProgress((value)=>value + 1);\n            //   console.log(loadingBar.current)\n            loadingBar.current.style.width = \"\".concat(loadingProgress, \"vw\");\n        }, 100);\n        return ()=>clearInterval(interval);\n    }, [\n        loadingProgress\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black2 rounded-lg  h-2 transition-all\",\n        ref: loadingBar\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s1(LoadingBar, \"3XLen2a75BRcZ7qkbuG7BWlpxew=\");\n_c2 = LoadingBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Jumbotron\");\n$RefreshReg$(_c1, \"SliderButton\");\n$RefreshReg$(_c2, \"LoadingBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvanVtYm90cm9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNZO0FBQ2U7QUFFbkUsSUFBSU0sa0JBQWtCO0FBRXRCLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtRQUNWQyxjQUFjO1lBQ1pILGFBQWE7UUFDZjtRQUNBSSxjQUFjO1lBQ1pKLGFBQWE7UUFDZjs7MEJBRUEsOERBQUNLOzs7OzswQkFDRCw4REFBQ0M7Z0JBQWFDLFdBQVU7Z0JBQU9DLFFBQVFUOzs7Ozs7MEJBQ3ZDLDhEQUFDTztnQkFBYUMsV0FBVTtnQkFBUUMsUUFBUVQ7Ozs7Ozs7Ozs7OztBQUc5QztHQWxCU0Q7S0FBQUE7QUFzQlQsU0FBU1EsYUFBYSxLQU1yQjtRQU5xQixFQUNwQkMsU0FBUyxFQUNUQyxNQUFNLEVBSVAsR0FOcUI7SUFPcEIscUJBQ0UsOERBQUNqQixrREFBTUE7UUFDTFcsV0FBVyxzQkFHVCxPQUZBSyxjQUFjLFVBQVUsWUFBWSxJQUNyQyxxRkFFQSxPQURDLENBQUNDLFNBQVMsY0FBYzs7WUFHekJELGNBQWMsd0JBQVUsOERBQUNYLGtIQUFjQTtnQkFBQ2EsTUFBTTs7Ozs7O1lBQzlDRixjQUFjLHlCQUFXLDhEQUFDWixxSEFBaUJBO2dCQUFDYyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHekQ7TUFuQlNIO0FBcUJULFNBQVNEOztJQUNQLE1BQU0sQ0FBQ1IsaUJBQWlCYSxtQkFBbUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZELDhEQUE4RDtJQUM5RCxNQUFNaUIsYUFBYWxCLDZDQUFNQSxDQUFDO0lBRTFCRCxnREFBU0EsQ0FDUDtRQUNFLE1BQU1vQixXQUFXQyxZQUFZO1lBQzNCLElBQUloQixvQkFBb0IsS0FBSztnQkFDM0JjLFdBQVdHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxpQkFBaUIsR0FBRztnQkFDN0NOLG1CQUFtQjtnQkFDbkJDLFdBQVdHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxpQkFBaUIsR0FBRztZQUMvQztZQUVBTixtQkFBbUIsQ0FBQ08sUUFBVUEsUUFBUTtZQUN0QyxvQ0FBb0M7WUFFcENOLFdBQVdHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRyxLQUFLLEdBQUcsR0FBbUIsT0FBaEJyQixpQkFBZ0I7UUFDdEQsR0FBRztRQUVILE9BQU8sSUFBTXNCLGNBQWNQO0lBQzdCLEdBQ0E7UUFBQ2Y7S0FBZ0I7SUFHbkIscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQVk7UUFDWmtCLEtBQUtUOzs7Ozs7QUFHWDtJQS9CU047TUFBQUE7QUFpQ1QsK0RBQWVQLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9qdW1ib3Ryb24udHN4P2FjNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZmxvd2JpdGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQsIElvSW9zQXJyb3dCYWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbmxldCBsb2FkaW5nUHJvZ3Jlc3MgPSAwO1xuXG5mdW5jdGlvbiBKdW1ib3Ryb24oKSB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYm9yZGVyLTIgaC1bNDVyZW1dIGJnLXB1cnBsZTIgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgIHNldElzSG92ZXJlZCh0cnVlKTtcbiAgICAgIH19XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgc2V0SXNIb3ZlcmVkKGZhbHNlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExvYWRpbmdCYXIgLz5cbiAgICAgIDxTbGlkZXJCdXR0b24gZGlyZWN0aW9uPVwibGVmdFwiIHNob3dlZD17aXNIb3ZlcmVkfSAvPlxuICAgICAgPFNsaWRlckJ1dHRvbiBkaXJlY3Rpb249XCJyaWdodFwiIHNob3dlZD17aXNIb3ZlcmVkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG50eXBlIGRpcmVjdGlvbnMgPSBcImxlZnRcIiB8IFwicmlnaHRcIjtcblxuZnVuY3Rpb24gU2xpZGVyQnV0dG9uKHtcbiAgZGlyZWN0aW9uLFxuICBzaG93ZWQsXG59OiB7XG4gIGRpcmVjdGlvbjogZGlyZWN0aW9ucztcbiAgc2hvd2VkOiBib29sZWFuO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGNsYXNzTmFtZT17YGgtMjggdy0xNCBhYnNvbHV0ZSAke1xuICAgICAgICBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiA/IFwicmlnaHQtMFwiIDogXCJcIlxuICAgICAgfSAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGJnLWJsYWNrMiBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpoLTM2IHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICFzaG93ZWQgPyBcIm9wYWNpdHktMFwiIDogXCJvcGFjaXR5LTQwXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIHtkaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIDxJb0lvc0Fycm93QmFjayBzaXplPXs1MH0gLz59XG4gICAgICB7ZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgPElvSW9zQXJyb3dGb3J3YXJkIHNpemU9ezUwfSAvPn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTG9hZGluZ0JhcigpIHtcbiAgY29uc3QgW2xvYWRpbmdQcm9ncmVzcywgc2V0TG9hZGluZ1Byb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICAvLyAgIGNvbnN0IGxvYWRpbmdQcm9ncmVzc1N0cmluZyA9IGxvYWRpbmdQcm9ncmVzcy50b1N0cmluZygpO1xuICBjb25zdCBsb2FkaW5nQmFyID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdChcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGxvYWRpbmdQcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICAgICAgbG9hZGluZ0Jhci5jdXJyZW50LnN0eWxlLnRyYXNpdGlvbkR1cmF0aW9uID0gXCIwbXNcIjtcbiAgICAgICAgICBzZXRMb2FkaW5nUHJvZ3Jlc3MoMCk7XG4gICAgICAgICAgbG9hZGluZ0Jhci5jdXJyZW50LnN0eWxlLnRyYXNpdGlvbkR1cmF0aW9uID0gXCIxNTBtc1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0TG9hZGluZ1Byb2dyZXNzKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhsb2FkaW5nQmFyLmN1cnJlbnQpXG5cbiAgICAgICAgbG9hZGluZ0Jhci5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7bG9hZGluZ1Byb2dyZXNzfXZ3YDtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LFxuICAgIFtsb2FkaW5nUHJvZ3Jlc3NdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BiZy1ibGFjazIgcm91bmRlZC1sZyAgaC0yIHRyYW5zaXRpb24tYWxsYH1cbiAgICAgIHJlZj17bG9hZGluZ0Jhcn1cbiAgICA+PC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEp1bWJvdHJvbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIklvSW9zQXJyb3dGb3J3YXJkIiwiSW9Jb3NBcnJvd0JhY2siLCJsb2FkaW5nUHJvZ3Jlc3MiLCJKdW1ib3Ryb24iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJMb2FkaW5nQmFyIiwiU2xpZGVyQnV0dG9uIiwiZGlyZWN0aW9uIiwic2hvd2VkIiwic2l6ZSIsInNldExvYWRpbmdQcm9ncmVzcyIsImxvYWRpbmdCYXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudCIsInN0eWxlIiwidHJhc2l0aW9uRHVyYXRpb24iLCJ2YWx1ZSIsIndpZHRoIiwiY2xlYXJJbnRlcnZhbCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/jumbotron.tsx\n"));

/***/ })

});