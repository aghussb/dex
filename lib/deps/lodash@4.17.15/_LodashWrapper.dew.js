import { dew as _baseCreateDewDew } from "./_baseCreate.dew.js";
import { dew as _baseLodashDewDew } from "./_baseLodash.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseCreate = _baseCreateDewDew(),
      baseLodash = _baseLodashDewDew();
  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */


  function LodashWrapper(value, chainAll) {
    (this || _global).__wrapped__ = value;
    (this || _global).__actions__ = [];
    (this || _global).__chain__ = !!chainAll;
    (this || _global).__index__ = 0;
    (this || _global).__values__ = undefined;
  }

  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  exports = LodashWrapper;
  return exports;
}