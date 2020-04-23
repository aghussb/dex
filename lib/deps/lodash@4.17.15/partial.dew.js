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


  var WRAP_PARTIAL_FLAG = 32;
  /**
   * Creates a function that invokes `func` with `partials` prepended to the
   * arguments it receives. This method is like `_.bind` except it does **not**
   * alter the `this` binding.
   *
   * The `_.partial.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method doesn't set the "length" property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @since 0.2.0
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
   * var sayHelloTo = _.partial(greet, 'hello');
   * sayHelloTo('fred');
   * // => 'hello fred'
   *
   * // Partially applied with placeholders.
   * var greetFred = _.partial(greet, _, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   */

  var partial = baseRest(function (func, partials) {
    var holders = replaceHolders(partials, getHolder(partial));
    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
  }); // Assign default placeholders.

  partial.placeholder = {};
  exports = partial;
  return exports;
}