import { AuthUserRepository } from '@/auth/repositories';

export class GetAllUsers {
  static async execute() {
    return AuthUserRepository.getAll();
  }
}