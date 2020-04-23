import { dew as _baseGetDewDew } from "./_baseGet.dew.js";
import { dew as _baseSetDewDew } from "./_baseSet.dew.js";
import { dew as _castPathDewDew } from "./_castPath.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGet = _baseGetDewDew(),
      baseSet = _baseSetDewDew(),
      castPath = _castPathDewDew();
  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */


  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};

    while (++index < length) {
      var path = paths[index],
          value = baseGet(object, path);

      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }

    return result;
  }

  exports = basePickBy;
  return exports;
}