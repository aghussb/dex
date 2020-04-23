import { dew as _baseGetTagDewDew } from "./_baseGetTag.dew.js";
import { dew as _isObjectLikeDewDew } from "./isObjectLike.dew.js";
import { dew as _isPlainObjectDewDew } from "./isPlainObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGetTag = _baseGetTagDewDew(),
      isObjectLike = _isObjectLikeDewDew(),
      isPlainObject = _isPlainObjectDewDew();
  /** `Object#toString` result references. */


  var domExcTag = '[object DOMException]',
      errorTag = '[object Error]';
  /**
   * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
   * `SyntaxError`, `TypeError`, or `URIError` object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
   * @example
   *
   * _.isError(new Error);
   * // => true
   *
   * _.isError(Error);
   * // => false
   */

  function isError(value) {
    if (!isObjectLike(value)) {
      return false;
    }

    var tag = baseGetTag(value);
    return tag == errorTag || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value);
  }

  exports = isError;
  return exports;
}