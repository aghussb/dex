import { dew as _includesDewDew } from "./includes.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _includesDewDew();
  return exports;
}