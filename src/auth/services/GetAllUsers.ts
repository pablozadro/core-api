import { AuthUserRepository } from '@/auth/repositories';

export const GetAllUsers = async () => {
  return AuthUserRepository.getAll();
}