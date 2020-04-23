import { dew as _getMapDataDewDew } from "./_getMapData.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getMapData = _getMapDataDewDew();
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */


  function mapCacheSet(key, value) {
    var data = getMapData(this || _global, key),
        size = data.size;
    data.set(key, value);
    (this || _global).size += data.size == size ? 0 : 1;
    return this || _global;
  }

  exports = mapCacheSet;
  return exports;
}