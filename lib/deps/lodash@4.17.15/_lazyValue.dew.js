import { dew as _baseWrapperValueDewDew } from "./_baseWrapperValue.dew.js";
import { dew as _getViewDewDew } from "./_getView.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseWrapperValue = _baseWrapperValueDewDew(),
      getView = _getViewDewDew(),
      isArray = _isArrayDewDew();
  /** Used to indicate the type of lazy iteratees. */


  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMin = Math.min;
  /**
   * Extracts the unwrapped value from its lazy wrapper.
   *
   * @private
   * @name value
   * @memberOf LazyWrapper
   * @returns {*} Returns the unwrapped value.
   */

  function lazyValue() {
    var array = (this || _global).__wrapped__.value(),
        dir = (this || _global).__dir__,
        isArr = isArray(array),
        isRight = dir < 0,
        arrLength = isArr ? array.length : 0,
        view = getView(0, arrLength, (this || _global).__views__),
        start = view.start,
        end = view.end,
        length = end - start,
        index = isRight ? end : start - 1,
        iteratees = (this || _global).__iteratees__,
        iterLength = iteratees.length,
        resIndex = 0,
        takeCount = nativeMin(length, (this || _global).__takeCount__);

    if (!isArr || !isRight && arrLength == length && takeCount == length) {
      return baseWrapperValue(array, (this || _global).__actions__);
    }

    var result = [];

    outer: while (length-- && resIndex < takeCount) {
      index += dir;
      var iterIndex = -1,
          value = array[index];

      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex],
            iteratee = data.iteratee,
            type = data.type,
            computed = iteratee(value);

        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }

      result[resIndex++] = value;
    }

    return result;
  }

  exports = lazyValue;
  return exports;
}