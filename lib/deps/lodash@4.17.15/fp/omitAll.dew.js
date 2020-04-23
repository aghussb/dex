import { dew as _omitDewDew } from "./omit.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _omitDewDew();
  return exports;
}