// MySQL2 Client
// -------
import Client_MySQL from '../mysql/index.js';
import Transaction from './transaction.js';

// Always initialize with the "QueryBuilder" and "QueryCompiler"
// objects, which extend the base 'lib/query/builder' and
// 'lib/query/compiler', respectively.
class Client_MySQL2 extends Client_MySQL {
  constructor(config) {
    super(config);
  }
}

Object.assign(Client_MySQL2.prototype, {
  // The "dialect", for reference elsewhere.
  driverName: 'mysql2',

  transaction() {
    return new Transaction(this, ...arguments);
  },

  _driver() {
    return require('mysql2');
  },

  validateConnection(connection) {
    if (connection._fatalError) {
      return false;
    }
    return true;
  },
});

export default Client_MySQL2;
