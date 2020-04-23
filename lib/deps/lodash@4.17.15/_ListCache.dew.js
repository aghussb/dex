import { dew as _listCacheClearDewDew } from "./_listCacheClear.dew.js";
import { dew as _listCacheDeleteDewDew } from "./_listCacheDelete.dew.js";
import { dew as _listCacheGetDewDew } from "./_listCacheGet.dew.js";
import { dew as _listCacheHasDewDew } from "./_listCacheHas.dew.js";
import { dew as _listCacheSetDewDew } from "./_listCacheSet.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var listCacheClear = _listCacheClearDewDew(),
      listCacheDelete = _listCacheDeleteDewDew(),
      listCacheGet = _listCacheGetDewDew(),
      listCacheHas = _listCacheHasDewDew(),
      listCacheSet = _listCacheSetDewDew();
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */


  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.


  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  exports = ListCache;
  return exports;
}