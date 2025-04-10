import { AuthUser } from '@/auth/models';

const DEFAULT_USER_SELECT = "-password";

export class AuthUserRepository {

  static async exists(query: any) {
    return AuthUser.exists(query);
  }

  static async create(body: any) {
    return AuthUser.create(body);
  }

  static async getAll(query={}, select = DEFAULT_USER_SELECT) {
    return AuthUser.find(query).select(select);
  }

  static async getUserById(id: string, select = DEFAULT_USER_SELECT) {
    return AuthUser.findById(id).select(select);
  }

  static async getUserByEmail(email: string, select = DEFAULT_USER_SELECT) {
    return AuthUser.findOne({ email }).select(select);
  }

  static async updateUserById(id: string, body: any) {
    return AuthUser.findByIdAndUpdate(id, body);
  }

  static async deleteUserById(id: string) {
    return AuthUser.findByIdAndDelete(id);
  }
}