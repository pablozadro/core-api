import { Types } from 'mongoose';
import { ProfileRepository } from '@/profile/repositories';

export class DeleteProfileByUserId {
  static async execute(userId: Types.ObjectId) {
    return ProfileRepository.deleteProfileByUserId(userId)
  }
}