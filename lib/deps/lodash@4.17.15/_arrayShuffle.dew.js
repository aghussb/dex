import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _shuffleSelfDewDew } from "./_shuffleSelf.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var copyArray = _copyArrayDewDew(),
      shuffleSelf = _shuffleSelfDewDew();
  /**
   * A specialized version of `_.shuffle` for arrays.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */


  function arrayShuffle(array) {
    return shuffleSelf(copyArray(array));
  }

  exports = arrayShuffle;
  return exports;
}