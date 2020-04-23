import { dew as _baseLodashDewDew } from "./_baseLodash.dew.js";
import { dew as _wrapperCloneDewDew } from "./_wrapperClone.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseLodash = _baseLodashDewDew(),
      wrapperClone = _wrapperCloneDewDew();
  /**
   * Creates a clone of the chain sequence planting `value` as the wrapped value.
   *
   * @name plant
   * @memberOf _
   * @since 3.2.0
   * @category Seq
   * @param {*} value The value to plant.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2]).map(square);
   * var other = wrapped.plant([3, 4]);
   *
   * other.value();
   * // => [9, 16]
   *
   * wrapped.value();
   * // => [1, 4]
   */


  function wrapperPlant(value) {
    var result,
        parent = this || _global;

    while (parent instanceof baseLodash) {
      var clone = wrapperClone(parent);
      clone.__index__ = 0;
      clone.__values__ = undefined;

      if (result) {
        previous.__wrapped__ = clone;
      } else {
        result = clone;
      }

      var previous = clone;
      parent = parent.__wrapped__;
    }

    previous.__wrapped__ = value;
    return result;
  }

  exports = wrapperPlant;
  return exports;
}