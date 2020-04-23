import { dew as _wrapperAtDewDew } from "./wrapperAt.dew.js";
import { dew as _chainDewDew } from "./chain.dew.js";
import { dew as _commitDewDew } from "./commit.dew.js";
import { dew as _wrapperLodashDewDew } from "./wrapperLodash.dew.js";
import { dew as _nextDewDew } from "./next.dew.js";
import { dew as _plantDewDew } from "./plant.dew.js";
import { dew as _wrapperReverseDewDew } from "./wrapperReverse.dew.js";
import { dew as _tapDewDew } from "./tap.dew.js";
import { dew as _thruDewDew } from "./thru.dew.js";
import { dew as _toIteratorDewDew } from "./toIterator.dew.js";
import { dew as _toJSONDewDew } from "./toJSON.dew.js";
import { dew as _wrapperValueDewDew } from "./wrapperValue.dew.js";
import { dew as _valueOfDewDew } from "./valueOf.dew.js";
import { dew as _wrapperChainDewDew } from "./wrapperChain.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'at': _wrapperAtDewDew(),
    'chain': _chainDewDew(),
    'commit': _commitDewDew(),
    'lodash': _wrapperLodashDewDew(),
    'next': _nextDewDew(),
    'plant': _plantDewDew(),
    'reverse': _wrapperReverseDewDew(),
    'tap': _tapDewDew(),
    'thru': _thruDewDew(),
    'toIterator': _toIteratorDewDew(),
    'toJSON': _toJSONDewDew(),
    'value': _wrapperValueDewDew(),
    'valueOf': _valueOfDewDew(),
    'wrapperChain': _wrapperChainDewDew()
  };
  return exports;
}