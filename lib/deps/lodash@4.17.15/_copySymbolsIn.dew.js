import { dew as _copyObjectDewDew } from "./_copyObject.dew.js";
import { dew as _getSymbolsInDewDew } from "./_getSymbolsIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var copyObject = _copyObjectDewDew(),
      getSymbolsIn = _getSymbolsInDewDew();
  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */


  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  exports = copySymbolsIn;
  return exports;
}