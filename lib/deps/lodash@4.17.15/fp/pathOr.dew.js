import { dew as _getOrDewDew } from "./getOr.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _getOrDewDew();
  return exports;
}