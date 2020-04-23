import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _LodashWrapperDewDew } from "./_LodashWrapper.dew.js";
import { dew as _reverseDewDew } from "./reverse.dew.js";
import { dew as _thruDewDew } from "./thru.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      LodashWrapper = _LodashWrapperDewDew(),
      reverse = _reverseDewDew(),
      thru = _thruDewDew();
  /**
   * This method is the wrapper version of `_.reverse`.
   *
   * **Note:** This method mutates the wrapped array.
   *
   * @name reverse
   * @memberOf _
   * @since 0.1.0
   * @category Seq
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var array = [1, 2, 3];
   *
   * _(array).reverse().value()
   * // => [3, 2, 1]
   *
   * console.log(array);
   * // => [3, 2, 1]
   */


  function wrapperReverse() {
    var value = (this || _global).__wrapped__;

    if (value instanceof LazyWrapper) {
      var wrapped = value;

      if ((this || _global).__actions__.length) {
        wrapped = new LazyWrapper(this || _global);
      }

      wrapped = wrapped.reverse();

      wrapped.__actions__.push({
        'func': thru,
        'args': [reverse],
        'thisArg': undefined
      });

      return new LodashWrapper(wrapped, (this || _global).__chain__);
    }

    return this.thru(reverse);
  }

  exports = wrapperReverse;
  return exports;
}