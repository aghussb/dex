import { dew as _baseClampDewDew } from "./_baseClamp.dew.js";
import { dew as _shuffleSelfDewDew } from "./_shuffleSelf.dew.js";
import { dew as _valuesDewDew } from "./values.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseClamp = _baseClampDewDew(),
      shuffleSelf = _shuffleSelfDewDew(),
      values = _valuesDewDew();
  /**
   * The base implementation of `_.sampleSize` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @param {number} n The number of elements to sample.
   * @returns {Array} Returns the random elements.
   */


  function baseSampleSize(collection, n) {
    var array = values(collection);
    return shuffleSelf(array, baseClamp(n, 0, array.length));
  }

  exports = baseSampleSize;
  return exports;
}