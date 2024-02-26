const dotenv = require('dotenv');
const development = require('@/config/development');
const production = require('@/config/production');

const _dotenv = dotenv.config();
const configs = { development, production,};
const NODE_ENV = process.env.NODE_ENV || 'development';
const config = configs[NODE_ENV];

module.exports = Object.assign({},
  {
    NODE_ENV
  },
  { ...config },
  { ..._dotenv.parsed }
);