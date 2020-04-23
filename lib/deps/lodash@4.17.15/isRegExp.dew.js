import { dew as _baseIsRegExpDewDew } from "./_baseIsRegExp.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _nodeUtilDewDew } from "./_nodeUtil.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsRegExp = _baseIsRegExpDewDew(),
      baseUnary = _baseUnaryDewDew(),
      nodeUtil = _nodeUtilDewDew();
  /* Node.js helper references. */


  var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;
  /**
   * Checks if `value` is classified as a `RegExp` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   * @example
   *
   * _.isRegExp(/abc/);
   * // => true
   *
   * _.isRegExp('/abc/');
   * // => false
   */

  var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
  exports = isRegExp;
  return exports;
}