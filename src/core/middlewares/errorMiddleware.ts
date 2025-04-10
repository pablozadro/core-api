import createError, { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { LiteApiError, LiteApiResponse } from '@/types';


export const errorMiddleware = [
  (req: Request, res: Response, next: NextFunction) => {
    const error: HttpError = createError(404, 'Not Found')
    next(error);
  },
  (err: HttpError, req: Request, res: Response) => {
    const status = err.status || 500;
    const msg = err.message || 'Unknown Error';
    const cause = err.cause || null;

    const error: LiteApiError = {
      status,
      msg,
      cause
    }

    const response: LiteApiResponse = {
      msg: 'Lite-API Error',
      payload: null,
      error
    }

    res.status(status).json(response);
  },
];