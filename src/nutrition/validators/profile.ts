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
} from '@/nutrition/config';


export const createProfile = [
  body('user').isMongoId(),
  body('weight').isNumeric(),
  body('height').isNumeric(),
  body('bornYear').isNumeric(),
  body('gender').custom(value => {
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

export const updateProfile = [
  body('user').isMongoId(),
  body('weight').isNumeric(),
  body('height').isNumeric(),
  body('bornYear').isNumeric(),
  body('gender').custom(value => {
    return [MALE, FEMALE].includes(value)
  }),
  body('activityLevel').custom(value => {
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
