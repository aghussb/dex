import { dew as _baseExtremumDewDew } from "./_baseExtremum.dew.js";
import { dew as _baseLtDewDew } from "./_baseLt.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseExtremum = _baseExtremumDewDew(),
      baseLt = _baseLtDewDew(),
      identity = _identityDewDew();
  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */


  function min(array) {
    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
  }

  exports = min;
  return exports;
}