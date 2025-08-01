import { AuthUserModel } from '@/auth/models';

const DEFAULT_USER_SELECT = "-password";

export class AuthUserRepository {

  static async exists(query: any) {
    return AuthUserModel.exists(query);
  }

  static async create(body: any) {
    return AuthUserModel.create(body);
  }

  static async getAll(query={}, select = DEFAULT_USER_SELECT) {
    return AuthUserModel.find(query).select(select);
  }

  static async getUserById(id: string, select = DEFAULT_USER_SELECT) {
    return AuthUserModel.findById(id).select(select);
  }

  static async getUserByEmail(email: string, select = DEFAULT_USER_SELECT) {
    return AuthUserModel.findOne({ email }).select(select);
  }

  static async updateUserById(id: string, body: any) {
    return AuthUserModel.findByIdAndUpdate(id, body);
  }

  static async deleteUserById(id: string) {
    return AuthUserModel.findByIdAndDelete(id);
  }
}