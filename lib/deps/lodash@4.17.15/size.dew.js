import { dew as _baseKeysDewDew } from "./_baseKeys.dew.js";
import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
import { dew as _isStringDewDew } from "./isString.dew.js";
import { dew as _stringSizeDewDew } from "./_stringSize.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseKeys = _baseKeysDewDew(),
      getTag = _getTagDewDew(),
      isArrayLike = _isArrayLikeDewDew(),
      isString = _isStringDewDew(),
      stringSize = _stringSizeDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]',
      setTag = '[object Set]';
  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */

  function size(collection) {
    if (collection == null) {
      return 0;
    }

    if (isArrayLike(collection)) {
      return isString(collection) ? stringSize(collection) : collection.length;
    }

    var tag = getTag(collection);

    if (tag == mapTag || tag == setTag) {
      return collection.size;
    }

    return baseKeys(collection).length;
  }

  exports = size;
  return exports;
}