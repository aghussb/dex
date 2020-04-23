import { dew as _baseGetAllKeysDewDew } from "./_baseGetAllKeys.dew.js";
import { dew as _getSymbolsDewDew } from "./_getSymbols.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGetAllKeys = _baseGetAllKeysDewDew(),
      getSymbols = _getSymbolsDewDew(),
      keys = _keysDewDew();
  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */


  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  exports = getAllKeys;
  return exports;
}