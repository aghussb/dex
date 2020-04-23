import { dew as _nativeCreateDewDew } from "./_nativeCreate.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var nativeCreate = _nativeCreateDewDew();
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */


  function hashClear() {
    (this || _global).__data__ = nativeCreate ? nativeCreate(null) : {};
    (this || _global).size = 0;
  }

  exports = hashClear;
  return exports;
}