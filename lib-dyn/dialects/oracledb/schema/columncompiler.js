import { inherits } from '../../../deps.ts';
import ColumnCompiler_Oracle from '../../oracle/schema/columncompiler.js';

import { _ } from '../../../deps.ts';
const isObject = _.isObject;

function ColumnCompiler_Oracledb() {
  ColumnCompiler_Oracle.apply(this, arguments);
}

inherits(ColumnCompiler_Oracledb, ColumnCompiler_Oracle);

Object.assign(ColumnCompiler_Oracledb.prototype, {
  time: 'timestamp with local time zone',

  datetime: function (withoutTz) {
    let useTz;
    if (isObject(withoutTz)) {
      ({ useTz } = withoutTz);
    } else {
      useTz = !withoutTz;
    }
    return useTz ? 'timestamp with local time zone' : 'timestamp';
  },

  timestamp: function (withoutTz) {
    let useTz;
    if (isObject(withoutTz)) {
      ({ useTz } = withoutTz);
    } else {
      useTz = !withoutTz;
    }
    return useTz ? 'timestamp with local time zone' : 'timestamp';
  },
});

export default ColumnCompiler_Oracledb;
