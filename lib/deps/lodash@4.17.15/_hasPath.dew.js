import { dew as _castPathDewDew } from "./_castPath.dew.js";
import { dew as _isArgumentsDewDew } from "./isArguments.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
import { dew as _isLengthDewDew } from "./isLength.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var castPath = _castPathDewDew(),
      isArguments = _isArgumentsDewDew(),
      isArray = _isArrayDewDew(),
      isIndex = _isIndexDewDew(),
      isLength = _isLengthDewDew(),
      toKey = _toKeyDewDew();
  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */


  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey(path[index]);

      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }

      object = object[key];
    }

    if (result || ++index != length) {
      return result;
    }

    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }

  exports = hasPath;
  return exports;
}