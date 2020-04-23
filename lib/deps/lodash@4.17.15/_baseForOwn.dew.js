import { dew as _baseForDewDew } from "./_baseFor.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFor = _baseForDewDew(),
      keys = _keysDewDew();
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */


  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  exports = baseForOwn;
  return exports;
}