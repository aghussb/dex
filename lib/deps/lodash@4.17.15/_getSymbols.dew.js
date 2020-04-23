import { dew as _arrayFilterDewDew } from "./_arrayFilter.dew.js";
import { dew as _stubArrayDewDew } from "./stubArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayFilter = _arrayFilterDewDew(),
      stubArray = _stubArrayDewDew();
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  exports = getSymbols;
  return exports;
}