import { dew as _baseConformsToDewDew } from "./_baseConformsTo.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseConformsTo = _baseConformsToDewDew(),
      keys = _keysDewDew();
  /**
   * The base implementation of `_.conforms` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property predicates to conform to.
   * @returns {Function} Returns the new spec function.
   */


  function baseConforms(source) {
    var props = keys(source);
    return function (object) {
      return baseConformsTo(object, source, props);
    };
  }

  exports = baseConforms;
  return exports;
}