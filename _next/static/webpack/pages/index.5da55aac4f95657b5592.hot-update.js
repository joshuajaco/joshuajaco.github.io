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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlydHVhbGl6ZWRMaXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJWaXJ0dWFsaXplZExpc3QiLCJyb3dDb3VudCIsInJvd1JlbmRlcmVyIiwidXNlU3RhdGUiLCJpc1NlcnZlciIsInNldElzU2VydmVyIiwidXNlRWZmZWN0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVU8sSUFBTUEsZUFBMEIsR0FBRyxTQUE3QkEsZUFBNkIsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDdkNDLHNEQUFRLENBQUMsSUFBRCxDQUQrQjtBQUFBLE1BQ2hFQyxRQURnRTtBQUFBLE1BQ3REQyxXQURzRDs7QUFHdkVDLHlEQUFTLENBQUM7QUFBQSxXQUFNRCxXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLEdBQUQsRUFBMkIsRUFBM0IsQ0FBVDs7QUFFQSxNQUFJRCxRQUFKLEVBQWM7QUFDWix3QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFRyxnQkFBUSxFQUFFLE1BQVo7QUFBb0JDLGNBQU0sRUFBRTtBQUE1QixPQUFaO0FBQUEsZ0JBQ0dDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRCxLQUFLLENBQUMsR0FBRCxDQUFMLENBQVdFLElBQVgsRUFBWCxFQUE4QkMsR0FBOUIsQ0FBa0MsVUFBQ0MsS0FBRDtBQUFBLGVBQ2pDWCxXQUFXLENBQUM7QUFBRVcsZUFBSyxFQUFMQSxLQUFGO0FBQVNDLGFBQUcsRUFBRUQsS0FBSyxHQUFHO0FBQXRCLFNBQUQsQ0FEc0I7QUFBQSxPQUFsQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9EOztBQUVELHNCQUNFLHFFQUFDLDJEQUFEO0FBQUEsY0FDRztBQUFBLFVBQUdFLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFVBQVVQLE1BQVYsU0FBVUEsTUFBVjtBQUFBLDBCQUNDLHFFQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFTyxLQURUO0FBRUUsY0FBTSxFQUFFUCxNQUZWO0FBR0UsZ0JBQVEsRUFBRVAsUUFIWjtBQUlFLGlCQUFTLEVBQUUsR0FKYjtBQUtFLG1CQUFXLEVBQUVDO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQTVCTTs7R0FBTUYsZTs7S0FBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZGE1NWFhYzRmOTU2NTdiNTU5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgRkMsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXV0b1NpemVyLCBMaXN0IH0gZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkXCI7XG5cbmV4cG9ydCB0eXBlIFJvd1JlbmRlcmVyID0gKGFyZ3M6IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAga2V5OiBzdHJpbmc7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn0pID0+IFJlYWN0Tm9kZTtcblxudHlwZSBQcm9wcyA9IHsgcm93Q291bnQ6IG51bWJlcjsgcm93UmVuZGVyZXI6IFJvd1JlbmRlcmVyIH07XG5cbmV4cG9ydCBjb25zdCBWaXJ0dWFsaXplZExpc3Q6IEZDPFByb3BzPiA9ICh7IHJvd0NvdW50LCByb3dSZW5kZXJlciB9KSA9PiB7XG4gIGNvbnN0IFtpc1NlcnZlciwgc2V0SXNTZXJ2ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldElzU2VydmVyKGZhbHNlKSwgW10pO1xuXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAge0FycmF5LmZyb20oQXJyYXkoMTAwKS5rZXlzKCkpLm1hcCgoaW5kZXgpID0+XG4gICAgICAgICAgcm93UmVuZGVyZXIoeyBpbmRleCwga2V5OiBpbmRleCArIFwiXCIgfSlcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRvU2l6ZXI+XG4gICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIHJvd0NvdW50PXtyb3dDb3VudH1cbiAgICAgICAgICByb3dIZWlnaHQ9ezMwMH1cbiAgICAgICAgICByb3dSZW5kZXJlcj17cm93UmVuZGVyZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXV0b1NpemVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=