import { util } from '../deps.ts';
const promisify = util.promisify;

export default promisify(setTimeout);
