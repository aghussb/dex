import { dew as _baseSortedUniqDewDew } from "./_baseSortedUniq.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSortedUniq = _baseSortedUniqDewDew();
  /**
   * This method is like `_.uniq` except that it's designed and optimized
   * for sorted arrays.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.sortedUniq([1, 1, 2]);
   * // => [1, 2]
   */


  function sortedUniq(array) {
    return array && array.length ? baseSortedUniq(array) : [];
  }

  exports = sortedUniq;
  return exports;
}