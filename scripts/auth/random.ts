import crypto from 'crypto';
import debug from 'debug';

const log = debug('scripts:auth:random');

const str = crypto.randomBytes(8).toString('hex');
log(str);