import { dew as _baseGetTagDewDew } from "./_baseGetTag.dew.js";
import { dew as _isObjectLikeDewDew } from "./isObjectLike.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGetTag = _baseGetTagDewDew(),
      isObjectLike = _isObjectLikeDewDew();
  /** `Object#toString` result references. */


  var dateTag = '[object Date]';
  /**
   * The base implementation of `_.isDate` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
   */

  function baseIsDate(value) {
    return isObjectLike(value) && baseGetTag(value) == dateTag;
  }

  exports = baseIsDate;
  return exports;
}