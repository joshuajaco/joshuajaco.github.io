webpackHotUpdate_N_E("pages/index",{

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
      rowCount: filteredPokemon.length,
      rowHeight: 292
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbkxpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBva2Vtb25MaXN0IiwicG9rZW1vbiIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZpbHRlcmVkUG9rZW1vbiIsInVzZU1lbW8iLCJmaWx0ZXIiLCJuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInJvd1JlbmRlcmVyIiwiaW5kZXgiLCJrZXkiLCJzdHlsZSIsImhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlPLElBQU1BLFdBQXNCLEdBQUcsU0FBekJBLFdBQXlCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQzlDQyxXQUQ4QztBQUFBLE1BQ2pDQyxjQURpQzs7QUFHckQsTUFBTUMsZUFBZSxHQUFHQyxxREFBTyxDQUM3QjtBQUFBLFdBQ0VMLE9BQU8sQ0FBQ00sTUFBUixDQUFlO0FBQUEsVUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsYUFBY0EsSUFBSSxDQUFDQyxRQUFMLENBQWNOLFdBQVcsQ0FBQ08sV0FBWixFQUFkLENBQWQ7QUFBQSxLQUFmLENBREY7QUFBQSxHQUQ2QixFQUc3QixDQUFDVCxPQUFELEVBQVVFLFdBQVYsQ0FINkIsQ0FBL0I7O0FBTUEsTUFBTVEsV0FBd0IsR0FBRyxTQUEzQkEsV0FBMkIsUUFBMkI7QUFBQSxRQUF4QkMsS0FBd0IsU0FBeEJBLEtBQXdCO0FBQUEsUUFBakJDLEdBQWlCLFNBQWpCQSxHQUFpQjtBQUFBLFFBQVpDLEtBQVksU0FBWkEsS0FBWTtBQUMxRCx3QkFDRTtBQUFlLFdBQUssRUFBRUEsS0FBdEI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFhLGVBQU8sRUFBRVQsZUFBZSxDQUFDTyxLQUFEO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVQyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLGNBQVEsRUFBRSxJQUE1QjtBQUFrQ0MsWUFBTSxFQUFFO0FBQTFDLEtBQVo7QUFBQSw0QkFDRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFZCxXQUZUO0FBR0UsY0FBUSxFQUFFO0FBQUEsWUFBR2UsTUFBSCxTQUFHQSxNQUFIO0FBQUEsZUFBZ0JkLGNBQWMsQ0FBQ2MsTUFBTSxDQUFDQyxLQUFSLENBQTlCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSxxRUFBQyxnRUFBRDtBQUNFLGlCQUFXLEVBQUVSLFdBRGY7QUFFRSxjQUFRLEVBQUVOLGVBQWUsQ0FBQ2UsTUFGNUI7QUFHRSxlQUFTLEVBQUU7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQS9CTTs7R0FBTXBCLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmY4ZDYyNTk1OWUwM2Q3NmM2NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9rZW1vbkluZm8gfSBmcm9tIFwiLi4vUG9rZW1vbkluZm9cIjtcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFJvd1JlbmRlcmVyLCBWaXJ0dWFsaXplZExpc3QgfSBmcm9tIFwiLi4vVmlydHVhbGl6ZWRMaXN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7IHBva2Vtb246IFBva2Vtb25bXSB9O1xuXG5leHBvcnQgY29uc3QgUG9rZW1vbkxpc3Q6IEZDPFByb3BzPiA9ICh7IHBva2Vtb24gfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGZpbHRlcmVkUG9rZW1vbiA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHBva2Vtb24uZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZS5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSksXG4gICAgW3Bva2Vtb24sIHNlYXJjaFF1ZXJ5XVxuICApO1xuXG4gIGNvbnN0IHJvd1JlbmRlcmVyOiBSb3dSZW5kZXJlciA9ICh7IGluZGV4LCBrZXksIHN0eWxlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2tleX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPFBva2Vtb25JbmZvIHBva2Vtb249e2ZpbHRlcmVkUG9rZW1vbltpbmRleF19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTB2aFwiLCBtYXhXaWR0aDogMTQwMCwgbWFyZ2luOiBcImF1dG9cIiB9fT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRTZWFyY2hRdWVyeSh0YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxWaXJ0dWFsaXplZExpc3RcbiAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxuICAgICAgICByb3dDb3VudD17ZmlsdGVyZWRQb2tlbW9uLmxlbmd0aH1cbiAgICAgICAgcm93SGVpZ2h0PXsyOTJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=