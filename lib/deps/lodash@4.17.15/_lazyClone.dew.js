import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      copyArray = _copyArrayDewDew();
  /**
   * Creates a clone of the lazy wrapper object.
   *
   * @private
   * @name clone
   * @memberOf LazyWrapper
   * @returns {Object} Returns the cloned `LazyWrapper` object.
   */


  function lazyClone() {
    var result = new LazyWrapper((this || _global).__wrapped__);
    result.__actions__ = copyArray((this || _global).__actions__);
    result.__dir__ = (this || _global).__dir__;
    result.__filtered__ = (this || _global).__filtered__;
    result.__iteratees__ = copyArray((this || _global).__iteratees__);
    result.__takeCount__ = (this || _global).__takeCount__;
    result.__views__ = copyArray((this || _global).__views__);
    return result;
  }

  exports = lazyClone;
  return exports;
}