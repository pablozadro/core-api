import createError from 'http-errors';
import argon2 from 'argon2';
import env from '@/environment';
import { AuthUserRepository } from '@/auth/repositories';
import { ProfileRepository } from '@/profile/repositories';

interface RegisterUserBody {
  username?: string;
  email: string;
  password: string;
}


export const Register = async (body: RegisterUserBody) => {
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
    await ProfileRepository.createProfile({ user: user._id })
    return user;
}