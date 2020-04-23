import { dew as _arraySampleDewDew } from "./_arraySample.dew.js";
import { dew as _valuesDewDew } from "./values.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arraySample = _arraySampleDewDew(),
      values = _valuesDewDew();
  /**
   * The base implementation of `_.sample`.
   *
   * @private
   * @param {Array|Object} collection The collection to sample.
   * @returns {*} Returns the random element.
   */


  function baseSample(collection) {
    return arraySample(values(collection));
  }

  exports = baseSample;
  return exports;
}