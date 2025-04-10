import createError from 'http-errors';
import { AuthUserRepository } from '@/auth/repositories';

export const GetUserById = async (id: string) => {
    const user = await AuthUserRepository.getUserById(id);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return user;
}