import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _dropRightWhileDewDew } from "../dropRightWhile.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('dropRightWhile', _dropRightWhileDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}