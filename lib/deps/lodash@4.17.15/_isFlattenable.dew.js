import { dew as _SymbolDewDew } from "./_Symbol.dew.js";
import { dew as _isArgumentsDewDew } from "./isArguments.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Symbol = _SymbolDewDew(),
      isArguments = _isArgumentsDewDew(),
      isArray = _isArrayDewDew();
  /** Built-in value references. */


  var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */

  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  exports = isFlattenable;
  return exports;
}