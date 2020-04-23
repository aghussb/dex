import { dew as _baseWrapperValueDewDew } from "./_baseWrapperValue.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseWrapperValue = _baseWrapperValueDewDew();
  /**
   * Executes the chain sequence to resolve the unwrapped value.
   *
   * @name value
   * @memberOf _
   * @since 0.1.0
   * @alias toJSON, valueOf
   * @category Seq
   * @returns {*} Returns the resolved unwrapped value.
   * @example
   *
   * _([1, 2, 3]).value();
   * // => [1, 2, 3]
   */


  function wrapperValue() {
    return baseWrapperValue((this || _global).__wrapped__, (this || _global).__actions__);
  }

  exports = wrapperValue;
  return exports;
}