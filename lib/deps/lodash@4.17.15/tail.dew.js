import { dew as _baseSliceDewDew } from "./_baseSlice.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSlice = _baseSliceDewDew();
  /**
   * Gets all but the first element of `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.tail([1, 2, 3]);
   * // => [2, 3]
   */


  function tail(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseSlice(array, 1, length) : [];
  }

  exports = tail;
  return exports;
}