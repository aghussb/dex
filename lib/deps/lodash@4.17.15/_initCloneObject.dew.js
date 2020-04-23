import { dew as _baseCreateDewDew } from "./_baseCreate.dew.js";
import { dew as _getPrototypeDewDew } from "./_getPrototype.dew.js";
import { dew as _isPrototypeDewDew } from "./_isPrototype.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseCreate = _baseCreateDewDew(),
      getPrototype = _getPrototypeDewDew(),
      isPrototype = _isPrototypeDewDew();
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */


  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  exports = initCloneObject;
  return exports;
}