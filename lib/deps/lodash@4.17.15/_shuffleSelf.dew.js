import { dew as _baseRandomDewDew } from "./_baseRandom.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseRandom = _baseRandomDewDew();
  /**
   * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
   *
   * @private
   * @param {Array} array The array to shuffle.
   * @param {number} [size=array.length] The size of `array`.
   * @returns {Array} Returns `array`.
   */


  function shuffleSelf(array, size) {
    var index = -1,
        length = array.length,
        lastIndex = length - 1;
    size = size === undefined ? length : size;

    while (++index < size) {
      var rand = baseRandom(index, lastIndex),
          value = array[rand];
      array[rand] = array[index];
      array[index] = value;
    }

    array.length = size;
    return array;
  }

  exports = shuffleSelf;
  return exports;
}