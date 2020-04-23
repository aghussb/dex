import { dew as _baseFunctionsDewDew } from "./_baseFunctions.dew.js";
import { dew as _keysInDewDew } from "./keysIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFunctions = _baseFunctionsDewDew(),
      keysIn = _keysInDewDew();
  /**
   * Creates an array of function property names from own and inherited
   * enumerable properties of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the function names.
   * @see _.functions
   * @example
   *
   * function Foo() {
   *   this.a = _.constant('a');
   *   this.b = _.constant('b');
   * }
   *
   * Foo.prototype.c = _.constant('c');
   *
   * _.functionsIn(new Foo);
   * // => ['a', 'b', 'c']
   */


  function functionsIn(object) {
    return object == null ? [] : baseFunctions(object, keysIn(object));
  }

  exports = functionsIn;
  return exports;
}