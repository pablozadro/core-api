import createError from 'http-errors';
import { AuthUserRepository } from '@/auth/repositories';


interface UpdateUserBody {
  username: string;
}


export const UpdateUserById = async (id: string, body: UpdateUserBody) => {
    const user = await AuthUserRepository.updateUserById(id, body);

    if(!user) {
      throw createError(400, 'User Not Found');
    }

    return;
}