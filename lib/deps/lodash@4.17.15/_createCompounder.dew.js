import { dew as _arrayReduceDewDew } from "./_arrayReduce.dew.js";
import { dew as _deburrDewDew } from "./deburr.dew.js";
import { dew as _wordsDewDew } from "./words.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayReduce = _arrayReduceDewDew(),
      deburr = _deburrDewDew(),
      words = _wordsDewDew();
  /** Used to compose unicode capture groups. */


  var rsApos = "['\u2019]";
  /** Used to match apostrophes. */

  var reApos = RegExp(rsApos, 'g');
  /**
   * Creates a function like `_.camelCase`.
   *
   * @private
   * @param {Function} callback The function to combine each word.
   * @returns {Function} Returns the new compounder function.
   */

  function createCompounder(callback) {
    return function (string) {
      return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
    };
  }

  exports = createCompounder;
  return exports;
}