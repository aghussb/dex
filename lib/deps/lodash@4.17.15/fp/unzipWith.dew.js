import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _unzipWithDewDew } from "../unzipWith.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('unzipWith', _unzipWithDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}