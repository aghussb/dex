import { dew as _identityDewDew } from "./identity.dew.js";
import { dew as _overRestDewDew } from "./_overRest.dew.js";
import { dew as _setToStringDewDew } from "./_setToString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var identity = _identityDewDew(),
      overRest = _overRestDewDew(),
      setToString = _setToStringDewDew();
  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */


  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  exports = baseRest;
  return exports;
}