import { dew as _countByDewDew } from "./countBy.dew.js";
import { dew as _eachDewDew } from "./each.dew.js";
import { dew as _eachRightDewDew } from "./eachRight.dew.js";
import { dew as _everyDewDew } from "./every.dew.js";
import { dew as _filterDewDew } from "./filter.dew.js";
import { dew as _findDewDew } from "./find.dew.js";
import { dew as _findLastDewDew } from "./findLast.dew.js";
import { dew as _flatMapDewDew } from "./flatMap.dew.js";
import { dew as _flatMapDeepDewDew } from "./flatMapDeep.dew.js";
import { dew as _flatMapDepthDewDew } from "./flatMapDepth.dew.js";
import { dew as _forEachDewDew } from "./forEach.dew.js";
import { dew as _forEachRightDewDew } from "./forEachRight.dew.js";
import { dew as _groupByDewDew } from "./groupBy.dew.js";
import { dew as _includesDewDew } from "./includes.dew.js";
import { dew as _invokeMapDewDew } from "./invokeMap.dew.js";
import { dew as _keyByDewDew } from "./keyBy.dew.js";
import { dew as _mapDewDew } from "./map.dew.js";
import { dew as _orderByDewDew } from "./orderBy.dew.js";
import { dew as _partitionDewDew } from "./partition.dew.js";
import { dew as _reduceDewDew } from "./reduce.dew.js";
import { dew as _reduceRightDewDew } from "./reduceRight.dew.js";
import { dew as _rejectDewDew } from "./reject.dew.js";
import { dew as _sampleDewDew } from "./sample.dew.js";
import { dew as _sampleSizeDewDew } from "./sampleSize.dew.js";
import { dew as _shuffleDewDew } from "./shuffle.dew.js";
import { dew as _sizeDewDew } from "./size.dew.js";
import { dew as _someDewDew } from "./some.dew.js";
import { dew as _sortByDewDew } from "./sortBy.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'countBy': _countByDewDew(),
    'each': _eachDewDew(),
    'eachRight': _eachRightDewDew(),
    'every': _everyDewDew(),
    'filter': _filterDewDew(),
    'find': _findDewDew(),
    'findLast': _findLastDewDew(),
    'flatMap': _flatMapDewDew(),
    'flatMapDeep': _flatMapDeepDewDew(),
    'flatMapDepth': _flatMapDepthDewDew(),
    'forEach': _forEachDewDew(),
    'forEachRight': _forEachRightDewDew(),
    'groupBy': _groupByDewDew(),
    'includes': _includesDewDew(),
    'invokeMap': _invokeMapDewDew(),
    'keyBy': _keyByDewDew(),
    'map': _mapDewDew(),
    'orderBy': _orderByDewDew(),
    'partition': _partitionDewDew(),
    'reduce': _reduceDewDew(),
    'reduceRight': _reduceRightDewDew(),
    'reject': _rejectDewDew(),
    'sample': _sampleDewDew(),
    'sampleSize': _sampleSizeDewDew(),
    'shuffle': _shuffleDewDew(),
    'size': _sizeDewDew(),
    'some': _someDewDew(),
    'sortBy': _sortByDewDew()
  };
  return exports;
}