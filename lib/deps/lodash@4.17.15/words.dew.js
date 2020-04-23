import { dew as _asciiWordsDewDew } from "./_asciiWords.dew.js";
import { dew as _hasUnicodeWordDewDew } from "./_hasUnicodeWord.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
import { dew as _unicodeWordsDewDew } from "./_unicodeWords.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var asciiWords = _asciiWordsDewDew(),
      hasUnicodeWord = _hasUnicodeWordDewDew(),
      toString = _toStringDewDew(),
      unicodeWords = _unicodeWordsDewDew();
  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */


  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }

    return string.match(pattern) || [];
  }

  exports = words;
  return exports;
}