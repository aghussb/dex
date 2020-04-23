import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _negateDewDew } from "./negate.dew.js";
import { dew as _pickByDewDew } from "./pickBy.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIteratee = _baseIterateeDewDew(),
      negate = _negateDewDew(),
      pickBy = _pickByDewDew();
  /**
   * The opposite of `_.pickBy`; this method creates an object composed of
   * the own and inherited enumerable string keyed properties of `object` that
   * `predicate` doesn't return truthy for. The predicate is invoked with two
   * arguments: (value, key).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The source object.
   * @param {Function} [predicate=_.identity] The function invoked per property.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.omitBy(object, _.isNumber);
   * // => { 'b': '2' }
   */


  function omitBy(object, predicate) {
    return pickBy(object, negate(baseIteratee(predicate)));
  }

  exports = omitBy;
  return exports;
}