import { Request, Response, NextFunction } from 'express';
import debug from 'debug';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import env from '@/environment';

const log = debug('core-api:auth:middlewares:isAuthenticated');

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction)  => {
  const authorization = req.headers.authorization;

  if(!authorization) {
    const error = createError(401, 'Unauthorized', { cause: 'There is no authorization header' });
    return next(error);
  }

  const token = authorization.split(' ')[1]

  if(!token) {
    const error = createError(401, 'Unauthorized', { cause: 'There is no token in authorization header' });
    return next(error);
  }

  try {
    const isTokenVerified = jwt.verify(token, env.AUTH_JWT_SIGN_SECRET);

    if(isTokenVerified) {
      next();
    } else {
      const error = createError(401, 'Unauthorized', { cause: 'Token is not verified' });
      return next(error);
    }
  } catch (err) {
    log(err)
    const error = createError(401, 'Unauthorized', { cause: 'Token is not verified' });
    return next(error);
  }
}