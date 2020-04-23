import { dew as _baseClampDewDew } from "./_baseClamp.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseClamp = _baseClampDewDew(),
      toInteger = _toIntegerDewDew();
  /** Used as references for various `Number` constants. */


  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Converts `value` to a safe integer. A safe integer can be compared and
   * represented correctly.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toSafeInteger(3.2);
   * // => 3
   *
   * _.toSafeInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toSafeInteger(Infinity);
   * // => 9007199254740991
   *
   * _.toSafeInteger('3.2');
   * // => 3
   */

  function toSafeInteger(value) {
    return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
  }

  exports = toSafeInteger;
  return exports;
}