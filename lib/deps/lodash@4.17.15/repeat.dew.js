import { dew as _baseRepeatDewDew } from "./_baseRepeat.dew.js";
import { dew as _isIterateeCallDewDew } from "./_isIterateeCall.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseRepeat = _baseRepeatDewDew(),
      isIterateeCall = _isIterateeCallDewDew(),
      toInteger = _toIntegerDewDew(),
      toString = _toStringDewDew();
  /**
   * Repeats the given string `n` times.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to repeat.
   * @param {number} [n=1] The number of times to repeat the string.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the repeated string.
   * @example
   *
   * _.repeat('*', 3);
   * // => '***'
   *
   * _.repeat('abc', 2);
   * // => 'abcabc'
   *
   * _.repeat('abc', 0);
   * // => ''
   */


  function repeat(string, n, guard) {
    if (guard ? isIterateeCall(string, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = toInteger(n);
    }

    return baseRepeat(toString(string), n);
  }

  exports = repeat;
  return exports;
}