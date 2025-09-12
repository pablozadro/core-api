import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import createError from 'http-errors';
import {
  MALE,
  FEMALE,
  SEDENTARY,
  LIGHTLY_ACTIVE,
  MODERATELY_ACTIVE,
  VERY_ACTIVE,
  SUPER_ACTIVE,
} from '@/profile/config'


export const createBodyValidation = [
  body('user').notEmpty().isMongoId(),
  body('weight').notEmpty().isNumeric(),
  body('height').notEmpty().isNumeric(),
  body('bornDate').notEmpty().isString(),
  body('gender').notEmpty().custom(value => {
    return [MALE, FEMALE].includes(value)
  }),
  body('activityLevel').notEmpty().custom(value => {
    return [
      SEDENTARY,
      LIGHTLY_ACTIVE,
      MODERATELY_ACTIVE,
      VERY_ACTIVE,
      SUPER_ACTIVE,
    ].includes(value)
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

export const updateBodyValidation = [
  body('user').optional().isMongoId(),
  body('weight').optional().isNumeric(),
  body('height').optional().isNumeric(),
  body('bornDate').optional().isString(),
  body('gender').optional().custom(value => {
    return [MALE, FEMALE].includes(value)
  }),
  body('activityLevel').optional().custom(value => {
    return [
      SEDENTARY,
      LIGHTLY_ACTIVE,
      MODERATELY_ACTIVE,
      VERY_ACTIVE,
      SUPER_ACTIVE,
    ].includes(value)
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
