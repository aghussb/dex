import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _createCtorDewDew } from "./_createCtor.dew.js";
import { dew as _createHybridDewDew } from "./_createHybrid.dew.js";
import { dew as _createRecurryDewDew } from "./_createRecurry.dew.js";
import { dew as _getHolderDewDew } from "./_getHolder.dew.js";
import { dew as _replaceHoldersDewDew } from "./_replaceHolders.dew.js";
import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      createCtor = _createCtorDewDew(),
      createHybrid = _createHybridDewDew(),
      createRecurry = _createRecurryDewDew(),
      getHolder = _getHolderDewDew(),
      replaceHolders = _replaceHoldersDewDew(),
      root = _rootDewDew();
  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */


  function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = getHolder(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }

      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
      length -= holders.length;

      if (length < arity) {
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }

      var fn = (this || _global) && (this || _global) !== root && (this || _global) instanceof wrapper ? Ctor : func;
      return apply(fn, this || _global, args);
    }

    return wrapper;
  }

  exports = createCurry;
  return exports;
}