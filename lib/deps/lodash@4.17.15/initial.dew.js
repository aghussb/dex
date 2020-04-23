import { dew as _baseSliceDewDew } from "./_baseSlice.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSlice = _baseSliceDewDew();
  /**
   * Gets all but the last element of `array`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */


  function initial(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 0, -1) : [];
  }

  exports = initial;
  return exports;
}