import { dew as _ListCacheDewDew } from "./_ListCache.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var ListCache = _ListCacheDewDew();
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */


  function stackClear() {
    (this || _global).__data__ = new ListCache();
    (this || _global).size = 0;
  }

  exports = stackClear;
  return exports;
}