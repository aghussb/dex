import { dew as _castPathDewDew } from "./_castPath.dew.js";
import { dew as _lastDewDew } from "./last.dew.js";
import { dew as _parentDewDew } from "./_parent.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var castPath = _castPathDewDew(),
      last = _lastDewDew(),
      parent = _parentDewDew(),
      toKey = _toKeyDewDew();
  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */


  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }

  exports = baseUnset;
  return exports;
}