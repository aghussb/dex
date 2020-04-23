import { dew as _arraySomeDewDew } from "./_arraySome.dew.js";
import { dew as _createOverDewDew } from "./_createOver.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arraySome = _arraySomeDewDew(),
      createOver = _createOverDewDew();
  /**
   * Creates a function that checks if **any** of the `predicates` return
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
   * var func = _.overSome([Boolean, isFinite]);
   *
   * func('1');
   * // => true
   *
   * func(null);
   * // => true
   *
   * func(NaN);
   * // => false
   */


  var overSome = createOver(arraySome);
  exports = overSome;
  return exports;
}