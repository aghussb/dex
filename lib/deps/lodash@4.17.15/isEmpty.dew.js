import { dew as _baseKeysDewDew } from "./_baseKeys.dew.js";
import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _isArgumentsDewDew } from "./isArguments.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
import { dew as _isBufferDewDew } from "./isBuffer.dew.js";
import { dew as _isPrototypeDewDew } from "./_isPrototype.dew.js";
import { dew as _isTypedArrayDewDew } from "./isTypedArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseKeys = _baseKeysDewDew(),
      getTag = _getTagDewDew(),
      isArguments = _isArgumentsDewDew(),
      isArray = _isArrayDewDew(),
      isArrayLike = _isArrayLikeDewDew(),
      isBuffer = _isBufferDewDew(),
      isPrototype = _isPrototypeDewDew(),
      isTypedArray = _isTypedArrayDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]',
      setTag = '[object Set]';
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */

  function isEmpty(value) {
    if (value == null) {
      return true;
    }

    if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
      return !value.length;
    }

    var tag = getTag(value);

    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }

    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }

    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }

    return true;
  }

  exports = isEmpty;
  return exports;
}