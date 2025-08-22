import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import createError from 'http-errors';


export const createCategory = [
  body('title').notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];

export const updateCategory = [
  param('id').isMongoId(),
  body('title').notEmpty(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];

export const deleteCategory = [
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

export const createGroup = [
  body('title').notEmpty(),
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
  body('title').notEmpty(),
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


export const createItem = [
  body('title').notEmpty(),
  body('category').notEmpty().isMongoId(),
  body('group').notEmpty().isMongoId(),
  body('proteins').optional().isNumeric(),
  body('calories').optional().isNumeric(),
  body('carbohydrates').optional().isNumeric(),
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
  body('category').optional().isMongoId(),
  body('group').optional().isMongoId(),
  body('proteins').optional().isNumeric(),
  body('calories').optional().isNumeric(),
  body('carbohydrates').optional().isNumeric(),
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
