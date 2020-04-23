import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _createWrapDewDew } from "./_createWrap.dew.js";
import { dew as _getHolderDewDew } from "./_getHolder.dew.js";
import { dew as _replaceHoldersDewDew } from "./_replaceHolders.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseRest = _baseRestDewDew(),
      createWrap = _createWrapDewDew(),
      getHolder = _getHolderDewDew(),
      replaceHolders = _replaceHoldersDewDew();
  /** Used to compose bitmasks for function metadata. */


  var WRAP_PARTIAL_RIGHT_FLAG = 64;
  /**
   * This method is like `_.partial` except that partially applied arguments
   * are appended to the arguments it receives.
   *
   * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method doesn't set the "length" property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * function greet(greeting, name) {
   *   return greeting + ' ' + name;
   * }
   *
   * var greetFred = _.partialRight(greet, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   *
   * // Partially applied with placeholders.
   * var sayHelloTo = _.partialRight(greet, 'hello', _);
   * sayHelloTo('fred');
   * // => 'hello fred'
   */

  var partialRight = baseRest(function (func, partials) {
    var holders = replaceHolders(partials, getHolder(partialRight));
    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
  }); // Assign default placeholders.

  partialRight.placeholder = {};
  exports = partialRight;
  return exports;
}