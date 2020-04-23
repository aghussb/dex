import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _LodashWrapperDewDew } from "./_LodashWrapper.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      LodashWrapper = _LodashWrapperDewDew(),
      copyArray = _copyArrayDewDew();
  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */


  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }

    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  exports = wrapperClone;
  return exports;
}