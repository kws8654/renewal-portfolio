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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nconst _excluded = [\"session\"];\nvar _jsxFileName = \"/Users/wonsubraykim/Desktop/wonsub/programming/repository/project/renewal-portfolio/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nconst queryErrorHandler = () => {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    children: \"ERROR\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 10\n  }, undefined);\n};\n\nfunction App(_ref) {\n  let {\n    Component,\n    pageProps: {\n      session\n    }\n  } = _ref,\n      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);\n\n  const [queryClient] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(() => new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient({\n    defaultOptions: {\n      queries: {\n        onError: queryErrorHandler,\n        refetchOnWindowFocus: false\n      }\n    }\n  }));\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_6__.MapProvider, {\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n          client: queryClient,\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_7__.SessionProvider, {\n            session: session,\n            refetchOnWindowFocus: false,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.Hydrate, {\n              state: pageProps.dehydratedState,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 55,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1RLGlCQUFpQixHQUFHLE1BQU07RUFDOUIsT0FBTztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQUFQO0FBQ0QsQ0FGRDs7QUFhZSxTQUFTQyxHQUFULE9BR1E7RUFBQSxJQUhLO0lBQzFCQyxTQUQwQjtJQUUxQkMsU0FBUyxFQUFFO01BQUVDO0lBQUY7RUFGZSxDQUdMO0VBQUEsSUFESUQsU0FDSixpQ0FEckJBLFNBQ3FCOztFQUNyQixNQUFNLENBQUNFLFdBQUQsSUFBZ0JiLHFEQUFBLENBQ3BCLE1BQ0UsSUFBSUcsOERBQUosQ0FBZ0I7SUFDZFksY0FBYyxFQUFFO01BQ2RDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUVULGlCQURGO1FBRVBVLG9CQUFvQixFQUFFO01BRmY7SUFESztFQURGLENBQWhCLENBRmtCLENBQXRCO0VBV0EsT0FDRTtJQUFBLFdBQ0UsdUVBQUMsa0RBQUQ7TUFBQSxXQUNFO1FBQU0sT0FBTyxFQUFDO01BQWQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLEVBRUU7UUFDRSxJQUFJLEVBQUMsVUFEUDtRQUVFLE9BQU8sRUFBQztNQUZWO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixFQVFFLHVFQUFDLDhDQUFEO01BQUEsVUFDRSx1RUFBQyxxREFBRDtRQUFBLFVBQ0UsdUVBQUMsc0VBQUQ7VUFBcUIsTUFBTSxFQUFFTCxXQUE3QjtVQUFBLFVBQ0UsdUVBQUMsNERBQUQ7WUFBaUIsT0FBTyxFQUFFRCxPQUExQjtZQUFtQyxvQkFBb0IsRUFBRSxLQUF6RDtZQUFBLFVBQ0UsdUVBQUMsMERBQUQ7Y0FBUyxLQUFLLEVBQUVELFNBQVMsQ0FBQ1EsZUFBMUI7Y0FBQSxVQUNFLHVFQUFDLFNBQUQsb0JBQWVSLFNBQWY7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtZQURGO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUkY7RUFBQSxnQkFERjtBQXVCRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVuZXdhbC1wb3BydGZvbGlvLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIEh5ZHJhdGUgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWFwUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcblxuY29uc3QgcXVlcnlFcnJvckhhbmRsZXIgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2PkVSUk9SPC9kaXY+O1xufTtcblxuZXhwb3J0IHR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFAgPSB7fSwgSVAgPSBQPiA9IE5leHRQYWdlPFAsIElQPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xuICBsYXlvdXQ/OiBhbnk7XG59O1xuXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IFtxdWVyeUNsaWVudF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICAoKSA9PlxuICAgICAgbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICBvbkVycm9yOiBxdWVyeUVycm9ySGFuZGxlcixcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPSd2aWV3cG9ydCdcbiAgICAgICAgICBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCB1c2VyLXNjYWxhYmxlPW5vJ1xuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgIDxNYXBQcm92aWRlcj5cbiAgICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0gcmVmZXRjaE9uV2luZG93Rm9jdXM9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICAgICAgICB7Lyo8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e3RydWV9IC8+Ki99XG4gICAgICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgIDwvTWFwUHJvdmlkZXI+XG4gICAgICA8L1JlY29pbFJvb3Q+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlJlY29pbFJvb3QiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJIeWRyYXRlIiwiTWFwUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJxdWVyeUVycm9ySGFuZGxlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJxdWVyeUNsaWVudCIsInVzZVN0YXRlIiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwib25FcnJvciIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/mapbox-gl/dist/mapbox-gl.css":
/*!***************************************************!*\
  !*** ./node_modules/mapbox-gl/dist/mapbox-gl.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-map-gl");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();