import { dew as _baseExtremumDewDew } from "./_baseExtremum.dew.js";
import { dew as _baseGtDewDew } from "./_baseGt.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseExtremum = _baseExtremumDewDew(),
      baseGt = _baseGtDewDew(),
      baseIteratee = _baseIterateeDewDew();
  /**
   * This method is like `_.max` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.maxBy(objects, function(o) { return o.n; });
   * // => { 'n': 2 }
   *
   * // The `_.property` iteratee shorthand.
   * _.maxBy(objects, 'n');
   * // => { 'n': 2 }
   */


  function maxBy(array, iteratee) {
    return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt) : undefined;
  }

  exports = maxBy;
  return exports;
}