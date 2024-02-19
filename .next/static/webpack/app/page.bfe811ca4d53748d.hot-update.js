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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowBack,IoIosArrowForward!=!react-icons/io */ \"(app-pages-browser)/./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\nconst JumbotronContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction Jumbotron(param) {\n    let { images } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(images[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jumbotron border-0 h-[45rem] bg-white transition-all relative overflow-hidden\",\n        onMouseEnter: ()=>{\n            setIsHovered(true);\n            setIsLoading(false);\n        },\n        onMouseLeave: ()=>{\n            setIsHovered(false);\n            setIsLoading(true);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JumbotronContext.Provider, {\n            value: {\n                images,\n                imageLoaded,\n                setImageLoaded\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: imageLoaded,\n                    quality: 100,\n                    alt: \"Jumbotron image\",\n                    className: \"transition-all absolute duration-1000 z-10\",\n                    fill: true,\n                    sizes: \"100vw\",\n                    style: {\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black opacity-20 absolute top-0 left-0 right-0 bottom-0 z-20\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingBar, {\n                    isLoading: isLoading,\n                    images: images\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                    direction: \"left\",\n                    showed: isHovered\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SliderButton, {\n                    direction: \"right\",\n                    showed: isHovered\n                }, void 0, false, {\n                    fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Jumbotron, \"iIjeRTGobHeXYbBCJub8cbVTdsQ=\");\n_c = Jumbotron;\nfunction SliderButton(param) {\n    let { direction, showed } = param;\n    _s1();\n    const { setImageLoaded, images } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(JumbotronContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        className: \"h-28 w-14 absolute z-20 \".concat(direction === \"right\" ? \"right-0\" : \"\", \"  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all \").concat(!showed ? \"opacity-0\" : \"opacity-40\"),\n        onClick: ()=>{\n            setImageLoaded((prevImage)=>{\n                if (direction === \"right\" && images.findIndex((image)=>image === prevImage) === images.length - 1) return images[0];\n                if (direction === \"left\") {\n                    if (images.findIndex((image)=>image === prevImage) === 0) return images[images.length - 1];\n                    return images[images.findIndex((image)=>image === prevImage) - 1];\n                }\n                return images[images.findIndex((image)=>image === prevImage) + 1];\n            });\n        },\n        children: [\n            direction === \"left\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowBack, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 99,\n                columnNumber: 32\n            }, this),\n            direction === \"right\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowBack_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowForward, {\n                size: 50\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n                lineNumber: 100,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s1(SliderButton, \"B+bY2R4Iz/JxEHOPPkl6GB1bsuI=\");\n_c1 = SliderButton;\nfunction LoadingBar(param) {\n    let { isLoading, images } = param;\n    _s2();\n    const { setImageLoaded } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(JumbotronContext);\n    const [loadingProgress, setLoadingProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    //   const loadingProgressString = loadingProgress.toString();\n    const loadingBar = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        const interval = setInterval(function() {\n            if (loadingProgress === 100) {\n                loadingBar.current.style.opacity = \"0\";\n                setLoadingProgress(0);\n                setImageLoaded((prevImage)=>{\n                    if (images.findIndex((image)=>image === prevImage) === images.length - 1) return images[0];\n                    return images[images.findIndex((image)=>image === prevImage) + 1];\n                });\n                loadingBar.current.style.opacity = \"1\";\n            }\n            if (isLoading) setLoadingProgress((value)=>value + 1);\n            //   console.log(loadingBar.current)\n            loadingBar.current.style.width = \"\".concat(loadingProgress, \"vw\");\n        }, 100);\n        return ()=>clearInterval(interval);\n    }, [\n        loadingProgress,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black2 rounded-lg  h-2 transition-all z-20 absolute\",\n        ref: loadingBar\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/Desktop/Volunteeria/src/app/ui/jumbotron.tsx\",\n        lineNumber: 149,\n        columnNumber: 5\n    }, this);\n}\n_s2(LoadingBar, \"utmk6tgRCfQWxCvsUAPTkAGWKu4=\");\n_c2 = LoadingBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jumbotron);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Jumbotron\");\n$RefreshReg$(_c1, \"SliderButton\");\n$RefreshReg$(_c2, \"LoadingBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvanVtYm90cm9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFVekI7QUFDb0Q7QUFDcEM7QUFFL0IsTUFBTVMsaUNBQW1CSixvREFBYUEsQ0FBQyxDQUFDO0FBRXhDLFNBQVNLLFVBQVUsS0FBZ0M7UUFBaEMsRUFBRUMsTUFBTSxFQUF3QixHQUFoQzs7SUFDakIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUNPLE1BQU0sQ0FBQyxFQUFFO0lBRXhELHFCQUNFLDhEQUFDTztRQUNDQyxXQUFVO1FBQ1ZDLGNBQWM7WUFDWlAsYUFBYTtZQUNiRSxhQUFhO1FBQ2Y7UUFDQU0sY0FBYztZQUNaUixhQUFhO1lBQ2JFLGFBQWE7UUFDZjtrQkFFQSw0RUFBQ04saUJBQWlCYSxRQUFRO1lBQ3hCQyxPQUFPO2dCQUFFWjtnQkFBUUs7Z0JBQWFDO1lBQWU7OzhCQUU3Qyw4REFBQ1Qsa0RBQUtBO29CQUNKZ0IsS0FBS1I7b0JBQ0xTLFNBQVM7b0JBQ1RDLEtBQUk7b0JBQ0pQLFdBQVU7b0JBQ1ZRLElBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLE9BQU87d0JBQUVDLFdBQVc7b0JBQVE7Ozs7Ozs4QkFFOUIsOERBQUNaO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNZO29CQUFXakIsV0FBV0E7b0JBQVdILFFBQVFBOzs7Ozs7OEJBQzFDLDhEQUFDcUI7Ozs7OzhCQUNELDhEQUFDQztvQkFBYUMsV0FBVTtvQkFBT0MsUUFBUXZCOzs7Ozs7OEJBQ3ZDLDhEQUFDcUI7b0JBQWFDLFdBQVU7b0JBQVFDLFFBQVF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0FyQ1NGO0tBQUFBO0FBeUNULFNBQVN1QixhQUFhLEtBTXJCO1FBTnFCLEVBQ3BCQyxTQUFTLEVBQ1RDLE1BQU0sRUFJUCxHQU5xQjs7SUFPcEIsTUFBTSxFQUFFbEIsY0FBYyxFQUFFTixNQUFNLEVBQUUsR0FBR1YsaURBQVVBLENBQUNRO0lBRTlDLHFCQUNFLDhEQUFDVCxrREFBTUE7UUFDTG1CLFdBQVcsMkJBR1QsT0FGQWUsY0FBYyxVQUFVLFlBQVksSUFDckMscUZBRUEsT0FEQyxDQUFDQyxTQUFTLGNBQWM7UUFFMUJDLFNBQVM7WUFDUG5CLGVBQWUsQ0FBQ29CO2dCQUNkLElBQ0VILGNBQWMsV0FDZHZCLE9BQU8yQixTQUFTLENBQUMsQ0FBQ0MsUUFBa0JBLFVBQVVGLGVBQzVDMUIsT0FBTzZCLE1BQU0sR0FBRyxHQUVsQixPQUFPN0IsTUFBTSxDQUFDLEVBQUU7Z0JBRWxCLElBQUl1QixjQUFjLFFBQVE7b0JBQ3hCLElBQUl2QixPQUFPMkIsU0FBUyxDQUFDLENBQUNDLFFBQWtCQSxVQUFVRixlQUFlLEdBQy9ELE9BQU8xQixNQUFNLENBQUNBLE9BQU82QixNQUFNLEdBQUcsRUFBRTtvQkFFbEMsT0FBTzdCLE1BQU0sQ0FDWEEsT0FBTzJCLFNBQVMsQ0FBQyxDQUFDQyxRQUFrQkEsVUFBVUYsYUFBYSxFQUM1RDtnQkFDSDtnQkFFQSxPQUFPMUIsTUFBTSxDQUNYQSxPQUFPMkIsU0FBUyxDQUFDLENBQUNDLFFBQWtCQSxVQUFVRixhQUFhLEVBQzVEO1lBQ0g7UUFDRjs7WUFFQ0gsY0FBYyx3QkFBVSw4REFBQzNCLGtIQUFjQTtnQkFBQ2tDLE1BQU07Ozs7OztZQUM5Q1AsY0FBYyx5QkFBVyw4REFBQzVCLHFIQUFpQkE7Z0JBQUNtQyxNQUFNOzs7Ozs7Ozs7Ozs7QUFHekQ7SUE1Q1NSO01BQUFBO0FBOENULFNBQVNGLFdBQVcsS0FNbkI7UUFObUIsRUFDbEJqQixTQUFTLEVBQ1RILE1BQU0sRUFJUCxHQU5tQjs7SUFPbEIsTUFBTSxFQUFFTSxjQUFjLEVBQUUsR0FBR2hCLGlEQUFVQSxDQUFDUTtJQUN0QyxNQUFNLENBQUNpQyxpQkFBaUJDLG1CQUFtQixHQUFHdkMsK0NBQVFBLENBQUM7SUFDdkQsOERBQThEO0lBQzlELE1BQU13QyxhQUFhekMsNkNBQU1BO0lBRXpCRCxnREFBU0EsQ0FDUDtRQUNFLE1BQU0yQyxXQUFXQyxZQUFZO1lBQzNCLElBQUlKLG9CQUFvQixLQUFLO2dCQUMzQkUsV0FBV0csT0FBTyxDQUFDbEIsS0FBSyxDQUFDbUIsT0FBTyxHQUFHO2dCQUNuQ0wsbUJBQW1CO2dCQUNuQjFCLGVBQWUsQ0FBQ29CO29CQUNkLElBQ0UxQixPQUFPMkIsU0FBUyxDQUFDLENBQUNDLFFBQWtCQSxVQUFVRixlQUM5QzFCLE9BQU82QixNQUFNLEdBQUcsR0FFaEIsT0FBTzdCLE1BQU0sQ0FBQyxFQUFFO29CQUVsQixPQUFPQSxNQUFNLENBQ1hBLE9BQU8yQixTQUFTLENBQUMsQ0FBQ0MsUUFBa0JBLFVBQVVGLGFBQWEsRUFDNUQ7Z0JBQ0g7Z0JBQ0FPLFdBQVdHLE9BQU8sQ0FBQ2xCLEtBQUssQ0FBQ21CLE9BQU8sR0FBRztZQUNyQztZQUVBLElBQUlsQyxXQUFXNkIsbUJBQW1CLENBQUNwQixRQUFVQSxRQUFRO1lBQ3JELG9DQUFvQztZQUVwQ3FCLFdBQVdHLE9BQU8sQ0FBQ2xCLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxHQUFtQixPQUFoQlAsaUJBQWdCO1FBQ3RELEdBQUc7UUFFSCxPQUFPLElBQU1RLGNBQWNMO0lBQzdCLEdBQ0E7UUFBQ0g7UUFBaUI1QjtLQUFVO0lBRzlCLHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFZO1FBQ1pnQyxLQUFLUDs7Ozs7O0FBR1g7SUFqRFNiO01BQUFBO0FBbURULCtEQUFlckIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VpL2p1bWJvdHJvbi50c3g/YWM1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgRGlzcGF0Y2gsXG4gIE11dGFibGVSZWZPYmplY3QsXG4gIFNldFN0YXRlQWN0aW9uLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG4gIGNyZWF0ZUNvbnRleHQsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQsIElvSW9zQXJyb3dCYWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgSnVtYm90cm9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5mdW5jdGlvbiBKdW1ib3Ryb24oeyBpbWFnZXMgfTogeyBpbWFnZXM6IHN0cmluZ1tdIH0pIHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGltYWdlc1swXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYm9yZGVyLTAgaC1bNDVyZW1dIGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgc2V0SXNIb3ZlcmVkKHRydWUpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxKdW1ib3Ryb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7IGltYWdlcywgaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2VMb2FkZWR9XG4gICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgIGFsdD1cIkp1bWJvdHJvbiBpbWFnZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYWJzb2x1dGUgZHVyYXRpb24tMTAwMCB6LTEwXCJcbiAgICAgICAgICBmaWxsXG4gICAgICAgICAgc2l6ZXM9XCIxMDB2d1wiXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBvcGFjaXR5LTIwIGFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHotMjBcIj48L2Rpdj5cbiAgICAgICAgPExvYWRpbmdCYXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGltYWdlcz17aW1hZ2VzfSAvPlxuICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgPFNsaWRlckJ1dHRvbiBkaXJlY3Rpb249XCJsZWZ0XCIgc2hvd2VkPXtpc0hvdmVyZWR9IC8+XG4gICAgICAgIDxTbGlkZXJCdXR0b24gZGlyZWN0aW9uPVwicmlnaHRcIiBzaG93ZWQ9e2lzSG92ZXJlZH0gLz5cbiAgICAgIDwvSnVtYm90cm9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxudHlwZSBkaXJlY3Rpb25zID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG5cbmZ1bmN0aW9uIFNsaWRlckJ1dHRvbih7XG4gIGRpcmVjdGlvbixcbiAgc2hvd2VkLFxufToge1xuICBkaXJlY3Rpb246IGRpcmVjdGlvbnM7XG4gIHNob3dlZDogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgeyBzZXRJbWFnZUxvYWRlZCwgaW1hZ2VzIH0gPSB1c2VDb250ZXh0KEp1bWJvdHJvbkNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgaC0yOCB3LTE0IGFic29sdXRlIHotMjAgJHtcbiAgICAgICAgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgPyBcInJpZ2h0LTBcIiA6IFwiXCJcbiAgICAgIH0gIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBiZy1ibGFjazIgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6aC0zNiB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAhc2hvd2VkID8gXCJvcGFjaXR5LTBcIiA6IFwib3BhY2l0eS00MFwiXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0SW1hZ2VMb2FkZWQoKHByZXZJbWFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiZcbiAgICAgICAgICAgIGltYWdlcy5maW5kSW5kZXgoKGltYWdlOiBzdHJpbmcpID0+IGltYWdlID09PSBwcmV2SW1hZ2UpID09PVxuICAgICAgICAgICAgICBpbWFnZXMubGVuZ3RoIC0gMVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBpbWFnZXNbMF07XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgaWYgKGltYWdlcy5maW5kSW5kZXgoKGltYWdlOiBzdHJpbmcpID0+IGltYWdlID09PSBwcmV2SW1hZ2UpID09PSAwKVxuICAgICAgICAgICAgICByZXR1cm4gaW1hZ2VzW2ltYWdlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgcmV0dXJuIGltYWdlc1tcbiAgICAgICAgICAgICAgaW1hZ2VzLmZpbmRJbmRleCgoaW1hZ2U6IHN0cmluZykgPT4gaW1hZ2UgPT09IHByZXZJbWFnZSkgLSAxXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbWFnZXNbXG4gICAgICAgICAgICBpbWFnZXMuZmluZEluZGV4KChpbWFnZTogc3RyaW5nKSA9PiBpbWFnZSA9PT0gcHJldkltYWdlKSArIDFcbiAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgPElvSW9zQXJyb3dCYWNrIHNpemU9ezUwfSAvPn1cbiAgICAgIHtkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiA8SW9Jb3NBcnJvd0ZvcndhcmQgc2l6ZT17NTB9IC8+fVxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2FkaW5nQmFyKHtcbiAgaXNMb2FkaW5nLFxuICBpbWFnZXMsXG59OiB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgaW1hZ2VzOiBzdHJpbmdbXTtcbn0pIHtcbiAgY29uc3QgeyBzZXRJbWFnZUxvYWRlZCB9ID0gdXNlQ29udGV4dChKdW1ib3Ryb25Db250ZXh0KTtcbiAgY29uc3QgW2xvYWRpbmdQcm9ncmVzcywgc2V0TG9hZGluZ1Byb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICAvLyAgIGNvbnN0IGxvYWRpbmdQcm9ncmVzc1N0cmluZyA9IGxvYWRpbmdQcm9ncmVzcy50b1N0cmluZygpO1xuICBjb25zdCBsb2FkaW5nQmFyID0gdXNlUmVmKCkgYXMgTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG5cbiAgdXNlRWZmZWN0KFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobG9hZGluZ1Byb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICBsb2FkaW5nQmFyLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHNldExvYWRpbmdQcm9ncmVzcygwKTtcbiAgICAgICAgICBzZXRJbWFnZUxvYWRlZCgocHJldkltYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW1hZ2VzLmZpbmRJbmRleCgoaW1hZ2U6IHN0cmluZykgPT4gaW1hZ2UgPT09IHByZXZJbWFnZSkgPT09XG4gICAgICAgICAgICAgIGltYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBpbWFnZXNbMF07XG5cbiAgICAgICAgICAgIHJldHVybiBpbWFnZXNbXG4gICAgICAgICAgICAgIGltYWdlcy5maW5kSW5kZXgoKGltYWdlOiBzdHJpbmcpID0+IGltYWdlID09PSBwcmV2SW1hZ2UpICsgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsb2FkaW5nQmFyLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTG9hZGluZykgc2V0TG9hZGluZ1Byb2dyZXNzKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhsb2FkaW5nQmFyLmN1cnJlbnQpXG5cbiAgICAgICAgbG9hZGluZ0Jhci5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7bG9hZGluZ1Byb2dyZXNzfXZ3YDtcbiAgICAgIH0sIDEwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9LFxuICAgIFtsb2FkaW5nUHJvZ3Jlc3MsIGlzTG9hZGluZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGJnLWJsYWNrMiByb3VuZGVkLWxnICBoLTIgdHJhbnNpdGlvbi1hbGwgei0yMCBhYnNvbHV0ZWB9XG4gICAgICByZWY9e2xvYWRpbmdCYXJ9XG4gICAgPjwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBKdW1ib3Ryb247XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIklvSW9zQXJyb3dGb3J3YXJkIiwiSW9Jb3NBcnJvd0JhY2siLCJJbWFnZSIsIkp1bWJvdHJvbkNvbnRleHQiLCJKdW1ib3Ryb24iLCJpbWFnZXMiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNyYyIsInF1YWxpdHkiLCJhbHQiLCJmaWxsIiwic2l6ZXMiLCJzdHlsZSIsIm9iamVjdEZpdCIsIkxvYWRpbmdCYXIiLCJoMSIsIlNsaWRlckJ1dHRvbiIsImRpcmVjdGlvbiIsInNob3dlZCIsIm9uQ2xpY2siLCJwcmV2SW1hZ2UiLCJmaW5kSW5kZXgiLCJpbWFnZSIsImxlbmd0aCIsInNpemUiLCJsb2FkaW5nUHJvZ3Jlc3MiLCJzZXRMb2FkaW5nUHJvZ3Jlc3MiLCJsb2FkaW5nQmFyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJvcGFjaXR5Iiwid2lkdGgiLCJjbGVhckludGVydmFsIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/jumbotron.tsx\n"));

/***/ })

});