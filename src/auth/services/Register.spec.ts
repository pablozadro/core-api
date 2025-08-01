import request from 'supertest';
import argon2 from 'argon2';
import app from '@/app';
import config from '@/auth/config';
import { dbMiddleware } from '@/core/middlewares';
import { AuthUserRepository } from '@/auth/repositories';


jest.mock('argon2');
jest.mock('@/core/middlewares/dbMiddleware');
jest.mock('@/auth/repositories');


describe('Register', () => {
  const URL = '/api/auth/register';
  const HASHED_PASSWORD = 'abc.123.#!?';

  beforeEach(() => {
    (dbMiddleware as jest.Mock).mockImplementation((req, res, next) => {
      next();
    });
    (argon2.hash as jest.Mock).mockImplementation(() => HASHED_PASSWORD);
  });


  describe('400 Bad Request', () => {

    beforeEach(() => {
      (AuthUserRepository.exists as jest.Mock).mockImplementation(async () => true);
    });

    test('-> email is already in use', async () => {
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(400);
      expect(msg).toEqual('Core-API Error');
      expect(payload).toEqual(null);
      expect(error).toEqual({
        status: 400,
        msg: 'Bad Request',
        cause: 'Email is already in use'
      });
    });

    test('-> email is invalid', async () => {
      const requestBody = { email: 'testlocalhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(400);
      expect(msg).toEqual('Core-API Error');
      expect(payload).toEqual(null);
      expect(error).toEqual({
        status: 400,
        msg: 'Bad Request',
        cause: [{
          type: 'field',
          value: requestBody.email,
          msg: 'Invalid value',
          path: 'email',
          location: 'body'
        }]
      });
    });

    test('-> password is too short', async () => {
      const requestBody = { email: 'test@localhost.io', password: 'abc' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(requestBody.password.length < config.passwordMinLen);
      expect(status).toEqual(400);
      expect(msg).toEqual('Core-API Error');
      expect(payload).toEqual(null);
      expect(error).toEqual({
        status: 400,
        msg: 'Bad Request',
        cause: [{
          type: 'field',
          value: requestBody.password,
          msg: 'Invalid value',
          path: 'password',
          location: 'body'
        }]
      });
    });
  });


  describe('201 User Created Successfully', () => {

    beforeEach(() => {
      (AuthUserRepository.exists as jest.Mock).mockImplementation(async () => false);
      jest.spyOn(AuthUserRepository, 'create');
    });

    test('-> should set response properly', async () => {
      const requestBody = { username: 'username', email: 'test@localhost.io', password: 'abc123' };
      const response = await request(app).post(URL).send(requestBody);
      const { status, body } = response;
      const { msg, payload, error } = body;

      expect(status).toEqual(201);
      expect(msg).toEqual('[Auth] User Created Successfully');
      expect(payload).toEqual(null);
      expect(error).toEqual(null);
    });

    test('-> should hash password', async () => {
      const requestBody = { username: 'username', email: 'test@localhost.io', password: 'abc123' };
      await request(app).post(URL).send(requestBody);

      expect(AuthUserRepository.create).toHaveBeenCalledWith({
        ...requestBody,
        password: HASHED_PASSWORD
      });
    });

    test('-> set defalt username from email', async () => {
      const requestBody = { email: 'test@localhost.io', password: 'abc123' };
      await request(app).post(URL).send(requestBody);

      expect(AuthUserRepository.create).toHaveBeenCalledWith({
        ...requestBody,
        username: 'test',
        password: HASHED_PASSWORD
      });
    });
  });
});