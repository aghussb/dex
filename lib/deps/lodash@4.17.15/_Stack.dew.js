import { dew as _ListCacheDewDew } from "./_ListCache.dew.js";
import { dew as _stackClearDewDew } from "./_stackClear.dew.js";
import { dew as _stackDeleteDewDew } from "./_stackDelete.dew.js";
import { dew as _stackGetDewDew } from "./_stackGet.dew.js";
import { dew as _stackHasDewDew } from "./_stackHas.dew.js";
import { dew as _stackSetDewDew } from "./_stackSet.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var ListCache = _ListCacheDewDew(),
      stackClear = _stackClearDewDew(),
      stackDelete = _stackDeleteDewDew(),
      stackGet = _stackGetDewDew(),
      stackHas = _stackHasDewDew(),
      stackSet = _stackSetDewDew();
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */


  function Stack(entries) {
    var data = (this || _global).__data__ = new ListCache(entries);
    (this || _global).size = data.size;
  } // Add methods to `Stack`.


  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  exports = Stack;
  return exports;
}