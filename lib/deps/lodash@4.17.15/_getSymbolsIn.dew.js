import { dew as _arrayPushDewDew } from "./_arrayPush.dew.js";
import { dew as _getPrototypeDewDew } from "./_getPrototype.dew.js";
import { dew as _getSymbolsDewDew } from "./_getSymbols.dew.js";
import { dew as _stubArrayDewDew } from "./stubArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayPush = _arrayPushDewDew(),
      getPrototype = _getPrototypeDewDew(),
      getSymbols = _getSymbolsDewDew(),
      stubArray = _stubArrayDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];

    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }

    return result;
  };
  exports = getSymbolsIn;
  return exports;
}