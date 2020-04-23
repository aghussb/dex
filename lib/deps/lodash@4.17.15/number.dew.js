import { dew as _clampDewDew } from "./clamp.dew.js";
import { dew as _inRangeDewDew } from "./inRange.dew.js";
import { dew as _randomDewDew } from "./random.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'clamp': _clampDewDew(),
    'inRange': _inRangeDewDew(),
    'random': _randomDewDew()
  };
  return exports;
}