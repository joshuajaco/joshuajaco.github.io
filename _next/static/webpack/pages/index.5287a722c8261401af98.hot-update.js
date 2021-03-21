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
      setIsServer = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setIsServer(false);
  }, []);

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

_s(VirtualizedList, "bxAFxYEMxhkC0WiFSh9wVuhPN7g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlydHVhbGl6ZWRMaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJWaXJ0dWFsaXplZExpc3QiLCJyb3dDb3VudCIsInJvd1JlbmRlcmVyIiwidXNlU3RhdGUiLCJpc1NlcnZlciIsInNldElzU2VydmVyIiwidXNlRWZmZWN0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVTyxJQUFNQSxlQUEwQixHQUFHLFNBQTdCQSxlQUE2QixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUFBLGtCQUN2Q0Msc0RBQVEsQ0FBQyxJQUFELENBRCtCO0FBQUEsTUFDaEVDLFFBRGdFO0FBQUEsTUFDdERDLFdBRHNEOztBQUd2RUMseURBQVMsQ0FBQztBQUFBLFdBQU1ELFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsR0FBRCxFQUEyQixFQUEzQixDQUFUOztBQUVBLE1BQUlELFFBQUosRUFBYztBQUNaLHdCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVHLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsY0FBTSxFQUFFO0FBQTVCLE9BQVo7QUFBQSxnQkFDR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxHQUFELENBQUwsQ0FBV0UsSUFBWCxFQUFYLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxLQUFEO0FBQUEsZUFDakNYLFdBQVcsQ0FBQztBQUFFVyxlQUFLLEVBQUxBLEtBQUY7QUFBU0MsYUFBRyxFQUFFRCxLQUFLLEdBQUcsRUFBdEI7QUFBMEJFLGVBQUssRUFBRTtBQUFFUCxrQkFBTSxFQUFFO0FBQVY7QUFBakMsU0FBRCxDQURzQjtBQUFBLE9BQWxDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0Q7O0FBRUQsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSxjQUNHO0FBQUEsVUFBR1EsS0FBSCxTQUFHQSxLQUFIO0FBQUEsVUFBVVIsTUFBVixTQUFVQSxNQUFWO0FBQUEsMEJBQ0MscUVBQUMsc0RBQUQ7QUFDRSxhQUFLLEVBQUVRLEtBRFQ7QUFFRSxjQUFNLEVBQUVSLE1BRlY7QUFHRSxnQkFBUSxFQUFFUCxRQUhaO0FBSUUsaUJBQVMsRUFBRSxHQUpiO0FBS0UsbUJBQVcsRUFBRUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBNUJNOztHQUFNRixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyODdhNzIyYzgyNjE0MDFhZjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCBGQywgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRvU2l6ZXIsIExpc3QgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcblxuZXhwb3J0IHR5cGUgUm93UmVuZGVyZXIgPSAoYXJnczoge1xuICBpbmRleDogbnVtYmVyO1xuICBrZXk6IHN0cmluZztcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufSkgPT4gUmVhY3ROb2RlO1xuXG50eXBlIFByb3BzID0geyByb3dDb3VudDogbnVtYmVyOyByb3dSZW5kZXJlcjogUm93UmVuZGVyZXIgfTtcblxuZXhwb3J0IGNvbnN0IFZpcnR1YWxpemVkTGlzdDogRkM8UHJvcHM+ID0gKHsgcm93Q291bnQsIHJvd1JlbmRlcmVyIH0pID0+IHtcbiAgY29uc3QgW2lzU2VydmVyLCBzZXRJc1NlcnZlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0SXNTZXJ2ZXIoZmFsc2UpLCBbXSk7XG5cbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiYXV0b1wiLCBoZWlnaHQ6IFwiMTAwJVwiIH19PlxuICAgICAgICB7QXJyYXkuZnJvbShBcnJheSgxMDApLmtleXMoKSkubWFwKChpbmRleCkgPT5cbiAgICAgICAgICByb3dSZW5kZXJlcih7IGluZGV4LCBrZXk6IGluZGV4ICsgXCJcIiwgc3R5bGU6IHsgaGVpZ2h0OiAyOTIgfSB9KVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dG9TaXplcj5cbiAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgPExpc3RcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgcm93Q291bnQ9e3Jvd0NvdW50fVxuICAgICAgICAgIHJvd0hlaWdodD17MjkyfVxuICAgICAgICAgIHJvd1JlbmRlcmVyPXtyb3dSZW5kZXJlcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9BdXRvU2l6ZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==