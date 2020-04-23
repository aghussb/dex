import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _timesDewDew } from "../times.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('times', _timesDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}