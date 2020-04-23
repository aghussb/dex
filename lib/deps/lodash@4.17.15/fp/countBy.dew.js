import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _countByDewDew } from "../countBy.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('countBy', _countByDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}