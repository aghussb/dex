import { dew as _isObjectLikeDewDew } from "./isObjectLike.dew.js";
import { dew as _isPlainObjectDewDew } from "./isPlainObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isObjectLike = _isObjectLikeDewDew(),
      isPlainObject = _isPlainObjectDewDew();
  /**
   * Checks if `value` is likely a DOM element.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   *
   * _.isElement('<body>');
   * // => false
   */


  function isElement(value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
  }

  exports = isElement;
  return exports;
}