import { dew as _arraySampleSizeDewDew } from "./_arraySampleSize.dew.js";
import { dew as _baseSampleSizeDewDew } from "./_baseSampleSize.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isIterateeCallDewDew } from "./_isIterateeCall.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arraySampleSize = _arraySampleSizeDewDew(),
      baseSampleSize = _baseSampleSizeDewDew(),
      isArray = _isArrayDewDew(),
      isIterateeCall = _isIterateeCallDewDew(),
      toInteger = _toIntegerDewDew();
  /**
   * Gets `n` random elements at unique keys from `collection` up to the
   * size of `collection`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @param {number} [n=1] The number of elements to sample.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the random elements.
   * @example
   *
   * _.sampleSize([1, 2, 3], 2);
   * // => [3, 1]
   *
   * _.sampleSize([1, 2, 3], 4);
   * // => [2, 3, 1]
   */


  function sampleSize(collection, n, guard) {
    if (guard ? isIterateeCall(collection, n, guard) : n === undefined) {
      n = 1;
    } else {
      n = toInteger(n);
    }

    var func = isArray(collection) ? arraySampleSize : baseSampleSize;
    return func(collection, n);
  }

  exports = sampleSize;
  return exports;
}