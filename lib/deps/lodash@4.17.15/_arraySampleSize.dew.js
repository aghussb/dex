import { dew as _baseClampDewDew } from "./_baseClamp.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _shuffleSelfDewDew } from "./_shuffleSelf.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseClamp = _baseClampDewDew(),
      copyArray = _copyArrayDewDew(),
      shuffleSelf = _shuffleSelfDewDew();
  /**
   * A specialized version of `_.sampleSize` for arrays.
   *
   * @private
   * @param {Array} array The array to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */


  function arraySampleSize(array, n) {
    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
  }

  exports = arraySampleSize;
  return exports;
}