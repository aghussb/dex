import { dew as _hashClearDewDew } from "./_hashClear.dew.js";
import { dew as _hashDeleteDewDew } from "./_hashDelete.dew.js";
import { dew as _hashGetDewDew } from "./_hashGet.dew.js";
import { dew as _hashHasDewDew } from "./_hashHas.dew.js";
import { dew as _hashSetDewDew } from "./_hashSet.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var hashClear = _hashClearDewDew(),
      hashDelete = _hashDeleteDewDew(),
      hashGet = _hashGetDewDew(),
      hashHas = _hashHasDewDew(),
      hashSet = _hashSetDewDew();
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */


  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.


  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  exports = Hash;
  return exports;
}