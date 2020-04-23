import { dew as _flattenDewDew } from "./flatten.dew.js";
import { dew as _overRestDewDew } from "./_overRest.dew.js";
import { dew as _setToStringDewDew } from "./_setToString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var flatten = _flattenDewDew(),
      overRest = _overRestDewDew(),
      setToString = _setToStringDewDew();
  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */


  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }

  exports = flatRest;
  return exports;
}