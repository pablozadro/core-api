import express, { Request, Response, NextFunction } from 'express';
import request from 'supertest';
import createError from 'http-errors';
import { errorMiddleware } from '@/core/middlewares';


describe('Error Middleware', () => {

  test('should response properly', async () => {
    const app = express();

    app.use('/api', (req: Request, res: Response, next: NextFunction) => {
      const error = createError(400, 'Bad Request', { cause: { mock: {} } });
      next(error);
    });

    app.use('/api', errorMiddleware);

    const response = await request(app).get('/api');
    const { status, body } = response;
    const { msg, payload, error } = body;

    expect(status).toEqual(400);

    expect(msg).toEqual('Core-API Error');
    expect(payload).toEqual(null);
    expect(error).toEqual({
      status: 400, 
      msg: 'Bad Request', 
      cause: { mock: {} }
    });
  });
});