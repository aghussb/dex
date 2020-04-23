import { dew as _isPlainObjectDewDew } from "./isPlainObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isPlainObject = _isPlainObjectDewDew();
  /**
   * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
   * objects.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {string} key The key of the property to inspect.
   * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
   */


  function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value;
  }

  exports = customOmitClone;
  return exports;
}