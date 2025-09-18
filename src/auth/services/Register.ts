import createError from 'http-errors';
import argon2 from 'argon2';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';
import { NutritionProfileRepository } from '@/nutrition/repositories';

interface RegisterUserBody {
  username?: string;
  email: string;
  password: string;
}

export class Register {
  static async execute(body: RegisterUserBody) {
      const { email, username, password } = body;
      const { AUTH_PASSWORD_PEPPER: pepper } = env;
      const existsUser = await AuthUserRepository.exists({ email });

      if (existsUser) {
        throw createError(400, 'Bad Request', { cause: 'Email is already in use' });
      }

      const hashedPassword = await argon2.hash(`${pepper}.${password}`);
      const requestUsername = username || email.split('@')[0];
      const requestBody = {
        email,
        username: requestUsername,
        password: hashedPassword
      }

      const user = await AuthUserRepository.create(requestBody);
      await NutritionProfileRepository.createProfile({ user: user._id })
      return user;
  }
}