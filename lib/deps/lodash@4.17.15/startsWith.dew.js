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
   * Checks if `string` starts with the given target string.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {string} [target] The string to search for.
   * @param {number} [position=0] The position to search from.
   * @returns {boolean} Returns `true` if `string` starts with `target`,
   *  else `false`.
   * @example
   *
   * _.startsWith('abc', 'a');
   * // => true
   *
   * _.startsWith('abc', 'b');
   * // => false
   *
   * _.startsWith('abc', 'b', 1);
   * // => true
   */


  function startsWith(string, target, position) {
    string = toString(string);
    position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
    target = baseToString(target);
    return string.slice(position, position + target.length) == target;
  }

  exports = startsWith;
  return exports;
}