import { dew as _baseForRightDewDew } from "./_baseForRight.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseForRight = _baseForRightDewDew(),
      keys = _keysDewDew();
  /**
   * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */


  function baseForOwnRight(object, iteratee) {
    return object && baseForRight(object, iteratee, keys);
  }

  exports = baseForOwnRight;
  return exports;
}