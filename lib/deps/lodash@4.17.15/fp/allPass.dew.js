import { dew as _overEveryDewDew } from "./overEvery.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _overEveryDewDew();
  return exports;
}