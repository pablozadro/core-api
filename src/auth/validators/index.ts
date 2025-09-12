import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import createError from 'http-errors';
import config from '@/auth/config';



export const registerBody = [
  body('email').trim().isEmail(),
  body('password').trim().isLength({ 
    min: config.passwordMinLen, 
    max: config.passwordMaxLen 
  }),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const loginBody = [
  body('email').trim().isEmail(),
  body('password').notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400,'Bad Request', { cause: result.array() })
    next(error);
  },
];