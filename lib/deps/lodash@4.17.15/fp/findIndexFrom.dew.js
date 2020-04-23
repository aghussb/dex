import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _findIndexDewDew } from "../findIndex.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('findIndexFrom', _findIndexDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}