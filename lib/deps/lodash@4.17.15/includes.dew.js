import { dew as _baseIndexOfDewDew } from "./_baseIndexOf.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
import { dew as _isStringDewDew } from "./isString.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
import { dew as _valuesDewDew } from "./values.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIndexOf = _baseIndexOfDewDew(),
      isArrayLike = _isArrayLikeDewDew(),
      isString = _isStringDewDew(),
      toInteger = _toIntegerDewDew(),
      values = _valuesDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMax = Math.max;
  /**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'a': 1, 'b': 2 }, 1);
   * // => true
   *
   * _.includes('abcd', 'bc');
   * // => true
   */

  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;

    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }

    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
  }

  exports = includes;
  return exports;
}