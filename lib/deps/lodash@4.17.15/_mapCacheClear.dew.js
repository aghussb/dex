import { dew as _HashDewDew } from "./_Hash.dew.js";
import { dew as _ListCacheDewDew } from "./_ListCache.dew.js";
import { dew as _MapDewDew } from "./_Map.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Hash = _HashDewDew(),
      ListCache = _ListCacheDewDew(),
      Map = _MapDewDew();
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */


  function mapCacheClear() {
    (this || _global).size = 0;
    (this || _global).__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  exports = mapCacheClear;
  return exports;
}