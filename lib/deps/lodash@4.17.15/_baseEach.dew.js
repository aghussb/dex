import { dew as _baseForOwnDewDew } from "./_baseForOwn.dew.js";
import { dew as _createBaseEachDewDew } from "./_createBaseEach.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseForOwn = _baseForOwnDewDew(),
      createBaseEach = _createBaseEachDewDew();
  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */


  var baseEach = createBaseEach(baseForOwn);
  exports = baseEach;
  return exports;
}