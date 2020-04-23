import { dew as _basePropertyDewDew } from "./_baseProperty.dew.js";
import { dew as _basePropertyDeepDewDew } from "./_basePropertyDeep.dew.js";
import { dew as _isKeyDewDew } from "./_isKey.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseProperty = _basePropertyDewDew(),
      basePropertyDeep = _basePropertyDeepDewDew(),
      isKey = _isKeyDewDew(),
      toKey = _toKeyDewDew();
  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */


  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  exports = property;
  return exports;
}