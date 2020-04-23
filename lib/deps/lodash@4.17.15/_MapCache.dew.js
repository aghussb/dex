import { dew as _mapCacheClearDewDew } from "./_mapCacheClear.dew.js";
import { dew as _mapCacheDeleteDewDew } from "./_mapCacheDelete.dew.js";
import { dew as _mapCacheGetDewDew } from "./_mapCacheGet.dew.js";
import { dew as _mapCacheHasDewDew } from "./_mapCacheHas.dew.js";
import { dew as _mapCacheSetDewDew } from "./_mapCacheSet.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var mapCacheClear = _mapCacheClearDewDew(),
      mapCacheDelete = _mapCacheDeleteDewDew(),
      mapCacheGet = _mapCacheGetDewDew(),
      mapCacheHas = _mapCacheHasDewDew(),
      mapCacheSet = _mapCacheSetDewDew();
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */


  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.


  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  exports = MapCache;
  return exports;
}