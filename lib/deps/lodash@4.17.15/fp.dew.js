import { dew as _lodashMinDewDew } from "./lodash.min.dew.js";
import { dew as _baseConvertDewDew } from "./fp/_baseConvert.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _ = _lodashMinDewDew().runInContext();

  exports = _baseConvertDewDew()(_, _);
  return exports;
}