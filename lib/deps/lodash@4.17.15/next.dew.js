import { dew as _toArrayDewDew } from "./toArray.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var toArray = _toArrayDewDew();
  /**
   * Gets the next value on a wrapped object following the
   * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
   *
   * @name next
   * @memberOf _
   * @since 4.0.0
   * @category Seq
   * @returns {Object} Returns the next iterator value.
   * @example
   *
   * var wrapped = _([1, 2]);
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 1 }
   *
   * wrapped.next();
   * // => { 'done': false, 'value': 2 }
   *
   * wrapped.next();
   * // => { 'done': true, 'value': undefined }
   */


  function wrapperNext() {
    if ((this || _global).__values__ === undefined) {
      (this || _global).__values__ = toArray(this.value());
    }

    var done = (this || _global).__index__ >= (this || _global).__values__.length,
        value = done ? undefined : (this || _global).__values__[(this || _global).__index__++];
    return {
      'done': done,
      'value': value
    };
  }

  exports = wrapperNext;
  return exports;
}