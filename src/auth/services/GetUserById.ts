import createError from 'http-errors';
import { AuthUserRepository } from '@/auth/repositories';

export class GetUserById{
  static async execute(id: string) {
      const user = await AuthUserRepository.getUserById(id);

      if(!user) {
        throw createError(400, 'User Not Found');
      }

      return user;
  }
}