import { dew as _afterDewDew } from "./after.dew.js";
import { dew as _aryDewDew } from "./ary.dew.js";
import { dew as _beforeDewDew } from "./before.dew.js";
import { dew as _bindDewDew } from "./bind.dew.js";
import { dew as _bindKeyDewDew } from "./bindKey.dew.js";
import { dew as _curryDewDew } from "./curry.dew.js";
import { dew as _curryRightDewDew } from "./curryRight.dew.js";
import { dew as _debounceDewDew } from "./debounce.dew.js";
import { dew as _deferDewDew } from "./defer.dew.js";
import { dew as _delayDewDew } from "./delay.dew.js";
import { dew as _flipDewDew } from "./flip.dew.js";
import { dew as _memoizeDewDew } from "./memoize.dew.js";
import { dew as _negateDewDew } from "./negate.dew.js";
import { dew as _onceDewDew } from "./once.dew.js";
import { dew as _overArgsDewDew } from "./overArgs.dew.js";
import { dew as _partialDewDew } from "./partial.dew.js";
import { dew as _partialRightDewDew } from "./partialRight.dew.js";
import { dew as _reargDewDew } from "./rearg.dew.js";
import { dew as _restDewDew } from "./rest.dew.js";
import { dew as _spreadDewDew } from "./spread.dew.js";
import { dew as _throttleDewDew } from "./throttle.dew.js";
import { dew as _unaryDewDew } from "./unary.dew.js";
import { dew as _wrapDewDew } from "./wrap.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'after': _afterDewDew(),
    'ary': _aryDewDew(),
    'before': _beforeDewDew(),
    'bind': _bindDewDew(),
    'bindKey': _bindKeyDewDew(),
    'curry': _curryDewDew(),
    'curryRight': _curryRightDewDew(),
    'debounce': _debounceDewDew(),
    'defer': _deferDewDew(),
    'delay': _delayDewDew(),
    'flip': _flipDewDew(),
    'memoize': _memoizeDewDew(),
    'negate': _negateDewDew(),
    'once': _onceDewDew(),
    'overArgs': _overArgsDewDew(),
    'partial': _partialDewDew(),
    'partialRight': _partialRightDewDew(),
    'rearg': _reargDewDew(),
    'rest': _restDewDew(),
    'spread': _spreadDewDew(),
    'throttle': _throttleDewDew(),
    'unary': _unaryDewDew(),
    'wrap': _wrapDewDew()
  };
  return exports;
}