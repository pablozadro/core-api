import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import createError from 'http-errors';


export const isRGBColor = async (value: string) => {
  const regex = /^rgb\(\d{1,3},\d{1,3},\d{1,3}\)/;
  const isRGBColor = regex.test(value);
  if(!isRGBColor) {
    throw new Error(`Color should be in rgb format: ${value}`);
  }
}


/**
 * Category
 */ 

export const createCategoryBodyValidator = [
  body('title').trim().notEmpty().escape(),
  body('color').trim().notEmpty().escape().custom(async value => isRGBColor(value)),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];

export const updateCategoryBodyValidator = [
  body('title').trim().notEmpty().escape(),
  body('color').trim().notEmpty().escape().custom(async value => isRGBColor(value)),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];



/**
 * Item
 */ 

export const createItemBodyValidator = [
  body('title').trim().notEmpty().escape(),
  body('category').trim().isMongoId(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];


export const updateItemBodyValidator = [
  body('title').trim().notEmpty().escape(),
  body('category').trim().isMongoId(),
  (req: Request, res: Response, next: NextFunction)  => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    const error = createError(400, 'Bad Request', { cause: result.array() })
    next(error);
  },
];
