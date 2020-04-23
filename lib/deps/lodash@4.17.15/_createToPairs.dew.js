import { dew as _baseToPairsDewDew } from "./_baseToPairs.dew.js";
import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _mapToArrayDewDew } from "./_mapToArray.dew.js";
import { dew as _setToPairsDewDew } from "./_setToPairs.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseToPairs = _baseToPairsDewDew(),
      getTag = _getTagDewDew(),
      mapToArray = _mapToArrayDewDew(),
      setToPairs = _setToPairsDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]',
      setTag = '[object Set]';
  /**
   * Creates a `_.toPairs` or `_.toPairsIn` function.
   *
   * @private
   * @param {Function} keysFunc The function to get the keys of a given object.
   * @returns {Function} Returns the new pairs function.
   */

  function createToPairs(keysFunc) {
    return function (object) {
      var tag = getTag(object);

      if (tag == mapTag) {
        return mapToArray(object);
      }

      if (tag == setTag) {
        return setToPairs(object);
      }

      return baseToPairs(object, keysFunc(object));
    };
  }

  exports = createToPairs;
  return exports;
}