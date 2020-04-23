import { dew as _baseFindIndexDewDew } from "./_baseFindIndex.dew.js";
import { dew as _baseIsNaNDewDew } from "./_baseIsNaN.dew.js";
import { dew as _strictIndexOfDewDew } from "./_strictIndexOf.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFindIndex = _baseFindIndexDewDew(),
      baseIsNaN = _baseIsNaNDewDew(),
      strictIndexOf = _strictIndexOfDewDew();
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  exports = baseIndexOf;
  return exports;
}