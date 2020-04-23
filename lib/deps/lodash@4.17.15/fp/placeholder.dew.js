var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * The default argument placeholder value for methods.
   *
   * @type {Object}
   */
  exports = {};
  return exports;
}