import { dew as _baseMatchesDewDew } from "./_baseMatches.dew.js";
import { dew as _baseMatchesPropertyDewDew } from "./_baseMatchesProperty.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _propertyDewDew } from "./property.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseMatches = _baseMatchesDewDew(),
      baseMatchesProperty = _baseMatchesPropertyDewDew(),
      identity = _identityDewDew(),
      isArray = _isArrayDewDew(),
      property = _propertyDewDew();
  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */


  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity;
    }

    if (typeof value == 'object') {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }

    return property(value);
  }

  exports = baseIteratee;
  return exports;
}