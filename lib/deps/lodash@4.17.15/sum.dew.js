import { dew as _baseSumDewDew } from "./_baseSum.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSum = _baseSumDewDew(),
      identity = _identityDewDew();
  /**
   * Computes the sum of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   * @example
   *
   * _.sum([4, 2, 8, 6]);
   * // => 20
   */


  function sum(array) {
    return array && array.length ? baseSum(array, identity) : 0;
  }

  exports = sum;
  return exports;
}