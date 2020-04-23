import { dew as _baseInvokeDewDew } from "./_baseInvoke.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseInvoke = _baseInvokeDewDew(),
      baseRest = _baseRestDewDew();
  /**
   * Invokes the method at `path` of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {...*} [args] The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
   *
   * _.invoke(object, 'a[0].b.c.slice', 1, 3);
   * // => [2, 3]
   */


  var invoke = baseRest(baseInvoke);
  exports = invoke;
  return exports;
}