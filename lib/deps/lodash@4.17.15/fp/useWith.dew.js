import { dew as _overArgsDewDew } from "./overArgs.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _overArgsDewDew();
  return exports;
}