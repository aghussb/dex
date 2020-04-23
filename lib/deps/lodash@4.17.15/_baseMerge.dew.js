import { dew as _StackDewDew } from "./_Stack.dew.js";
import { dew as _assignMergeValueDewDew } from "./_assignMergeValue.dew.js";
import { dew as _baseForDewDew } from "./_baseFor.dew.js";
import { dew as _baseMergeDeepDewDew } from "./_baseMergeDeep.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _keysInDewDew } from "./keysIn.dew.js";
import { dew as _safeGetDewDew } from "./_safeGet.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Stack = _StackDewDew(),
      assignMergeValue = _assignMergeValueDewDew(),
      baseFor = _baseForDewDew(),
      baseMergeDeep = _baseMergeDeepDewDew(),
      isObject = _isObjectDewDew(),
      keysIn = _keysInDewDew(),
      safeGet = _safeGetDewDew();
  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */


  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }

    baseFor(source, function (srcValue, key) {
      stack || (stack = new Stack());

      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }

        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }

  exports = baseMerge;
  return exports;
}