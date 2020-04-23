import { dew as _arrayEachDewDew } from "./_arrayEach.dew.js";
import { dew as _baseCreateDewDew } from "./_baseCreate.dew.js";
import { dew as _baseForOwnDewDew } from "./_baseForOwn.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _getPrototypeDewDew } from "./_getPrototype.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isBufferDewDew } from "./isBuffer.dew.js";
import { dew as _isFunctionDewDew } from "./isFunction.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _isTypedArrayDewDew } from "./isTypedArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayEach = _arrayEachDewDew(),
      baseCreate = _baseCreateDewDew(),
      baseForOwn = _baseForOwnDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      getPrototype = _getPrototypeDewDew(),
      isArray = _isArrayDewDew(),
      isBuffer = _isBufferDewDew(),
      isFunction = _isFunctionDewDew(),
      isObject = _isObjectDewDew(),
      isTypedArray = _isTypedArrayDewDew();
  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */


  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
        isArrLike = isArr || isBuffer(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);

    if (accumulator == null) {
      var Ctor = object && object.constructor;

      if (isArrLike) {
        accumulator = isArr ? new Ctor() : [];
      } else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      } else {
        accumulator = {};
      }
    }

    (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  exports = transform;
  return exports;
}