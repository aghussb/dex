import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _castPathDewDew } from "./_castPath.dew.js";
import { dew as _lastDewDew } from "./last.dew.js";
import { dew as _parentDewDew } from "./_parent.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      castPath = _castPathDewDew(),
      last = _lastDewDew(),
      parent = _parentDewDew(),
      toKey = _toKeyDewDew();
  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */


  function baseInvoke(object, path, args) {
    path = castPath(path, object);
    object = parent(object, path);
    var func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : apply(func, object, args);
  }

  exports = baseInvoke;
  return exports;
}