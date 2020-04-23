import { dew as _isSymbolDewDew } from "./isSymbol.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isSymbol = _isSymbolDewDew();
  /** Used as references for various `Number` constants. */


  var NAN = 0 / 0;
  /**
   * The base implementation of `_.toNumber` which doesn't ensure correct
   * conversions of binary, hexadecimal, or octal string values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   */

  function baseToNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol(value)) {
      return NAN;
    }

    return +value;
  }

  exports = baseToNumber;
  return exports;
}