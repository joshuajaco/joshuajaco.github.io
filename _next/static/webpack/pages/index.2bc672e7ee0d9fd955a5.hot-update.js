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
          key: index + ""
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
        rowHeight: 300,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlydHVhbGl6ZWRMaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJWaXJ0dWFsaXplZExpc3QiLCJyb3dDb3VudCIsInJvd1JlbmRlcmVyIiwidXNlU3RhdGUiLCJpc1NlcnZlciIsInNldElzU2VydmVyIiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVU8sSUFBTUEsZUFBMEIsR0FBRyxTQUE3QkEsZUFBNkIsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDdkNDLHNEQUFRLENBQUMsSUFBRCxDQUQrQjtBQUFBLE1BQ2hFQyxRQURnRTtBQUFBLE1BQ3REQyxXQURzRCxpQkFHdkU7OztBQUVBLE1BQUlELFFBQUosRUFBYztBQUNaLHdCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVFLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsY0FBTSxFQUFFO0FBQTVCLE9BQVo7QUFBQSxnQkFDR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxHQUFELENBQUwsQ0FBV0UsSUFBWCxFQUFYLEVBQThCQyxHQUE5QixDQUFrQyxVQUFDQyxLQUFEO0FBQUEsZUFDakNWLFdBQVcsQ0FBQztBQUFFVSxlQUFLLEVBQUxBLEtBQUY7QUFBU0MsYUFBRyxFQUFFRCxLQUFLLEdBQUc7QUFBdEIsU0FBRCxDQURzQjtBQUFBLE9BQWxDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0Q7O0FBRUQsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSxjQUNHO0FBQUEsVUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsVUFBVVAsTUFBVixTQUFVQSxNQUFWO0FBQUEsMEJBQ0MscUVBQUMsc0RBQUQ7QUFDRSxhQUFLLEVBQUVPLEtBRFQ7QUFFRSxjQUFNLEVBQUVQLE1BRlY7QUFHRSxnQkFBUSxFQUFFTixRQUhaO0FBSUUsaUJBQVMsRUFBRSxHQUpiO0FBS0UsbUJBQVcsRUFBRUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBNUJNOztHQUFNRixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiYzY3MmU3ZWUwZDlmZDk1NWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NQcm9wZXJ0aWVzLCBGQywgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBdXRvU2l6ZXIsIExpc3QgfSBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWRcIjtcblxuZXhwb3J0IHR5cGUgUm93UmVuZGVyZXIgPSAoYXJnczoge1xuICBpbmRleDogbnVtYmVyO1xuICBrZXk6IHN0cmluZztcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufSkgPT4gUmVhY3ROb2RlO1xuXG50eXBlIFByb3BzID0geyByb3dDb3VudDogbnVtYmVyOyByb3dSZW5kZXJlcjogUm93UmVuZGVyZXIgfTtcblxuZXhwb3J0IGNvbnN0IFZpcnR1YWxpemVkTGlzdDogRkM8UHJvcHM+ID0gKHsgcm93Q291bnQsIHJvd1JlbmRlcmVyIH0pID0+IHtcbiAgY29uc3QgW2lzU2VydmVyLCBzZXRJc1NlcnZlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvL3VzZUVmZmVjdCgoKSA9PiBzZXRJc1NlcnZlcihmYWxzZSksIFtdKTtcblxuICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogXCJhdXRvXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+XG4gICAgICAgIHtBcnJheS5mcm9tKEFycmF5KDEwMCkua2V5cygpKS5tYXAoKGluZGV4KSA9PlxuICAgICAgICAgIHJvd1JlbmRlcmVyKHsgaW5kZXgsIGtleTogaW5kZXggKyBcIlwiIH0pXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0b1NpemVyPlxuICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICA8TGlzdFxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICByb3dDb3VudD17cm93Q291bnR9XG4gICAgICAgICAgcm93SGVpZ2h0PXszMDB9XG4gICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0F1dG9TaXplcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9