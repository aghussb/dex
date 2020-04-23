import { dew as _baseAssignValueDewDew } from "./_baseAssignValue.dew.js";
import { dew as _eqDewDew } from "./eq.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseAssignValue = _baseAssignValueDewDew(),
      eq = _eqDewDew();
  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */


  function assignMergeValue(object, key, value) {
    if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  exports = assignMergeValue;
  return exports;
}