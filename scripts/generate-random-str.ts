import crypto from 'crypto';

const str = crypto.randomBytes(8).toString('hex');
console.log(str);