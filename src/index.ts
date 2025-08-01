#!/usr/bin/env ts-node
import 'module-alias/register';
import env from '@/environment';
import app from '@/app';
import debug from 'debug';
import http from 'http';


/*
  Missing from TypeScript but documented by node.
  See https://nodejs.org/api/errors.html#class-systemerror
*/

interface NodeSystemError extends Error{
    address?: string; //If present, the address to which a network connection failed
    code:string;// The string error code
    dest:string;// If present, the file path destination when reporting a file system error
    errno:number;// The system-provided error number
    info?:object;// If present, extra details about the error condition
    message:string;// A system-provided human-readable description of the error
    path?:string;// If present, the file path when reporting a file system error
    port?:number;// If present, the network connection port that is not available
    syscall:string;// The name of the system call that triggered the error
}

const log = debug('core-api:server');

const port = normalizePort(env.PORT);
app.set('port', port);


const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val: string) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}


function onError(error: NodeSystemError) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


function onListening() {
  const addr = server.address();
  if(!addr) {
    throw new Error('Address is not set');
  }
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  log('Listening on ' + bind);
}

export default {}