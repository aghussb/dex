import { dew as _assignMergeValueDewDew } from "./_assignMergeValue.dew.js";
import { dew as _cloneBufferDewDew } from "./_cloneBuffer.dew.js";
import { dew as _cloneTypedArrayDewDew } from "./_cloneTypedArray.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _initCloneObjectDewDew } from "./_initCloneObject.dew.js";
import { dew as _isArgumentsDewDew } from "./isArguments.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
import { dew as _isBufferDewDew } from "./isBuffer.dew.js";
import { dew as _isFunctionDewDew } from "./isFunction.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _isPlainObjectDewDew } from "./isPlainObject.dew.js";
import { dew as _isTypedArrayDewDew } from "./isTypedArray.dew.js";
import { dew as _safeGetDewDew } from "./_safeGet.dew.js";
import { dew as _toPlainObjectDewDew } from "./toPlainObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var assignMergeValue = _assignMergeValueDewDew(),
      cloneBuffer = _cloneBufferDewDew(),
      cloneTypedArray = _cloneTypedArrayDewDew(),
      copyArray = _copyArrayDewDew(),
      initCloneObject = _initCloneObjectDewDew(),
      isArguments = _isArgumentsDewDew(),
      isArray = _isArrayDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew(),
      isBuffer = _isBufferDewDew(),
      isFunction = _isFunctionDewDew(),
      isObject = _isObjectDewDew(),
      isPlainObject = _isPlainObjectDewDew(),
      isTypedArray = _isTypedArrayDewDew(),
      safeGet = _safeGetDewDew(),
      toPlainObject = _toPlainObjectDewDew();
  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */


  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
        srcValue = safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }

    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
          isBuff = !isArr && isBuffer(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;

      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;

        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }

    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }

    assignMergeValue(object, key, newValue);
  }

  exports = baseMergeDeep;
  return exports;
}