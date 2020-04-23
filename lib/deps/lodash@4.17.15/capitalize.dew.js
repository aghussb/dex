import { dew as _toStringDewDew } from "./toString.dew.js";
import { dew as _upperFirstDewDew } from "./upperFirst.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var toString = _toStringDewDew(),
      upperFirst = _upperFirstDewDew();
  /**
   * Converts the first character of `string` to upper case and the remaining
   * to lower case.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('FRED');
   * // => 'Fred'
   */


  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }

  exports = capitalize;
  return exports;
}