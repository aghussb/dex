import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isIndex = _isIndexDewDew();
  /**
   * The base implementation of `_.nth` which doesn't coerce arguments.
   *
   * @private
   * @param {Array} array The array to query.
   * @param {number} n The index of the element to return.
   * @returns {*} Returns the nth element of `array`.
   */


  function baseNth(array, n) {
    var length = array.length;

    if (!length) {
      return;
    }

    n += n < 0 ? length : 0;
    return isIndex(n, length) ? array[n] : undefined;
  }

  exports = baseNth;
  return exports;
}