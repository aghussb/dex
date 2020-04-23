import { dew as _baseGetDewDew } from "./_baseGet.dew.js";
import { dew as _baseSetDewDew } from "./_baseSet.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGet = _baseGetDewDew(),
      baseSet = _baseSetDewDew();
  /**
   * The base implementation of `_.update`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to update.
   * @param {Function} updater The function to produce the updated value.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */


  function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
  }

  exports = baseUpdate;
  return exports;
}