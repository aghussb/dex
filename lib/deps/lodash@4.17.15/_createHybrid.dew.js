import { dew as _composeArgsDewDew } from "./_composeArgs.dew.js";
import { dew as _composeArgsRightDewDew } from "./_composeArgsRight.dew.js";
import { dew as _countHoldersDewDew } from "./_countHolders.dew.js";
import { dew as _createCtorDewDew } from "./_createCtor.dew.js";
import { dew as _createRecurryDewDew } from "./_createRecurry.dew.js";
import { dew as _getHolderDewDew } from "./_getHolder.dew.js";
import { dew as _reorderDewDew } from "./_reorder.dew.js";
import { dew as _replaceHoldersDewDew } from "./_replaceHolders.dew.js";
import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var composeArgs = _composeArgsDewDew(),
      composeArgsRight = _composeArgsRightDewDew(),
      countHolders = _countHoldersDewDew(),
      createCtor = _createCtorDewDew(),
      createRecurry = _createRecurryDewDew(),
      getHolder = _getHolderDewDew(),
      reorder = _reorderDewDew(),
      replaceHolders = _replaceHoldersDewDew(),
      root = _rootDewDew();
  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_ARY_FLAG = 128,
      WRAP_FLIP_FLAG = 512;
  /**
   * Creates a function that wraps `func` to invoke it with optional `this`
   * binding of `thisArg`, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided
   *  to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG,
        isBind = bitmask & WRAP_BIND_FLAG,
        isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
        isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
        isFlip = bitmask & WRAP_FLIP_FLAG,
        Ctor = isBindKey ? undefined : createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length;

      while (index--) {
        args[index] = arguments[index];
      }

      if (isCurried) {
        var placeholder = getHolder(wrapper),
            holdersCount = countHolders(args, placeholder);
      }

      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }

      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }

      length -= holdersCount;

      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
      }

      var thisBinding = isBind ? thisArg : this || _global,
          fn = isBindKey ? thisBinding[func] : func;
      length = args.length;

      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }

      if (isAry && ary < length) {
        args.length = ary;
      }

      if ((this || _global) && (this || _global) !== root && (this || _global) instanceof wrapper) {
        fn = Ctor || createCtor(fn);
      }

      return fn.apply(thisBinding, args);
    }

    return wrapper;
  }

  exports = createHybrid;
  return exports;
}