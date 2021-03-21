webpackHotUpdate_N_E("pages/index",{

/***/ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-423fb00793.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./.yarn/cache/@babel-runtime-npm-7.12.5-b3edb8ee8e-423fb00793.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./src/components/PokemonList/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/PokemonList/index.tsx ***!
  \**********************************************/
/*! exports provided: PokemonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonList", function() { return PokemonList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./.yarn/cache/react-npm-17.0.1-98658812fc-a76d86ec97.zip/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-17.0.1-98658812fc-a76d86ec97.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PokemonInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PokemonInfo */ "./src/components/PokemonInfo/index.tsx");
/* harmony import */ var _VirtualizedList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VirtualizedList */ "./src/components/VirtualizedList/index.tsx");


var _jsxFileName = "C:\\Users\\Joshua\\workspace\\pokemon-helper\\src\\components\\PokemonList\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var PokemonList = function PokemonList(_ref) {
  _s();

  var pokemon = _ref.pokemon;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var filteredPokemon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return pokemon.filter(function (_ref2) {
      var name = _ref2.name;
      return name.includes(searchQuery.toLowerCase());
    });
  }, [pokemon, searchQuery]);

  var rowRenderer = function rowRenderer(_ref3) {
    var index = _ref3.index,
        key = _ref3.key,
        style = _ref3.style;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PokemonInfo__WEBPACK_IMPORTED_MODULE_2__["PokemonInfo"], {
        pokemon: filteredPokemon[index]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, key, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "90vh",
      maxWidth: 1400,
      margin: "auto"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      value: searchQuery,
      onChange: function onChange(_ref4) {
        var target = _ref4.target;
        return setSearchQuery(target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_VirtualizedList__WEBPACK_IMPORTED_MODULE_3__["VirtualizedList"], {
      rowRenderer: rowRenderer,
      rowCount: filteredPokemon.length
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_s(PokemonList, "mpPPkRuTcjACB9G+GHfCYCLi69s=");

_c = PokemonList;

var _c;

$RefreshReg$(_c, "PokemonList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkxpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBva2Vtb25MaXN0IiwicG9rZW1vbiIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZpbHRlcmVkUG9rZW1vbiIsInVzZU1lbW8iLCJmaWx0ZXIiLCJuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInJvd1JlbmRlcmVyIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlPLElBQU1BLFdBQXNCLEdBQUcsU0FBekJBLFdBQXlCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQzlDQyxXQUQ4QztBQUFBLE1BQ2pDQyxjQURpQzs7QUFHckQsTUFBTUMsZUFBZSxHQUFHQyxxREFBTyxDQUM3QjtBQUFBLFdBQ0VMLE9BQU8sQ0FBQ00sTUFBUixDQUFlO0FBQUEsVUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsYUFBY0EsSUFBSSxDQUFDQyxRQUFMLENBQWNOLFdBQVcsQ0FBQ08sV0FBWixFQUFkLENBQWQ7QUFBQSxLQUFmLENBREY7QUFBQSxHQUQ2QixFQUc3QixDQUFDVCxPQUFELEVBQVVFLFdBQVYsQ0FINkIsQ0FBL0I7O0FBTUEsTUFBTVEsV0FBd0IsR0FBRyxTQUEzQkEsV0FBMkIsUUFBMkI7QUFBQSxRQUF4QkMsS0FBd0IsU0FBeEJBLEtBQXdCO0FBQUEsUUFBakJDLEdBQWlCLFNBQWpCQSxHQUFpQjtBQUFBLFFBQVpDLEtBQVksU0FBWkEsS0FBWTtBQUMxRCx3QkFDRTtBQUFlLFdBQUssRUFBRUEsS0FBdEI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFhLGVBQU8sRUFBRVQsZUFBZSxDQUFDTyxLQUFEO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLGNBQVEsRUFBRSxJQUE1QjtBQUFrQ0MsWUFBTSxFQUFFO0FBQTFDLEtBQVo7QUFBQSw0QkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFZCxXQUZUO0FBR0UsY0FBUSxFQUFFO0FBQUEsWUFBR2UsTUFBSCxTQUFHQSxNQUFIO0FBQUEsZUFBZ0JkLGNBQWMsQ0FBQ2MsTUFBTSxDQUFDQyxLQUFSLENBQTlCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSxxRUFBQyxnRUFBRDtBQUNFLGlCQUFXLEVBQUVSLFdBRGY7QUFFRSxjQUFRLEVBQUVOLGVBQWUsQ0FBQ2U7QUFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0E5Qk07O0dBQU1wQixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRmZjM3NGYzYWY4NjQ4MjlhNTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBva2Vtb25JbmZvIH0gZnJvbSBcIi4uL1Bva2Vtb25JbmZvXCI7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBSb3dSZW5kZXJlciwgVmlydHVhbGl6ZWRMaXN0IH0gZnJvbSBcIi4uL1ZpcnR1YWxpemVkTGlzdFwiO1xuXG50eXBlIFByb3BzID0geyBwb2tlbW9uOiBQb2tlbW9uW10gfTtcblxuZXhwb3J0IGNvbnN0IFBva2Vtb25MaXN0OiBGQzxQcm9wcz4gPSAoeyBwb2tlbW9uIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBmaWx0ZXJlZFBva2Vtb24gPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBwb2tlbW9uLmZpbHRlcigoeyBuYW1lIH0pID0+IG5hbWUuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkpLFxuICAgIFtwb2tlbW9uLCBzZWFyY2hRdWVyeV1cbiAgKTtcblxuICBjb25zdCByb3dSZW5kZXJlcjogUm93UmVuZGVyZXIgPSAoeyBpbmRleCwga2V5LCBzdHlsZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxQb2tlbW9uSW5mbyBwb2tlbW9uPXtmaWx0ZXJlZFBva2Vtb25baW5kZXhdfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwdmhcIiwgbWF4V2lkdGg6IDE0MDAsIG1hcmdpbjogXCJhdXRvXCIgfX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0U2VhcmNoUXVlcnkodGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8VmlydHVhbGl6ZWRMaXN0XG4gICAgICAgIHJvd1JlbmRlcmVyPXtyb3dSZW5kZXJlcn1cbiAgICAgICAgcm93Q291bnQ9e2ZpbHRlcmVkUG9rZW1vbi5sZW5ndGh9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=