import { dew as _copyObjectDewDew } from "./_copyObject.dew.js";
import { dew as _getSymbolsDewDew } from "./_getSymbols.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var copyObject = _copyObjectDewDew(),
      getSymbols = _getSymbolsDewDew();
  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */


  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  exports = copySymbols;
  return exports;
}