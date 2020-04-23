import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _basePickByDewDew } from "./_basePickBy.dew.js";
import { dew as _getAllKeysInDewDew } from "./_getAllKeysIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      basePickBy = _basePickByDewDew(),
      getAllKeysIn = _getAllKeysInDewDew();
  /**
   * Creates an object composed of the `object` properties `predicate` returns
   * truthy for. The predicate is invoked with two arguments: (value, key).
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
   * _.pickBy(object, _.isNumber);
   * // => { 'a': 1, 'c': 3 }
   */


  function pickBy(object, predicate) {
    if (object == null) {
      return {};
    }

    var props = arrayMap(getAllKeysIn(object), function (prop) {
      return [prop];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function (value, path) {
      return predicate(value, path[0]);
    });
  }

  exports = pickBy;
  return exports;
}