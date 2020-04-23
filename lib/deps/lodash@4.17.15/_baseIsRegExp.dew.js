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


  var regexpTag = '[object RegExp]';
  /**
   * The base implementation of `_.isRegExp` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
   */

  function baseIsRegExp(value) {
    return isObjectLike(value) && baseGetTag(value) == regexpTag;
  }

  exports = baseIsRegExp;
  return exports;
}