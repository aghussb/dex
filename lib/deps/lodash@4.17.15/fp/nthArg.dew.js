import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _nthArgDewDew } from "../nthArg.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('nthArg', _nthArgDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}