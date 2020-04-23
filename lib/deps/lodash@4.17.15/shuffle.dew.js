import { dew as _arrayShuffleDewDew } from "./_arrayShuffle.dew.js";
import { dew as _baseShuffleDewDew } from "./_baseShuffle.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayShuffle = _arrayShuffleDewDew(),
      baseShuffle = _baseShuffleDewDew(),
      isArray = _isArrayDewDew();
  /**
   * Creates an array of shuffled values, using a version of the
   * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to shuffle.
   * @returns {Array} Returns the new shuffled array.
   * @example
   *
   * _.shuffle([1, 2, 3, 4]);
   * // => [4, 1, 3, 2]
   */


  function shuffle(collection) {
    var func = isArray(collection) ? arrayShuffle : baseShuffle;
    return func(collection);
  }

  exports = shuffle;
  return exports;
}