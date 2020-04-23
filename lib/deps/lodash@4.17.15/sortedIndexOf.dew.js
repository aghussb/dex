import { dew as _baseSortedIndexDewDew } from "./_baseSortedIndex.dew.js";
import { dew as _eqDewDew } from "./eq.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSortedIndex = _baseSortedIndexDewDew(),
      eq = _eqDewDew();
  /**
   * This method is like `_.indexOf` except that it performs a binary
   * search on a sorted `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
   * // => 1
   */


  function sortedIndexOf(array, value) {
    var length = array == null ? 0 : array.length;

    if (length) {
      var index = baseSortedIndex(array, value);

      if (index < length && eq(array[index], value)) {
        return index;
      }
    }

    return -1;
  }

  exports = sortedIndexOf;
  return exports;
}