import { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';
import createError from 'http-errors';
import { orderDir } from '@/core/validators';

export const getItems = [
  ...orderDir,
  query('orderBy').optional().custom((value: string) => {
    const orderByFields = [
      'title',
      'group',
      'category',
      'calories',
      'totalFats',
      'saturatedFats',
      'cholesterol',
      'sodium',
      'carbohydrates',
      'fiber',
      'proteins',
    ]
    return orderByFields.includes(value);
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


export const createItem = [
  body('title').notEmpty().isString(),
  body('category').notEmpty().isMongoId(),
  body('group').notEmpty().isMongoId(),
  body('calories').optional().isNumeric(),
  body('total_fats').optional().isNumeric(),
  body('saturated_fats').optional().isNumeric(),
  body('cholesterol').optional().isNumeric(),
  body('sodium').optional().isNumeric(),
  body('carbohydrates').optional().isNumeric(),
  body('fiber').optional().isNumeric(),
  body('proteins').optional().isNumeric(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const updateItem = [
  param('id').isMongoId(),
  body('title').optional().isString(),
  body('category').optional().isMongoId(),
  body('group').optional().isMongoId(),
  body('calories').optional().isNumeric(),
  body('total_fats').optional().isNumeric(),
  body('saturated_fats').optional().isNumeric(),
  body('cholesterol').optional().isNumeric(),
  body('sodium').optional().isNumeric(),
  body('carbohydrates').optional().isNumeric(),
  body('fiber').optional().isNumeric(),
  body('proteins').optional().isNumeric(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const deleteItem = [
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
