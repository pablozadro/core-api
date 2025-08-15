import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import createError from 'http-errors';


export const createCategoryPayload = [
  body('title').trim().notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];

export const createGroupPayload = [
  body('title').trim().notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];