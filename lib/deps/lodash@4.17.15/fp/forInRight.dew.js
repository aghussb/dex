import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _forInRightDewDew } from "../forInRight.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('forInRight', _forInRightDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}