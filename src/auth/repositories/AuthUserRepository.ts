import { AuthUser } from '@/auth/models';

export class AuthUserRepository {

  static async getAll(query={}) {
    return AuthUser.find(query);
  }
}