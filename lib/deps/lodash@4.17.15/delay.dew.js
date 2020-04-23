import { dew as _baseDelayDewDew } from "./_baseDelay.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _toNumberDewDew } from "./toNumber.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseDelay = _baseDelayDewDew(),
      baseRest = _baseRestDewDew(),
      toNumber = _toNumberDewDew();
  /**
   * Invokes `func` after `wait` milliseconds. Any additional arguments are
   * provided to `func` when it's invoked.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay invocation.
   * @param {...*} [args] The arguments to invoke `func` with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.delay(function(text) {
   *   console.log(text);
   * }, 1000, 'later');
   * // => Logs 'later' after one second.
   */


  var delay = baseRest(function (func, wait, args) {
    return baseDelay(func, toNumber(wait) || 0, args);
  });
  exports = delay;
  return exports;
}