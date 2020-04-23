import { dew as _baseMeanDewDew } from "./_baseMean.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseMean = _baseMeanDewDew(),
      identity = _identityDewDew();
  /**
   * Computes the mean of the values in `array`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the mean.
   * @example
   *
   * _.mean([4, 2, 8, 6]);
   * // => 5
   */


  function mean(array) {
    return baseMean(array, identity);
  }

  exports = mean;
  return exports;
}