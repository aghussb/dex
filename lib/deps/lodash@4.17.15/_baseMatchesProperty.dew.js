import { dew as _baseIsEqualDewDew } from "./_baseIsEqual.dew.js";
import { dew as _getDewDew } from "./get.dew.js";
import { dew as _hasInDewDew } from "./hasIn.dew.js";
import { dew as _isKeyDewDew } from "./_isKey.dew.js";
import { dew as _isStrictComparableDewDew } from "./_isStrictComparable.dew.js";
import { dew as _matchesStrictComparableDewDew } from "./_matchesStrictComparable.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsEqual = _baseIsEqualDewDew(),
      get = _getDewDew(),
      hasIn = _hasInDewDew(),
      isKey = _isKeyDewDew(),
      isStrictComparable = _isStrictComparableDewDew(),
      matchesStrictComparable = _matchesStrictComparableDewDew(),
      toKey = _toKeyDewDew();
  /** Used to compose bitmasks for value comparisons. */


  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }

    return function (object) {
      var objValue = get(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  exports = baseMatchesProperty;
  return exports;
}