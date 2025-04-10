import createError from 'http-errors';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';


interface RegisterUserBody {
  username?: string;
  email: string;
  password: string;
}

interface LoginUserBody {
  email: string;
  password: string;
}

interface UpdateUserBody {
  username: string;
}

export class AuthUserService {

  static async register(body: RegisterUserBody) {
    const { email, username, password } = body;
    const { AUTH_PASSWORD_PEPPER: pepper } = env;
    const existsUser = await AuthUserRepository.exists({ email });

    if (existsUser) {
      throw createError(400, 'Bad Request', { cause: 'Email already in use' });
    }

    const hashedPassword = await argon2.hash(`${pepper}.${password}`);
    const requestUsername = username || email.split('@')[0];
    const requestBody = {
      email,
      username: requestUsername,
      password: hashedPassword
    }

    await AuthUserRepository.create(requestBody);
    return;
  }

  static async login(body: LoginUserBody) {
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

  static async getAll() {
    return AuthUserRepository.getAll();
  }

  static async getUserById(id: string) {
    const user = await AuthUserRepository.getUserById(id);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return user;
  }

  static async updateUserById(id: string, body: UpdateUserBody) {
    const user = await AuthUserRepository.updateUserById(id, body);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return;
  }

  static async deleteUserById(id: string) {
    const user = await AuthUserRepository.deleteUserById(id);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return
  }
}