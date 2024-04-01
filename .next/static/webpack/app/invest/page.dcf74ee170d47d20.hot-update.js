"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/invest/page",{

/***/ "(app-pages-browser)/./app/invest/components/InvestPanel.tsx":
/*!***********************************************!*\
  !*** ./app/invest/components/InvestPanel.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_dashboard_components_Balances__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/dashboard/components/Balances */ \"(app-pages-browser)/./app/dashboard/components/Balances.tsx\");\n/* harmony import */ var _barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Popover!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/popover/popover.js\");\n/* harmony import */ var _barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=XMarkIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst InvestPanel = ()=>{\n    _s();\n    const [checkingBalance, setCheckingBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [investmentAmount, setInvestmentAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchBalances = async ()=>{\n            try {\n                const response = await fetch(\"/api/balances\");\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch balances\");\n                }\n                const data = await response.json();\n                setCheckingBalance(data.checkingBal);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        fetchBalances();\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/invest\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    amount: investmentAmount\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to process investment\");\n            }\n        // Optionally handle success, e.g., show a success message to the user\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const currencies = {\n        euros: \"€\",\n        dollar: \"$\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full p-12 space-y-24 h-full min-h-full mx-auto lg:w-full lg:px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Popover_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                className: \"object-right\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"w-6 h-6 text-white\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white text-base font-medium\",\n                children: \"How much are you investing?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                className: \"flex items-center space-x-7 w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-white text-2xl font-black\",\n                                            children: currencies.dollar\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        className: \"w-full text-white bg-transparent border-none text-5xl font-black focus:outline-none selection:outline-none focus:border-none\",\n                                        value: investmentAmount,\n                                        onChange: (e)=>setInvestmentAmount(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                className: \"w-full text-white\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            checkingBalance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-white font-bold text-right\",\n                                children: [\n                                    \"Current Balance: \",\n                                    (0,_app_dashboard_components_Balances__WEBPACK_IMPORTED_MODULE_2__.formattedCurr)(checkingBalance)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, undefined),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-red-500 font-bold text-right\",\n                                children: [\n                                    \"Error: \",\n                                    error\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \"w-4 h-4 border-slate-950 checked:bg-slate-950\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-300 text-sm leading-tight font-normal\",\n                                children: [\n                                    \"I agree to the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"underline text-indigo-400\",\n                                        children: \"Terms & Conditions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 40\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mx-auto justify-center flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-800 text-white h-12 px-8 rounded-md focus:outline-none flex items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-base text-white font-bold\",\n                                children: \"Proceed\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\dollarfx\\\\frontend\\\\app\\\\invest\\\\components\\\\InvestPanel.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(InvestPanel, \"l032uSIP3nwqOKY0pYkRS2cxehw=\");\n_c = InvestPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvestPanel);\nvar _c;\n$RefreshReg$(_c, \"InvestPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pbnZlc3QvY29tcG9uZW50cy9JbnZlc3RQYW5lbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBQ3dCO0FBQ3hCO0FBQ1k7QUFFeEQsTUFBTUssY0FBYzs7SUFDaEIsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxrQkFBa0JDLG9CQUFvQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUV6REMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVyxnQkFBZ0I7WUFDbEIsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNkLE1BQU0sSUFBSUMsTUFBTTtnQkFDcEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUNoQ1gsbUJBQW1CVSxLQUFLRSxXQUFXO1lBQ3ZDLEVBQUUsT0FBT1gsT0FBWTtnQkFDakJDLFNBQVNELE1BQU1ZLE9BQU87WUFDMUI7UUFDSjtRQUNBUjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1TLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1WLFdBQVcsTUFBTUMsTUFBTSxlQUFlO2dCQUN4Q1UsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCQyxRQUFRbkI7Z0JBQ1o7WUFDSjtZQUNBLElBQUksQ0FBQ0csU0FBU0UsRUFBRSxFQUFFO2dCQUNkLE1BQU0sSUFBSUMsTUFBTTtZQUNwQjtRQUNBLHNFQUFzRTtRQUMxRSxFQUFFLE9BQU9SLE9BQVk7WUFDakJDLFNBQVNELE1BQU1ZLE9BQU87UUFDMUI7SUFDSjtJQUVBLE1BQU1VLGFBQWE7UUFBRUMsT0FBTztRQUFLQyxRQUFRO0lBQUk7SUFFN0MscUJBQ0ksOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNmLDhEQUFDL0Isb0ZBQU9BLENBQUNnQyxNQUFNO2dCQUFDRCxXQUFVOzBCQUN0Qiw0RUFBQzlCLG1HQUFTQTtvQkFBQzhCLFdBQVU7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQW1DOzs7Ozs7MEJBR2hELDhEQUFDRztnQkFBS0MsVUFBVWpCO2dCQUFjYSxXQUFVOztrQ0FDcEMsOERBQUNEO3dCQUFRQyxXQUFVOzswQ0FDZiw4REFBQ0Q7Z0NBQVFDLFdBQVU7O2tEQUNmLDhEQUFDSzt3Q0FBS0wsV0FBVTtrREFDWiw0RUFBQ0U7NENBQUVGLFdBQVU7c0RBQ1JKLFdBQVdFLE1BQU07Ozs7Ozs7Ozs7O2tEQUcxQiw4REFBQ1E7d0NBQ0dDLE1BQUs7d0NBQ0xQLFdBQVU7d0NBQ1ZRLE9BQU9oQzt3Q0FDUGlDLFVBQVUsQ0FBQ3JCLElBQU1YLG9CQUFvQlcsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUczRCw4REFBQ0c7Z0NBQUdYLFdBQVU7Ozs7Ozs0QkFDYjVCLGlDQUNHLDhEQUFDOEI7Z0NBQUVGLFdBQVU7O29DQUEwQztvQ0FDakNoQyxpRkFBYUEsQ0FBQ0k7Ozs7Ozs7NEJBR3ZDRSx1QkFDRyw4REFBQzRCO2dDQUFFRixXQUFVOztvQ0FBNEM7b0NBQzdDMUI7Ozs7Ozs7Ozs7Ozs7a0NBSXBCLDhEQUFDeUI7d0JBQVFDLFdBQVU7OzBDQUNmLDhEQUFDTTtnQ0FBTUMsTUFBSztnQ0FBV1AsV0FBVTs7Ozs7OzBDQUNqQyw4REFBQ0U7Z0NBQUVGLFdBQVU7O29DQUFrRDtrREFDNUMsOERBQUNLO3dDQUFLTCxXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUduRSw4REFBQ0Q7d0JBQVFDLFdBQVU7a0NBQ2YsNEVBQUNZOzRCQUFPTCxNQUFLOzRCQUFTUCxXQUFVO3NDQUM1Qiw0RUFBQ0U7Z0NBQUVGLFdBQVU7MENBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxGO0dBL0ZNN0I7S0FBQUE7QUFpR04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ludmVzdC9jb21wb25lbnRzL0ludmVzdFBhbmVsLnRzeD85ZDQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0dGVkQ3VyciB9IGZyb20gXCJAL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9CYWxhbmNlc1wiO1xyXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcclxuXHJcbmNvbnN0IEludmVzdFBhbmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NoZWNraW5nQmFsYW5jZSwgc2V0Q2hlY2tpbmdCYWxhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpbnZlc3RtZW50QW1vdW50LCBzZXRJbnZlc3RtZW50QW1vdW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoQmFsYW5jZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2JhbGFuY2VzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYmFsYW5jZXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2luZ0JhbGFuY2UoZGF0YS5jaGVja2luZ0JhbCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaEJhbGFuY2VzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9pbnZlc3QnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGludmVzdG1lbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHByb2Nlc3MgaW52ZXN0bWVudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHN1Y2Nlc3MsIGUuZy4sIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2UgdG8gdGhlIHVzZXJcclxuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3VycmVuY2llcyA9IHsgZXVyb3M6IFwi4oKsXCIsIGRvbGxhcjogXCIkXCIgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBwLTEyIHNwYWNlLXktMjQgaC1mdWxsIG1pbi1oLWZ1bGwgbXgtYXV0byBsZzp3LWZ1bGwgbGc6cHgtNlwiPlxyXG4gICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPVwib2JqZWN0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlci5CdXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICBIb3cgbXVjaCBhcmUgeW91IGludmVzdGluZz9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY2llcy5kb2xsYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLXRyYW5zcGFyZW50IGJvcmRlci1ub25lIHRleHQtNXhsIGZvbnQtYmxhY2sgZm9jdXM6b3V0bGluZS1ub25lIHNlbGVjdGlvbjpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludmVzdG1lbnRBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludmVzdG1lbnRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGVja2luZ0JhbGFuY2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnQgQmFsYW5jZToge2Zvcm1hdHRlZEN1cnIoY2hlY2tpbmdCYWxhbmNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXJlZC01MDAgZm9udC1ib2xkIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiB7ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInctNCBoLTQgYm9yZGVyLXNsYXRlLTk1MCBjaGVja2VkOmJnLXNsYXRlLTk1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB0ZXh0LXNtIGxlYWRpbmctdGlnaHQgZm9udC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSSBhZ3JlZSB0byB0aGUgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRleHQtaW5kaWdvLTQwMFwiPlRlcm1zICYgQ29uZGl0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteC1hdXRvIGp1c3RpZnktY2VudGVyIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTgwMCB0ZXh0LXdoaXRlIGgtMTIgcHgtOCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0UGFuZWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZvcm1hdHRlZEN1cnIiLCJQb3BvdmVyIiwiWE1hcmtJY29uIiwiSW52ZXN0UGFuZWwiLCJjaGVja2luZ0JhbGFuY2UiLCJzZXRDaGVja2luZ0JhbGFuY2UiLCJlcnJvciIsInNldEVycm9yIiwiaW52ZXN0bWVudEFtb3VudCIsInNldEludmVzdG1lbnRBbW91bnQiLCJmZXRjaEJhbGFuY2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNoZWNraW5nQmFsIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFtb3VudCIsImN1cnJlbmNpZXMiLCJldXJvcyIsImRvbGxhciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJCdXR0b24iLCJwIiwiZm9ybSIsIm9uU3VibWl0Iiwic3BhbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJociIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/invest/components/InvestPanel.tsx\n"));

/***/ })

});