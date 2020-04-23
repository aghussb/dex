import { dew as _assocIndexOfDewDew } from "./_assocIndexOf.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assocIndexOf = _assocIndexOfDewDew();
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */


  function listCacheSet(key, value) {
    var data = (this || _global).__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++(this || _global).size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this || _global;
  }

  exports = listCacheSet;
  return exports;
}