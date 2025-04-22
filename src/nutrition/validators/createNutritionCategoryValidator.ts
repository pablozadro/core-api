import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import createError from 'http-errors';

export const createNutritionCategoryValidator = [
  body('title').trim().notEmpty(),
  body('color').trim().notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];
