import { dew as _escapeDewDew } from "./escape.dew.js";
import { dew as _reEscapeDewDew } from "./_reEscape.dew.js";
import { dew as _reEvaluateDewDew } from "./_reEvaluate.dew.js";
import { dew as _reInterpolateDewDew } from "./_reInterpolate.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var escape = _escapeDewDew(),
      reEscape = _reEscapeDewDew(),
      reEvaluate = _reEvaluateDewDew(),
      reInterpolate = _reInterpolateDewDew();
  /**
   * By default, the template delimiters used by lodash are like those in
   * embedded Ruby (ERB) as well as ES2015 template strings. Change the
   * following template settings to use alternative delimiters.
   *
   * @static
   * @memberOf _
   * @type {Object}
   */


  var templateSettings = {
    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'escape': reEscape,

    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'evaluate': reEvaluate,

    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type {RegExp}
     */
    'interpolate': reInterpolate,

    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type {string}
     */
    'variable': '',

    /**
     * Used to import variables into the compiled template.
     *
     * @memberOf _.templateSettings
     * @type {Object}
     */
    'imports': {
      /**
       * A reference to the `lodash` function.
       *
       * @memberOf _.templateSettings.imports
       * @type {Function}
       */
      '_': {
        'escape': escape
      }
    }
  };
  exports = templateSettings;
  return exports;
}