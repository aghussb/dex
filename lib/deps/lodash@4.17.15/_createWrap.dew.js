import { dew as _baseSetDataDewDew } from "./_baseSetData.dew.js";
import { dew as _createBindDewDew } from "./_createBind.dew.js";
import { dew as _createCurryDewDew } from "./_createCurry.dew.js";
import { dew as _createHybridDewDew } from "./_createHybrid.dew.js";
import { dew as _createPartialDewDew } from "./_createPartial.dew.js";
import { dew as _getDataDewDew } from "./_getData.dew.js";
import { dew as _mergeDataDewDew } from "./_mergeData.dew.js";
import { dew as _setDataDewDew } from "./_setData.dew.js";
import { dew as _setWrapToStringDewDew } from "./_setWrapToString.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSetData = _baseSetDataDewDew(),
      createBind = _createBindDewDew(),
      createCurry = _createCurryDewDew(),
      createHybrid = _createHybridDewDew(),
      createPartial = _createPartialDewDew(),
      getData = _getDataDewDew(),
      mergeData = _mergeDataDewDew(),
      setData = _setDataDewDew(),
      setWrapToString = _setWrapToStringDewDew(),
      toInteger = _toIntegerDewDew();
  /** Error message constants. */


  var FUNC_ERROR_TEXT = 'Expected a function';
  /** Used to compose bitmasks for function metadata. */

  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax = Math.max;
  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags.
   *    1 - `_.bind`
   *    2 - `_.bindKey`
   *    4 - `_.curry` or `_.curryRight` of a bound function
   *    8 - `_.curry`
   *   16 - `_.curryRight`
   *   32 - `_.partial`
   *   64 - `_.partialRight`
   *  128 - `_.rearg`
   *  256 - `_.ary`
   *  512 - `_.flip`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;

    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var length = partials ? partials.length : 0;

    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
      partials = holders = undefined;
    }

    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;

    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials,
          holdersRight = holders;
      partials = holders = undefined;
    }

    var data = isBindKey ? undefined : getData(func);
    var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

    if (data) {
      mergeData(newData, data);
    }

    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
      bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    }

    if (!bitmask || bitmask == WRAP_BIND_FLAG) {
      var result = createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
      result = createCurry(func, bitmask, arity);
    } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
      result = createPartial(func, bitmask, thisArg, partials);
    } else {
      result = createHybrid.apply(undefined, newData);
    }

    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
  }

  exports = createWrap;
  return exports;
}