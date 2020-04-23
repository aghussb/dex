import { dew as _SymbolDewDew } from "./_Symbol.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isSymbolDewDew } from "./isSymbol.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Symbol = _SymbolDewDew(),
      arrayMap = _arrayMapDewDew(),
      isArray = _isArrayDewDew(),
      isSymbol = _isSymbolDewDew();
  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  exports = baseToString;
  return exports;
}