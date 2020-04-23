import { dew as _camelCaseDewDew } from "./camelCase.dew.js";
import { dew as _capitalizeDewDew } from "./capitalize.dew.js";
import { dew as _deburrDewDew } from "./deburr.dew.js";
import { dew as _endsWithDewDew } from "./endsWith.dew.js";
import { dew as _escapeDewDew } from "./escape.dew.js";
import { dew as _escapeRegExpDewDew } from "./escapeRegExp.dew.js";
import { dew as _kebabCaseDewDew } from "./kebabCase.dew.js";
import { dew as _lowerCaseDewDew } from "./lowerCase.dew.js";
import { dew as _lowerFirstDewDew } from "./lowerFirst.dew.js";
import { dew as _padDewDew } from "./pad.dew.js";
import { dew as _padEndDewDew } from "./padEnd.dew.js";
import { dew as _padStartDewDew } from "./padStart.dew.js";
import { dew as _parseIntDewDew } from "./parseInt.dew.js";
import { dew as _repeatDewDew } from "./repeat.dew.js";
import { dew as _replaceDewDew } from "./replace.dew.js";
import { dew as _snakeCaseDewDew } from "./snakeCase.dew.js";
import { dew as _splitDewDew } from "./split.dew.js";
import { dew as _startCaseDewDew } from "./startCase.dew.js";
import { dew as _startsWithDewDew } from "./startsWith.dew.js";
import { dew as _templateDewDew } from "./template.dew.js";
import { dew as _templateSettingsDewDew } from "./templateSettings.dew.js";
import { dew as _toLowerDewDew } from "./toLower.dew.js";
import { dew as _toUpperDewDew } from "./toUpper.dew.js";
import { dew as _trimDewDew } from "./trim.dew.js";
import { dew as _trimEndDewDew } from "./trimEnd.dew.js";
import { dew as _trimStartDewDew } from "./trimStart.dew.js";
import { dew as _truncateDewDew } from "./truncate.dew.js";
import { dew as _unescapeDewDew } from "./unescape.dew.js";
import { dew as _upperCaseDewDew } from "./upperCase.dew.js";
import { dew as _upperFirstDewDew } from "./upperFirst.dew.js";
import { dew as _wordsDewDew } from "./words.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'camelCase': _camelCaseDewDew(),
    'capitalize': _capitalizeDewDew(),
    'deburr': _deburrDewDew(),
    'endsWith': _endsWithDewDew(),
    'escape': _escapeDewDew(),
    'escapeRegExp': _escapeRegExpDewDew(),
    'kebabCase': _kebabCaseDewDew(),
    'lowerCase': _lowerCaseDewDew(),
    'lowerFirst': _lowerFirstDewDew(),
    'pad': _padDewDew(),
    'padEnd': _padEndDewDew(),
    'padStart': _padStartDewDew(),
    'parseInt': _parseIntDewDew(),
    'repeat': _repeatDewDew(),
    'replace': _replaceDewDew(),
    'snakeCase': _snakeCaseDewDew(),
    'split': _splitDewDew(),
    'startCase': _startCaseDewDew(),
    'startsWith': _startsWithDewDew(),
    'template': _templateDewDew(),
    'templateSettings': _templateSettingsDewDew(),
    'toLower': _toLowerDewDew(),
    'toUpper': _toUpperDewDew(),
    'trim': _trimDewDew(),
    'trimEnd': _trimEndDewDew(),
    'trimStart': _trimStartDewDew(),
    'truncate': _truncateDewDew(),
    'unescape': _unescapeDewDew(),
    'upperCase': _upperCaseDewDew(),
    'upperFirst': _upperFirstDewDew(),
    'words': _wordsDewDew()
  };
  return exports;
}