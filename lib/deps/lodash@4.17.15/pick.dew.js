import { dew as _basePickDewDew } from "./_basePick.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var basePick = _basePickDewDew(),
      flatRest = _flatRestDewDew();
  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */


  var pick = flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });
  exports = pick;
  return exports;
}