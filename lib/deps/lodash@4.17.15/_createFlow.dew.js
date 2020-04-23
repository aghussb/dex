import { dew as _LodashWrapperDewDew } from "./_LodashWrapper.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
import { dew as _getDataDewDew } from "./_getData.dew.js";
import { dew as _getFuncNameDewDew } from "./_getFuncName.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isLaziableDewDew } from "./_isLaziable.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LodashWrapper = _LodashWrapperDewDew(),
      flatRest = _flatRestDewDew(),
      getData = _getDataDewDew(),
      getFuncName = _getFuncNameDewDew(),
      isArray = _isArrayDewDew(),
      isLaziable = _isLaziableDewDew();
  /** Error message constants. */


  var FUNC_ERROR_TEXT = 'Expected a function';
  /** Used to compose bitmasks for function metadata. */

  var WRAP_CURRY_FLAG = 8,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256;
  /**
   * Creates a `_.flow` or `_.flowRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new flow function.
   */

  function createFlow(fromRight) {
    return flatRest(function (funcs) {
      var length = funcs.length,
          index = length,
          prereq = LodashWrapper.prototype.thru;

      if (fromRight) {
        funcs.reverse();
      }

      while (index--) {
        var func = funcs[index];

        if (typeof func != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }

        if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
          var wrapper = new LodashWrapper([], true);
        }
      }

      index = wrapper ? index : length;

      while (++index < length) {
        func = funcs[index];
        var funcName = getFuncName(func),
            data = funcName == 'wrapper' ? getData(func) : undefined;

        if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
          wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
        } else {
          wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
        }
      }

      return function () {
        var args = arguments,
            value = args[0];

        if (wrapper && args.length == 1 && isArray(value)) {
          return wrapper.plant(value).value();
        }

        var index = 0,
            result = length ? funcs[index].apply(this || _global, args) : value;

        while (++index < length) {
          result = funcs[index].call(this || _global, result);
        }

        return result;
      };
    });
  }

  exports = createFlow;
  return exports;
}