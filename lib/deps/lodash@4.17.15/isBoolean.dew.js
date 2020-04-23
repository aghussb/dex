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


  var boolTag = '[object Boolean]';
  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * _.isBoolean(false);
   * // => true
   *
   * _.isBoolean(null);
   * // => false
   */

  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
  }

  exports = isBoolean;
  return exports;
}