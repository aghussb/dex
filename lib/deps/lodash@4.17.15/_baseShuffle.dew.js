import { dew as _shuffleSelfDewDew } from "./_shuffleSelf.dew.js";
import { dew as _valuesDewDew } from "./values.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var shuffleSelf = _shuffleSelfDewDew(),
      values = _valuesDewDew();
  /**
   * The base implementation of `_.shuffle`.
   *
   * @private
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   */


  function baseShuffle(collection) {
    return shuffleSelf(values(collection));
  }

  exports = baseShuffle;
  return exports;
}