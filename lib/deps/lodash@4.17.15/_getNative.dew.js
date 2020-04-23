import { dew as _baseIsNativeDewDew } from "./_baseIsNative.dew.js";
import { dew as _getValueDewDew } from "./_getValue.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsNative = _baseIsNativeDewDew(),
      getValue = _getValueDewDew();
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */


  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  exports = getNative;
  return exports;
}