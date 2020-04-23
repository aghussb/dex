import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _isPrototypeDewDew } from "./_isPrototype.dew.js";
import { dew as _nativeKeysInDewDew } from "./_nativeKeysIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isObject = _isObjectDewDew(),
      isPrototype = _isPrototypeDewDew(),
      nativeKeysIn = _nativeKeysInDewDew();
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }

    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  exports = baseKeysIn;
  return exports;
}