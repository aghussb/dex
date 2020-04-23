import { dew as _MapCacheDewDew } from "./_MapCache.dew.js";
import { dew as _setCacheAddDewDew } from "./_setCacheAdd.dew.js";
import { dew as _setCacheHasDewDew } from "./_setCacheHas.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var MapCache = _MapCacheDewDew(),
      setCacheAdd = _setCacheAddDewDew(),
      setCacheHas = _setCacheHasDewDew();
  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */


  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
    (this || _global).__data__ = new MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  } // Add methods to `SetCache`.


  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  exports = SetCache;
  return exports;
}