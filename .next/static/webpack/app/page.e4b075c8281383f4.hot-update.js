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

/***/ "(app-pages-browser)/./app/components/Translate.tsx":
/*!**************************************!*\
  !*** ./app/components/Translate.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Listbox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/listbox/listbox.js\");\n/* harmony import */ var _barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Listbox,Transition!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDownIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDownIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst languageOptions = [\n    {\n        id: 1,\n        name: \"EN\",\n        available: true\n    },\n    {\n        id: 2,\n        name: \"ESP\",\n        available: true\n    },\n    {\n        id: 3,\n        name: \"POR\",\n        available: true\n    },\n    {\n        id: 4,\n        name: \"RU\",\n        available: false\n    }\n];\nconst TranslateBox = ()=>{\n    _s();\n    const [selectedoption, setSelectedoption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(languageOptions[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {\n            value: selectedoption,\n            onChange: setSelectedoption,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {\n                            className: \"relative h-12 w-full cursor-default font-medium rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm\",\n                            children: selectedoption.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDownIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-4 w-4 text-white absolute right-4 top-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                    leave: \"transition ease-in duration-100\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {\n                        className: \"absolute mt-1 max-h-60 w-[46%] lg:w-[80%] overflow-auto rounded-md bg-white py-1 text-base font-medium shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm\",\n                        children: languageOptions.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_Transition_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {\n                                className: (param)=>{\n                                    let { active } = param;\n                                    return \"relative font-medium cursor-default select-none py-2 pl-10 pr-4 \".concat(active ? \"bg-indigo-800 text-white\" : \"text-slate-900\");\n                                },\n                                value: option,\n                                disabled: !option.available,\n                                children: option.name\n                            }, option.id, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\components\\\\Translate.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TranslateBox, \"85yIkhD8PimPDPff7lGhm3wHyIU=\");\n_c = TranslateBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslateBox);\nvar _c;\n$RefreshReg$(_c, \"TranslateBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RyYW5zbGF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzJDO0FBQ2E7QUFDSTtBQUU1RCxNQUFNSyxrQkFBa0I7SUFDcEI7UUFBRUMsSUFBSTtRQUFHQyxNQUFNO1FBQU1DLFdBQVc7SUFBSztJQUNyQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBT0MsV0FBVztJQUFLO0lBQ3RDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFPQyxXQUFXO0lBQUs7SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQU1DLFdBQVc7SUFBTTtDQUN6QztBQUVELE1BQU1DLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUNLLGVBQWUsQ0FBQyxFQUFFO0lBQ3ZFLHFCQUNJLDhEQUFDTztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDWCwrRkFBT0E7WUFBQ1ksT0FBT0o7WUFBZ0JLLFVBQVVKOzs4QkFDdEMsOERBQUNDO29CQUFRQyxXQUFVOztzQ0FDZiw4REFBQ1gsK0ZBQU9BLENBQUNjLE1BQU07NEJBQUNILFdBQVU7c0NBQWlTSCxlQUFlSCxJQUFJOzs7Ozs7c0NBQzlVLDhEQUFDSCx1R0FBZUE7NEJBQUNTLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFM0IsOERBQUNWLGtHQUFVQTtvQkFDUGMsSUFBSWhCLDJDQUFRQTtvQkFDWmlCLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLFNBQVE7OEJBRVIsNEVBQUNsQiwrRkFBT0EsQ0FBQ21CLE9BQU87d0JBQUNSLFdBQVU7a0NBQ3RCUixnQkFBZ0JpQixHQUFHLENBQUMsQ0FBQ0MsdUJBQ3RCLDhEQUFDckIsK0ZBQU9BLENBQUNzQixNQUFNO2dDQUNYWCxXQUFXO3dDQUFDLEVBQUVZLE1BQU0sRUFBRTsyQ0FDdEIsbUVBRUMsT0FEREEsU0FBUyw2QkFBNkI7Z0NBQ3JDO2dDQUdEWCxPQUFPUztnQ0FDUEcsVUFBVSxDQUFDSCxPQUFPZixTQUFTOzBDQUUxQmUsT0FBT2hCLElBQUk7K0JBSlBnQixPQUFPakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZOUM7R0FuQ01HO0tBQUFBO0FBcUNOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RyYW5zbGF0ZS50c3g/YmQxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdGJveCwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCJFTlwiLCBhdmFpbGFibGU6IHRydWUgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiRVNQXCIsIGF2YWlsYWJsZTogdHJ1ZSB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCJQT1JcIiwgYXZhaWxhYmxlOiB0cnVlIH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcIlJVXCIsIGF2YWlsYWJsZTogZmFsc2UgfSxcclxuXVxyXG5cclxuY29uc3QgVHJhbnNsYXRlQm94ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkb3B0aW9uLCBzZXRTZWxlY3RlZG9wdGlvbl0gPSB1c2VTdGF0ZShsYW5ndWFnZU9wdGlvbnNbMF0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTEyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0Ym94IHZhbHVlPXtzZWxlY3RlZG9wdGlvbn0gb25DaGFuZ2U9e3NldFNlbGVjdGVkb3B0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Rib3guQnV0dG9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTIgdy1mdWxsIGN1cnNvci1kZWZhdWx0IGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgYmctdHJhbnNwYXJlbnQgcHktMiBwbC0zIHByLTEwIHRleHQtbGVmdCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLWluZGlnby01MDAgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlLzc1IGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LW9yYW5nZS0zMDAgc206dGV4dC1zbVwiPntzZWxlY3RlZG9wdGlvbi5uYW1lfTwvTGlzdGJveC5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtd2hpdGUgYWJzb2x1dGUgcmlnaHQtNCB0b3AtNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Ym94Lk9wdGlvbnMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMSBtYXgtaC02MCB3LVs0NiVdIGxnOnctWzgwJV0gb3ZlcmZsb3ctYXV0byByb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTEgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjay81IGZvY3VzOm91dGxpbmUtbm9uZSBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGFjdGl2ZSB9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByZWxhdGl2ZSBmb250LW1lZGl1bSBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBweS0yIHBsLTEwIHByLTQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmctaW5kaWdvLTgwMCB0ZXh0LXdoaXRlJyA6ICd0ZXh0LXNsYXRlLTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFvcHRpb24uYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGJveC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Ym94Lk9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICA8L0xpc3Rib3g+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2xhdGVCb3g7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRnJhZ21lbnQiLCJMaXN0Ym94IiwiVHJhbnNpdGlvbiIsIkNoZXZyb25Eb3duSWNvbiIsImxhbmd1YWdlT3B0aW9ucyIsImlkIiwibmFtZSIsImF2YWlsYWJsZSIsIlRyYW5zbGF0ZUJveCIsInNlbGVjdGVkb3B0aW9uIiwic2V0U2VsZWN0ZWRvcHRpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsImFzIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsIk9wdGlvbiIsImFjdGl2ZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Translate.tsx\n"));

/***/ })

});