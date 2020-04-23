import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _mergeDewDew } from "../merge.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('merge', _mergeDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}