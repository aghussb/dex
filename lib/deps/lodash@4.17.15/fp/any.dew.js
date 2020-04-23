import { dew as _someDewDew } from "./some.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _someDewDew();
  return exports;
}