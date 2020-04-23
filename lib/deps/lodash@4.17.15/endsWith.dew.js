import { dew as _baseClampDewDew } from "./_baseClamp.dew.js";
import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseClamp = _baseClampDewDew(),
      baseToString = _baseToStringDewDew(),
      toInteger = _toIntegerDewDew(),
      toString = _toStringDewDew();
  /**
   * Checks if `string` ends with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=string.length] The position to search up to.
   * @returns {boolean} Returns `true` if `string` ends with `target`,
   *  else `false`.
   * @example
   *
   * _.endsWith('abc', 'c');
   * // => true
   *
   * _.endsWith('abc', 'b');
   * // => false
   *
   * _.endsWith('abc', 'b', 2);
   * // => true
   */


  function endsWith(string, target, position) {
    string = toString(string);
    target = baseToString(target);
    var length = string.length;
    position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
    var end = position;
    position -= target.length;
    return position >= 0 && string.slice(position, end) == target;
  }

  exports = endsWith;
  return exports;
}