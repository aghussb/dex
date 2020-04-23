import { dew as _ListCacheDewDew } from "./_ListCache.dew.js";
import { dew as _MapDewDew } from "./_Map.dew.js";
import { dew as _MapCacheDewDew } from "./_MapCache.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var ListCache = _ListCacheDewDew(),
      Map = _MapDewDew(),
      MapCache = _MapCacheDewDew();
  /** Used as the size to enable large array optimizations. */


  var LARGE_ARRAY_SIZE = 200;
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */

  function stackSet(key, value) {
    var data = (this || _global).__data__;

    if (data instanceof ListCache) {
      var pairs = data.__data__;

      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        (this || _global).size = ++data.size;
        return this || _global;
      }

      data = (this || _global).__data__ = new MapCache(pairs);
    }

    data.set(key, value);
    (this || _global).size = data.size;
    return this || _global;
  }

  exports = stackSet;
  return exports;
}