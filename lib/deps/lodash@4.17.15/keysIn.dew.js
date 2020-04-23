import { dew as _arrayLikeKeysDewDew } from "./_arrayLikeKeys.dew.js";
import { dew as _baseKeysInDewDew } from "./_baseKeysIn.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayLikeKeys = _arrayLikeKeysDewDew(),
      baseKeysIn = _baseKeysInDewDew(),
      isArrayLike = _isArrayLikeDewDew();
  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */


  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  exports = keysIn;
  return exports;
}