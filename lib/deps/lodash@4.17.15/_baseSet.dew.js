import { dew as _assignValueDewDew } from "./_assignValue.dew.js";
import { dew as _castPathDewDew } from "./_castPath.dew.js";
import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assignValue = _assignValueDewDew(),
      castPath = _castPathDewDew(),
      isIndex = _isIndexDewDew(),
      isObject = _isObjectDewDew(),
      toKey = _toKeyDewDew();
  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */


  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }

    path = castPath(path, object);
    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = toKey(path[index]),
          newValue = value;

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;

        if (newValue === undefined) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }

      assignValue(nested, key, newValue);
      nested = nested[key];
    }

    return object;
  }

  exports = baseSet;
  return exports;
}