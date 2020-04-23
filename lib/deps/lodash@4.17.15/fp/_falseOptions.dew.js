var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'cap': false,
    'curry': false,
    'fixed': false,
    'immutable': false,
    'rearg': false
  };
  return exports;
}