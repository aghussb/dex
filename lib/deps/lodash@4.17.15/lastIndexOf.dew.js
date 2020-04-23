import { dew as _baseFindIndexDewDew } from "./_baseFindIndex.dew.js";
import { dew as _baseIsNaNDewDew } from "./_baseIsNaN.dew.js";
import { dew as _strictLastIndexOfDewDew } from "./_strictLastIndexOf.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFindIndex = _baseFindIndexDewDew(),
      baseIsNaN = _baseIsNaNDewDew(),
      strictLastIndexOf = _strictLastIndexOfDewDew(),
      toInteger = _toIntegerDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMax = Math.max,
      nativeMin = Math.min;
  /**
   * This method is like `_.indexOf` except that it iterates over elements of
   * `array` from right to left.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 1, 2], 2);
   * // => 3
   *
   * // Search from the `fromIndex`.
   * _.lastIndexOf([1, 2, 1, 2], 2, 2);
   * // => 1
   */

  function lastIndexOf(array, value, fromIndex) {
    var length = array == null ? 0 : array.length;

    if (!length) {
      return -1;
    }

    var index = length;

    if (fromIndex !== undefined) {
      index = toInteger(fromIndex);
      index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
    }

    return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
  }

  exports = lastIndexOf;
  return exports;
}