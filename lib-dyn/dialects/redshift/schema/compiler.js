/* eslint max-len: 0 */

// Redshift Table Builder & Compiler
// -------

import inherits from 'https://dev.jspm.io/inherits@2.0';
import SchemaCompiler_PG from '../../postgres/schema/compiler.js';

function SchemaCompiler_Redshift() {
  SchemaCompiler_PG.apply(this, arguments);
}
inherits(SchemaCompiler_Redshift, SchemaCompiler_PG);

export default SchemaCompiler_Redshift;
