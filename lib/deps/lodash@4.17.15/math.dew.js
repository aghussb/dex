import { dew as _addDewDew } from "./add.dew.js";
import { dew as _ceilDewDew } from "./ceil.dew.js";
import { dew as _divideDewDew } from "./divide.dew.js";
import { dew as _floorDewDew } from "./floor.dew.js";
import { dew as _maxDewDew } from "./max.dew.js";
import { dew as _maxByDewDew } from "./maxBy.dew.js";
import { dew as _meanDewDew } from "./mean.dew.js";
import { dew as _meanByDewDew } from "./meanBy.dew.js";
import { dew as _minDewDew } from "./min.dew.js";
import { dew as _minByDewDew } from "./minBy.dew.js";
import { dew as _multiplyDewDew } from "./multiply.dew.js";
import { dew as _roundDewDew } from "./round.dew.js";
import { dew as _subtractDewDew } from "./subtract.dew.js";
import { dew as _sumDewDew } from "./sum.dew.js";
import { dew as _sumByDewDew } from "./sumBy.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'add': _addDewDew(),
    'ceil': _ceilDewDew(),
    'divide': _divideDewDew(),
    'floor': _floorDewDew(),
    'max': _maxDewDew(),
    'maxBy': _maxByDewDew(),
    'mean': _meanDewDew(),
    'meanBy': _meanByDewDew(),
    'min': _minDewDew(),
    'minBy': _minByDewDew(),
    'multiply': _multiplyDewDew(),
    'round': _roundDewDew(),
    'subtract': _subtractDewDew(),
    'sum': _sumDewDew(),
    'sumBy': _sumByDewDew()
  };
  return exports;
}