import { dew as _arrayEveryDewDew } from "./_arrayEvery.dew.js";
import { dew as _createOverDewDew } from "./_createOver.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayEvery = _arrayEveryDewDew(),
      createOver = _createOverDewDew();
  /**
   * Creates a function that checks if **all** of the `predicates` return
   * truthy when invoked with the arguments it receives.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Function|Function[])} [predicates=[_.identity]]
   *  The predicates to check.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.overEvery([Boolean, isFinite]);
   *
   * func('1');
   * // => true
   *
   * func(null);
   * // => false
   *
   * func(NaN);
   * // => false
   */


  var overEvery = createOver(arrayEvery);
  exports = overEvery;
  return exports;
}