import { dew as _getMapDataDewDew } from "./_getMapData.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getMapData = _getMapDataDewDew();
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function mapCacheDelete(key) {
    var result = getMapData(this || _global, key)['delete'](key);
    (this || _global).size -= result ? 1 : 0;
    return result;
  }

  exports = mapCacheDelete;
  return exports;
}