import request from 'supertest';
import app from '@/app';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

// Env & Configs
import env from '@/environment';

// Middlewares
import { dbMiddleware } from '@/core/middlewares';
import { AuthUserRepository } from '@/auth/repositories';

// Mocks
import { mockUser1 } from '../mocks';



/**
 * Mocks
 */

jest.mock('argon2');
jest.mock('jsonwebtoken');
jest.mock('@/environment');
jest.mock('@/core/middlewares/dbMiddleware');
jest.mock('@/auth/repositories');


describe('Login', () => {
  const URL = '/api/auth/login';

  beforeEach(() => {
    (dbMiddleware as jest.Mock).mockImplementation((req, res, next) => {
      next();
    });
  });


  describe('401 Unauthorized', () => {

    test('-> email is not registered', async () => {
      (AuthUserRepository.getUserByEmail as jest.Mock).mockImplementation(async () => null);
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(401);
      expect(msg).toEqual('Core-API Error');
      expect(payload).toEqual(null);
      expect(error).toEqual({
        status: 401,
        msg: 'Unauthorized',
        cause: 'Email is not registered'
      });
    });

    test('-> wrong password', async () => {
      (AuthUserRepository.getUserByEmail as jest.Mock).mockImplementation(async () => mockUser1);
      (argon2.verify as jest.Mock).mockImplementationOnce(() => false);
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(401);
      expect(msg).toEqual('Core-API Error');
      expect(payload).toEqual(null);
      expect(error).toEqual({
        status: 401,
        msg: 'Unauthorized',
        cause: 'Wrong Password'
      });
    });
  });


  describe('Verify Password', () => {
    const AUTH_PASSWORD_PEPPER = 'def.123.#!?';

    beforeEach(() => {
      (AuthUserRepository.getUserByEmail as jest.Mock).mockImplementation(async () => mockUser1);
    });

    test('-> should do something', async () => {
      env.AUTH_PASSWORD_PEPPER = AUTH_PASSWORD_PEPPER;
      jest.spyOn(argon2, 'verify');
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      await request(app).post(URL).send(requestBody);
      expect(argon2.verify).toHaveBeenCalledWith(mockUser1.password, `${AUTH_PASSWORD_PEPPER}.${requestBody.password}`)
    });
  });


  describe('Sign Password', () => {
    const AUTH_JWT_SIGN_SECRET = 'def.123.#!?';

    beforeEach(() => {
      (AuthUserRepository.getUserByEmail as jest.Mock).mockImplementation(async () => mockUser1);
      (argon2.verify as jest.Mock).mockImplementationOnce(async () => true);
    });

    test('-> should do something', async () => {
      env.AUTH_JWT_SIGN_SECRET = AUTH_JWT_SIGN_SECRET;
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      jest.spyOn(jwt, 'sign');
      await request(app).post(URL).send(requestBody);

      const payload = {
        _id: mockUser1._id,
        username: mockUser1.username,
        email: mockUser1.email,
        createdAt: mockUser1.createdAt,
        updatedAt: mockUser1.updatedAt,
      };

      expect(jwt.sign).toHaveBeenCalledWith(
        payload, 
        AUTH_JWT_SIGN_SECRET, 
        { algorithm: 'HS256', expiresIn: '7d' }
      );
    });
  });


  describe('200 OK', () => {
    test('-> should return token', async () => {
      const TOKEN = 'abc.123.#$%';

      (AuthUserRepository.getUserByEmail as jest.Mock).mockImplementation(async () => mockUser1);
      (argon2.verify as jest.Mock).mockImplementationOnce(async () => true);
      (jwt.sign as jest.Mock).mockImplementationOnce(async () => TOKEN);

      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(200);
      expect(msg).toEqual('[Auth] User Login Successfully');
      expect(payload).toEqual({ token: TOKEN });
      expect(error).toEqual(null);
    });
  });
});