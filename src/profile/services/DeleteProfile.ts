import { Types } from 'mongoose';
import { ProfileRepository } from '@/profile/repositories';

export class DeleteProfile {
  static async execute(userId: Types.ObjectId) {
    return ProfileRepository.deleteProfile(userId)
  }
}