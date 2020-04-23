import { dew as _baseForOwnRightDewDew } from "./_baseForOwnRight.dew.js";
import { dew as _createBaseEachDewDew } from "./_createBaseEach.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseForOwnRight = _baseForOwnRightDewDew(),
      createBaseEach = _createBaseEachDewDew();
  /**
   * The base implementation of `_.forEachRight` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */


  var baseEachRight = createBaseEach(baseForOwnRight, true);
  exports = baseEachRight;
  return exports;
}