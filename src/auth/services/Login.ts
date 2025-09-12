import createError from 'http-errors';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';
import authConfig from '@/auth/config';


interface LoginUserBody {
  email: string;
  password: string;
}

export class Login {

  static async execute(body: LoginUserBody) {
      const { email, password } = body;
      const { 
        AUTH_PASSWORD_PEPPER: pepper,
        AUTH_JWT_SIGN_SECRET: jwtSignSecret,
      } = env;

      const user = await AuthUserRepository.getUserByEmail(email, "username email password");

      if (!user) {
        throw createError(401, 'Unauthorized', { cause: 'Email is not registered' });
      }

      const isPasswordVerified = await argon2.verify(user.password, `${pepper}.${password}`);

      if (!isPasswordVerified) {
        throw createError(401, 'Unauthorized', { cause: 'Wrong Password' });
      }

      const payload = { 
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      const token = jwt.sign(payload, jwtSignSecret, {
        algorithm: 'HS256',
        expiresIn: '7d'
      });

      return token;
  }
}