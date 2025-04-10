const crypto = require('crypto');

const str = crypto.randomBytes(8).toString('hex');
console.log(str);