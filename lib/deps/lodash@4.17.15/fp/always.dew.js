import { dew as _constantDewDew } from "./constant.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _constantDewDew();
  return exports;
}