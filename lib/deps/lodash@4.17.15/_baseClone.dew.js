import { dew as _StackDewDew } from "./_Stack.dew.js";
import { dew as _arrayEachDewDew } from "./_arrayEach.dew.js";
import { dew as _assignValueDewDew } from "./_assignValue.dew.js";
import { dew as _baseAssignDewDew } from "./_baseAssign.dew.js";
import { dew as _baseAssignInDewDew } from "./_baseAssignIn.dew.js";
import { dew as _cloneBufferDewDew } from "./_cloneBuffer.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _copySymbolsDewDew } from "./_copySymbols.dew.js";
import { dew as _copySymbolsInDewDew } from "./_copySymbolsIn.dew.js";
import { dew as _getAllKeysDewDew } from "./_getAllKeys.dew.js";
import { dew as _getAllKeysInDewDew } from "./_getAllKeysIn.dew.js";
import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _initCloneArrayDewDew } from "./_initCloneArray.dew.js";
import { dew as _initCloneByTagDewDew } from "./_initCloneByTag.dew.js";
import { dew as _initCloneObjectDewDew } from "./_initCloneObject.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isBufferDewDew } from "./isBuffer.dew.js";
import { dew as _isMapDewDew } from "./isMap.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _isSetDewDew } from "./isSet.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Stack = _StackDewDew(),
      arrayEach = _arrayEachDewDew(),
      assignValue = _assignValueDewDew(),
      baseAssign = _baseAssignDewDew(),
      baseAssignIn = _baseAssignInDewDew(),
      cloneBuffer = _cloneBufferDewDew(),
      copyArray = _copyArrayDewDew(),
      copySymbols = _copySymbolsDewDew(),
      copySymbolsIn = _copySymbolsInDewDew(),
      getAllKeys = _getAllKeysDewDew(),
      getAllKeysIn = _getAllKeysInDewDew(),
      getTag = _getTagDewDew(),
      initCloneArray = _initCloneArrayDewDew(),
      initCloneByTag = _initCloneByTagDewDew(),
      initCloneObject = _initCloneObjectDewDew(),
      isArray = _isArrayDewDew(),
      isBuffer = _isBufferDewDew(),
      isMap = _isMapDewDew(),
      isObject = _isObjectDewDew(),
      isSet = _isSetDewDew(),
      keys = _keysDewDew();
  /** Used to compose bitmasks for cloning. */


  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values supported by `_.clone`. */

  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */

  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject(value)) {
      return value;
    }

    var isArr = isArray(value);

    if (isArr) {
      result = initCloneArray(value);

      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }

      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);

        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = initCloneByTag(value, tag, isDeep);
      }
    } // Check for circular references and return its corresponding clone.


    stack || (stack = new Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      } // Recursively populate clone (susceptible to call stack limits).


      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  exports = baseClone;
  return exports;
}