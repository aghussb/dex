import { dew as _headDewDew } from "./head.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _headDewDew();
  return exports;
}