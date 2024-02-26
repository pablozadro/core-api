#!/usr/bin/env node
require('module-alias/register');

const debug = require('debug')('core-api:server');
const http = require('http');
const app = require('@/app');
const config = require('@/config');

app.set('port', config.PORT);

const server = http.createServer(app);

server.listen(config.PORT);
server.on('listening', onListening);
server.on('error', onError);


function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof config.PORT === 'string' ? `Pipe ${config.PORT}` : `Port ${config.PORT}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}


