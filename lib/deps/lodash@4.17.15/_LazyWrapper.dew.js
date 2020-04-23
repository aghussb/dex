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
  /** Used as references for the maximum length and index of an array. */


  var MAX_ARRAY_LENGTH = 4294967295;
  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */

  function LazyWrapper(value) {
    (this || _global).__wrapped__ = value;
    (this || _global).__actions__ = [];
    (this || _global).__dir__ = 1;
    (this || _global).__filtered__ = false;
    (this || _global).__iteratees__ = [];
    (this || _global).__takeCount__ = MAX_ARRAY_LENGTH;
    (this || _global).__views__ = [];
  } // Ensure `LazyWrapper` is an instance of `baseLodash`.


  LazyWrapper.prototype = baseCreate(baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;
  exports = LazyWrapper;
  return exports;
}