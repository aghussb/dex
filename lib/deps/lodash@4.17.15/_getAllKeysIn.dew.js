import { dew as _baseGetAllKeysDewDew } from "./_baseGetAllKeys.dew.js";
import { dew as _getSymbolsInDewDew } from "./_getSymbolsIn.dew.js";
import { dew as _keysInDewDew } from "./keysIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGetAllKeys = _baseGetAllKeysDewDew(),
      getSymbolsIn = _getSymbolsInDewDew(),
      keysIn = _keysInDewDew();
  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */


  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  exports = getAllKeysIn;
  return exports;
}