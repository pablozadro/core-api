import createError, { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { CoreApiError, CoreApiResponse } from '@/types';


export const errorMiddleware = [
  (req: Request, res: Response, next: NextFunction) => {
    const error: HttpError = createError(404, 'Not Found')
    next(error);
  },
  (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const msg = err.message || 'Unknown Error';
    const cause = err.cause || null;

    const error: CoreApiError = {
      status,
      msg,
      cause
    }

    const response: CoreApiResponse = {
      msg: 'Core-API Error',
      payload: null,
      error
    }

    res.status(status).json(response);
  },
];