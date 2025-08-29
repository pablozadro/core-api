import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import createError from 'http-errors';



export const createGroup = [
  body('title').notEmpty().isString(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const updateGroup = [
  param('id').isMongoId(),
  body('title').notEmpty().isString(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const deleteGroup = [
  param('id').isMongoId(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];
