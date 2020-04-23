import { dew as _SetCacheDewDew } from "./_SetCache.dew.js";
import { dew as _arrayIncludesDewDew } from "./_arrayIncludes.dew.js";
import { dew as _arrayIncludesWithDewDew } from "./_arrayIncludesWith.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _cacheHasDewDew } from "./_cacheHas.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var SetCache = _SetCacheDewDew(),
      arrayIncludes = _arrayIncludesDewDew(),
      arrayIncludesWith = _arrayIncludesWithDewDew(),
      arrayMap = _arrayMapDewDew(),
      baseUnary = _baseUnaryDewDew(),
      cacheHas = _cacheHasDewDew();
  /** Used as the size to enable large array optimizations. */


  var LARGE_ARRAY_SIZE = 200;
  /**
   * The base implementation of methods like `_.difference` without support
   * for excluding multiple arrays or iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Array} values The values to exclude.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   */

  function baseDifference(array, values, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        isCommon = true,
        length = array.length,
        result = [],
        valuesLength = values.length;

    if (!length) {
      return result;
    }

    if (iteratee) {
      values = arrayMap(values, baseUnary(iteratee));
    }

    if (comparator) {
      includes = arrayIncludesWith;
      isCommon = false;
    } else if (values.length >= LARGE_ARRAY_SIZE) {
      includes = cacheHas;
      isCommon = false;
      values = new SetCache(values);
    }

    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;

      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;

        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }

        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }

    return result;
  }

  exports = baseDifference;
  return exports;
}