import { dew as _coreJsDataDewDew } from "./_coreJsData.dew.js";
import { dew as _isFunctionDewDew } from "./isFunction.dew.js";
import { dew as _stubFalseDewDew } from "./stubFalse.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var coreJsData = _coreJsDataDewDew(),
      isFunction = _isFunctionDewDew(),
      stubFalse = _stubFalseDewDew();
  /**
   * Checks if `func` is capable of being masked.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
   */


  var isMaskable = coreJsData ? isFunction : stubFalse;
  exports = isMaskable;
  return exports;
}