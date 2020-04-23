import { dew as _createCtorDewDew } from "./_createCtor.dew.js";
import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createCtor = _createCtorDewDew(),
      root = _rootDewDew();
  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG = 1;
  /**
   * Creates a function that wraps `func` to invoke it with the optional `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG,
        Ctor = createCtor(func);

    function wrapper() {
      var fn = (this || _global) && (this || _global) !== root && (this || _global) instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this || _global, arguments);
    }

    return wrapper;
  }

  exports = createBind;
  return exports;
}