import { dew as _overSomeDewDew } from "./overSome.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _overSomeDewDew();
  return exports;
}