import { dew as _arraySampleDewDew } from "./_arraySample.dew.js";
import { dew as _baseSampleDewDew } from "./_baseSample.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arraySample = _arraySampleDewDew(),
      baseSample = _baseSampleDewDew(),
      isArray = _isArrayDewDew();
  /**
   * Gets a random element from `collection`.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   */


  function sample(collection) {
    var func = isArray(collection) ? arraySample : baseSample;
    return func(collection);
  }

  exports = sample;
  return exports;
}