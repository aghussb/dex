import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _matchesPropertyDewDew } from "../matchesProperty.dew.js";
import { dew as _placeholderDewDew } from "./placeholder.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew(),
      func = convert('matchesProperty', _matchesPropertyDewDew());

  func.placeholder = _placeholderDewDew();
  exports = func;
  return exports;
}