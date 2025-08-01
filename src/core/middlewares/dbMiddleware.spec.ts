import mongoose from 'mongoose';
import createError from 'http-errors';

// Env
import env from '@/environment';

// Middlewares
import { dbMiddleware } from '@/core/middlewares';


/**
 * Mocks
 */

jest.mock('@/environment');
jest.mock('mongoose');


describe('DB Middleware', () => {
  const req: any = { headers: {} };
  const res: any = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next: any = jest.fn();

  describe('Should return 503 Service Unavailable if', () => {

    test('-> there is no DB url', async () => {
      env.MONGODB_URL = '';
      const error = createError(503, 'Service Unavailable', { cause: 'Mongo URL Unavailable'});
      await dbMiddleware(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });

    test('-> there is no connection', async () => {
      env.MONGODB_URL = 'mock-url';
      const error = createError(503, 'Service Unavailable', { cause: 'Error connecting Mongo'});
      (mongoose.connect as jest.Mock).mockImplementationOnce(() => {
        throw new Error('mock error');
      });
      await dbMiddleware(req, res, next);
      expect(next).toHaveBeenCalledWith(error);
    });
  });


  describe('Should call next function if', () => {

    test('-> connection is successfull', async() => {
      env.MONGODB_URL = 'mock-url';
      (mongoose.connect as jest.Mock).mockImplementationOnce(() => Promise.resolve());
      await dbMiddleware(req, res, next);
      expect(next).toHaveBeenCalledWith();
    });
  });
});