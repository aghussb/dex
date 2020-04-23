import { dew as _spreadDewDew } from "./spread.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _spreadDewDew();
  return exports;
}