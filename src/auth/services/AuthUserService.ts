import { AuthUserRepository } from '@/auth/repositories';

export class AuthUserService {

  static async getAll() {
    return AuthUserRepository.getAll();
  }
}