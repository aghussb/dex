import { dew as _baseIsDateDewDew } from "./_baseIsDate.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _nodeUtilDewDew } from "./_nodeUtil.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsDate = _baseIsDateDewDew(),
      baseUnary = _baseUnaryDewDew(),
      nodeUtil = _nodeUtilDewDew();
  /* Node.js helper references. */


  var nodeIsDate = nodeUtil && nodeUtil.isDate;
  /**
   * Checks if `value` is classified as a `Date` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   *
   * _.isDate('Mon April 23 2012');
   * // => false
   */

  var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
  exports = isDate;
  return exports;
}