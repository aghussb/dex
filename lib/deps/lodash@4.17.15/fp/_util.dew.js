import { dew as _aryDewDew } from "../ary.dew.js";
import { dew as _baseAssignDewDew } from "../_baseAssign.dew.js";
import { dew as _cloneDewDew } from "../clone.dew.js";
import { dew as _curryDewDew } from "../curry.dew.js";
import { dew as _arrayEachDewDew } from "../_arrayEach.dew.js";
import { dew as _isArrayDewDew } from "../isArray.dew.js";
import { dew as _isErrorDewDew } from "../isError.dew.js";
import { dew as _isFunctionDewDew } from "../isFunction.dew.js";
import { dew as _isWeakMapDewDew } from "../isWeakMap.dew.js";
import { dew as _iterateeDewDew } from "../iteratee.dew.js";
import { dew as _baseKeysDewDew } from "../_baseKeys.dew.js";
import { dew as _reargDewDew } from "../rearg.dew.js";
import { dew as _toIntegerDewDew } from "../toInteger.dew.js";
import { dew as _toPathDewDew } from "../toPath.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'ary': _aryDewDew(),
    'assign': _baseAssignDewDew(),
    'clone': _cloneDewDew(),
    'curry': _curryDewDew(),
    'forEach': _arrayEachDewDew(),
    'isArray': _isArrayDewDew(),
    'isError': _isErrorDewDew(),
    'isFunction': _isFunctionDewDew(),
    'isWeakMap': _isWeakMapDewDew(),
    'iteratee': _iterateeDewDew(),
    'keys': _baseKeysDewDew(),
    'rearg': _reargDewDew(),
    'toInteger': _toIntegerDewDew(),
    'toPath': _toPathDewDew()
  };
  return exports;
}