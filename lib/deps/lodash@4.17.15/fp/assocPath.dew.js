import { dew as _setDewDew } from "./set.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _setDewDew();
  return exports;
}