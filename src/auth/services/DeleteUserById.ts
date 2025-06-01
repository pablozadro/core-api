import createError from 'http-errors';
import { AuthUserRepository } from '@/auth/repositories';


export const DeleteUserById = async (id: string) => {
    const user = await AuthUserRepository.deleteUserById(id);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return
}