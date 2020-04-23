import { dew as _SetCacheDewDew } from "./_SetCache.dew.js";
import { dew as _arrayIncludesDewDew } from "./_arrayIncludes.dew.js";
import { dew as _arrayIncludesWithDewDew } from "./_arrayIncludesWith.dew.js";
import { dew as _cacheHasDewDew } from "./_cacheHas.dew.js";
import { dew as _createSetDewDew } from "./_createSet.dew.js";
import { dew as _setToArrayDewDew } from "./_setToArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var SetCache = _SetCacheDewDew(),
      arrayIncludes = _arrayIncludesDewDew(),
      arrayIncludesWith = _arrayIncludesWithDewDew(),
      cacheHas = _cacheHasDewDew(),
      createSet = _createSetDewDew(),
      setToArray = _setToArrayDewDew();
  /** Used as the size to enable large array optimizations. */


  var LARGE_ARRAY_SIZE = 200;
  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */

  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);

      if (set) {
        return setToArray(set);
      }

      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }

    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;

      if (isCommon && computed === computed) {
        var seenIndex = seen.length;

        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }

        if (iteratee) {
          seen.push(computed);
        }

        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }

        result.push(value);
      }
    }

    return result;
  }

  exports = baseUniq;
  return exports;
}