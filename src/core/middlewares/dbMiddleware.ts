import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import debug from 'debug';

// Environment
import env from '@/environment';


export const dbMiddleware = async (req: Request, res: Response, next: NextFunction)  => {
  const log = debug('core-api:core:db-middleware');

  log('Connecting Mongo...');

  if(!env.MONGODB_URL) {
    log('There is no MONGODB_URL');
    const error = createError(503, 'Service Unavailable', { cause: 'Mongo URL Unavailable'});
    next(error);
    return;
  }

  try {
    mongoose.connect(env.MONGODB_URL);
    log('Mongo connected');
    next();
  } catch(err) {
    const error = createError(503, 'Service Unavailable', { cause: 'Error connecting Mongo'});
    log('Error connecting Mongo');
    log(err);
    next(error);
  }
}