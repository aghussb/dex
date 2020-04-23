import { dew as _baseDelayDewDew } from "./_baseDelay.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseDelay = _baseDelayDewDew(),
      baseRest = _baseRestDewDew();
  /**
   * Defers invoking the `func` until the current call stack has cleared. Any
   * additional arguments are provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to defer.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.defer(function(text) {
   *   console.log(text);
   * }, 'deferred');
   * // => Logs 'deferred' after one millisecond.
   */


  var defer = baseRest(function (func, args) {
    return baseDelay(func, 1, args);
  });
  exports = defer;
  return exports;
}