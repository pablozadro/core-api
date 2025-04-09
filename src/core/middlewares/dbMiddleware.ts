import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import debug from 'debug';
import env from '@/environment';


const log = debug('lite-api:db-middleware');


export const dbMiddleware = async (req: Request, res: Response, next: NextFunction)  => {
  if(!env.MONGODB_URL) {
    const error = createError(503, 'Mongo URL Unavailable');
    next(error);
    return;
  }

  try {
    mongoose.connect(env.MONGODB_URL);
    log('Mongo connected');
    next();
  } catch(err) {
    const error = createError(503, 'Database Service Unavailable');
    log(err);
    next(error);
  }
}