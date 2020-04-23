import { dew as _baseTimesDewDew } from "./_baseTimes.dew.js";
import { dew as _isArgumentsDewDew } from "./isArguments.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isBufferDewDew } from "./isBuffer.dew.js";
import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
import { dew as _isTypedArrayDewDew } from "./isTypedArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseTimes = _baseTimesDewDew(),
      isArguments = _isArgumentsDewDew(),
      isArray = _isArrayDewDew(),
      isBuffer = _isBufferDewDew(),
      isIndex = _isIndexDewDew(),
      isTypedArray = _isTypedArrayDewDew();
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  exports = arrayLikeKeys;
  return exports;
}