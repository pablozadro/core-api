import createError from 'http-errors';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';


interface LoginUserBody {
  email: string;
  password: string;
}


export const Login = async (body: LoginUserBody) => {
    const { email, password } = body;
    const { 
      AUTH_PASSWORD_PEPPER: pepper,
      AUTH_JWT_SIGN_SECRET: jwtSignSecret,
    } = env;
    const user = await AuthUserRepository.getUserByEmail(email, "username email password");

    if (!user) {
      throw createError(401, 'Bad Credentials', { cause: 'Email not registered' });
    }

    const isPasswordVerified = await argon2.verify(user.password, `${pepper}.${password}`);

    if (!isPasswordVerified) {
      throw createError(401, 'Bad Credentials', { cause: 'Wrong Password' });
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
      expiresIn: '1d'
    });

    return token;
}