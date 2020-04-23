import _util from "../@jspm/core@1.1.0/nodelibs/util.js";
import { dew as _inherits_browserDewDew } from "./inherits_browser.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  try {
    var util = _util;
    /* istanbul ignore next */

    if (typeof util.inherits !== 'function') throw '';
    exports = util.inherits;
  } catch (e) {
    /* istanbul ignore next */
    exports = _inherits_browserDewDew();
  }

  return exports;
}
