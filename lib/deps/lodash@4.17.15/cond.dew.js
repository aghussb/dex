import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      arrayMap = _arrayMapDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      baseRest = _baseRestDewDew();
  /** Error message constants. */


  var FUNC_ERROR_TEXT = 'Expected a function';
  /**
   * Creates a function that iterates over `pairs` and invokes the corresponding
   * function of the first predicate to return truthy. The predicate-function
   * pairs are invoked with the `this` binding and arguments of the created
   * function.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {Array} pairs The predicate-function pairs.
   * @returns {Function} Returns the new composite function.
   * @example
   *
   * var func = _.cond([
   *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
   *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
   *   [_.stubTrue,                      _.constant('no match')]
   * ]);
   *
   * func({ 'a': 1, 'b': 2 });
   * // => 'matches A'
   *
   * func({ 'a': 0, 'b': 1 });
   * // => 'matches B'
   *
   * func({ 'a': '1', 'b': '2' });
   * // => 'no match'
   */

  function cond(pairs) {
    var length = pairs == null ? 0 : pairs.length,
        toIteratee = baseIteratee;
    pairs = !length ? [] : arrayMap(pairs, function (pair) {
      if (typeof pair[1] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      return [toIteratee(pair[0]), pair[1]];
    });
    return baseRest(function (args) {
      var index = -1;

      while (++index < length) {
        var pair = pairs[index];

        if (apply(pair[0], this || _global, args)) {
          return apply(pair[1], this || _global, args);
        }
      }
    });
  }

  exports = cond;
  return exports;
}