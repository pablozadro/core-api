import createError from 'http-errors';
import argon2 from 'argon2';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';


interface CreateUserBody {
  username?: string;
  email: string;
  password: string;
}

interface UpdateUserBody {
  username: string;
}

export class AuthUserService {

  static async register(body: CreateUserBody) {
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

  static async login(body: CreateUserBody) {
    const user = AuthUserRepository.create(body);
    return user;
  }

  static async getAll() {
    return AuthUserRepository.getAll();
  }

  static async getUserById(id: string) {
    return AuthUserRepository.getUserById(id);
  }

  static async updateUserById(id: string, body: UpdateUserBody) {
    return AuthUserRepository.updateUserById(id, body);
  }

  static async deleteUserById(id: string) {
    return AuthUserRepository.deleteUserById(id);
  }
}