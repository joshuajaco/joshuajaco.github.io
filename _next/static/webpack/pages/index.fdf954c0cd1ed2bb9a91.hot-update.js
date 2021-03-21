webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/VirtualizedList/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/VirtualizedList/index.tsx ***!
  \**************************************************/
/*! exports provided: VirtualizedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return VirtualizedList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./.yarn/cache/react-npm-17.0.1-98658812fc-a76d86ec97.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-17.0.1-98658812fc-a76d86ec97.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized */ "./.yarn/$$virtual/react-virtualized-virtual-3485b5709c/0/cache/react-virtualized-npm-9.22.3-0fff3cbf64-1e54556ab9.zip/node_modules/react-virtualized/dist/es/index.js");


var _jsxFileName = "C:\\Users\\Joshua\\workspace\\pokemon-helper\\src\\components\\VirtualizedList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var VirtualizedList = function VirtualizedList(_ref) {
  _s();

  var rowCount = _ref.rowCount,
      rowRenderer = _ref.rowRenderer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isServer = _useState[0],
      setIsServer = _useState[1]; //useEffect(() => setIsServer(false), []);


  if (isServer) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        overflow: "auto",
        height: "100%"
      },
      children: Array.from(Array(100).keys()).map(function (index) {
        return rowRenderer({
          index: index,
          key: index + "",
          style: {
            height: 292
          }
        });
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], {
    children: function children(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["List"], {
        width: width,
        height: height,
        rowCount: rowCount,
        rowHeight: 292,
        rowRenderer: rowRenderer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(VirtualizedList, "iNYfPyeECuFTcfWzl0BfCXjlEU8=");

_c = VirtualizedList;

var _c;

$RefreshReg$(_c, "VirtualizedList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../.yarn/$$virtual/next-virtual-d26f1483e3/0/cache/next-npm-10.0.9-a8231ded17-7ac7564bdb.zip/node_modules/next/dist/compiled/webpack/harmony-module.js */ "./.yarn/$$virtual/next-virtual-d26f1483e3/0/cache/next-npm-10.0.9-a8231ded17-7ac7564bdb.zip/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlydHVhbGl6ZWRMaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJWaXJ0dWFsaXplZExpc3QiLCJyb3dDb3VudCIsInJvd1JlbmRlcmVyIiwidXNlU3RhdGUiLCJpc1NlcnZlciIsInNldElzU2VydmVyIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVTyxJQUFNQSxlQUEwQixHQUFHLFNBQTdCQSxlQUE2QixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUFBLGtCQUN2Q0Msc0RBQVEsQ0FBQyxJQUFELENBRCtCO0FBQUEsTUFDaEVDLFFBRGdFO0FBQUEsTUFDdERDLFdBRHNELGlCQUd2RTs7O0FBRUEsTUFBSUQsUUFBSixFQUFjO0FBQ1osd0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUUsZ0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxjQUFNLEVBQUU7QUFBNUIsT0FBWjtBQUFBLGdCQUNHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDLEdBQUQsQ0FBTCxDQUFXRSxJQUFYLEVBQVgsRUFBOEJDLEdBQTlCLENBQWtDLFVBQUNDLEtBQUQ7QUFBQSxlQUNqQ1YsV0FBVyxDQUFDO0FBQUVVLGVBQUssRUFBTEEsS0FBRjtBQUFTQyxhQUFHLEVBQUVELEtBQUssR0FBRyxFQUF0QjtBQUEwQkUsZUFBSyxFQUFFO0FBQUVQLGtCQUFNLEVBQUU7QUFBVjtBQUFqQyxTQUFELENBRHNCO0FBQUEsT0FBbEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRDs7QUFFRCxzQkFDRSxxRUFBQywyREFBRDtBQUFBLGNBQ0c7QUFBQSxVQUFHUSxLQUFILFNBQUdBLEtBQUg7QUFBQSxVQUFVUixNQUFWLFNBQVVBLE1BQVY7QUFBQSwwQkFDQyxxRUFBQyxzREFBRDtBQUNFLGFBQUssRUFBRVEsS0FEVDtBQUVFLGNBQU0sRUFBRVIsTUFGVjtBQUdFLGdCQUFRLEVBQUVOLFFBSFo7QUFJRSxpQkFBUyxFQUFFLEdBSmI7QUFLRSxtQkFBVyxFQUFFQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0E1Qk07O0dBQU1GLGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmRmOTU0YzBjZDFlZDJiYjlhOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1Byb3BlcnRpZXMsIEZDLCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dG9TaXplciwgTGlzdCB9IGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZFwiO1xuXG5leHBvcnQgdHlwZSBSb3dSZW5kZXJlciA9IChhcmdzOiB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGtleTogc3RyaW5nO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59KSA9PiBSZWFjdE5vZGU7XG5cbnR5cGUgUHJvcHMgPSB7IHJvd0NvdW50OiBudW1iZXI7IHJvd1JlbmRlcmVyOiBSb3dSZW5kZXJlciB9O1xuXG5leHBvcnQgY29uc3QgVmlydHVhbGl6ZWRMaXN0OiBGQzxQcm9wcz4gPSAoeyByb3dDb3VudCwgcm93UmVuZGVyZXIgfSkgPT4ge1xuICBjb25zdCBbaXNTZXJ2ZXIsIHNldElzU2VydmVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vdXNlRWZmZWN0KCgpID0+IHNldElzU2VydmVyKGZhbHNlKSwgW10pO1xuXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAge0FycmF5LmZyb20oQXJyYXkoMTAwKS5rZXlzKCkpLm1hcCgoaW5kZXgpID0+XG4gICAgICAgICAgcm93UmVuZGVyZXIoeyBpbmRleCwga2V5OiBpbmRleCArIFwiXCIsIHN0eWxlOiB7IGhlaWdodDogMjkyIH0gfSlcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRvU2l6ZXI+XG4gICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHJvd0NvdW50PXtyb3dDb3VudH1cbiAgICAgICAgICByb3dIZWlnaHQ9ezI5Mn1cbiAgICAgICAgICByb3dSZW5kZXJlcj17cm93UmVuZGVyZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXV0b1NpemVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=