import { dew as _baseSliceDewDew } from "./_baseSlice.dew.js";
import { dew as _isIterateeCallDewDew } from "./_isIterateeCall.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSlice = _baseSliceDewDew(),
      isIterateeCall = _isIterateeCallDewDew(),
      toInteger = _toIntegerDewDew();
  /**
   * Creates a slice of `array` from `start` up to, but not including, `end`.
   *
   * **Note:** This method is used instead of
   * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
   * returned.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */


  function slice(array, start, end) {
    var length = array == null ? 0 : array.length;

    if (!length) {
      return [];
    }

    if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
      start = 0;
      end = length;
    } else {
      start = start == null ? 0 : toInteger(start);
      end = end === undefined ? length : toInteger(end);
    }

    return baseSlice(array, start, end);
  }

  exports = slice;
  return exports;
}