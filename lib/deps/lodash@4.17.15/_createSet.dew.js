import { dew as _SetDewDew } from "./_Set.dew.js";
import { dew as _noopDewDew } from "./noop.dew.js";
import { dew as _setToArrayDewDew } from "./_setToArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Set = _SetDewDew(),
      noop = _noopDewDew(),
      setToArray = _setToArrayDewDew();
  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0;
  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */

  var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
    return new Set(values);
  };
  exports = createSet;
  return exports;
}