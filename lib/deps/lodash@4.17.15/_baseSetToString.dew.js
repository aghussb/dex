import { dew as _constantDewDew } from "./constant.dew.js";
import { dew as _definePropertyDewDew } from "./_defineProperty.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var constant = _constantDewDew(),
      defineProperty = _definePropertyDewDew(),
      identity = _identityDewDew();
  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */


  var baseSetToString = !defineProperty ? identity : function (func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };
  exports = baseSetToString;
  return exports;
}