import { dew as _baseExtremumDewDew } from "./_baseExtremum.dew.js";
import { dew as _baseGtDewDew } from "./_baseGt.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseExtremum = _baseExtremumDewDew(),
      baseGt = _baseGtDewDew(),
      identity = _identityDewDew();
  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */


  function max(array) {
    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
  }

  exports = max;
  return exports;
}