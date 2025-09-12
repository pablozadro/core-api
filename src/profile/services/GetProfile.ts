import { Types } from 'mongoose';
import { ProfileRepository } from '@/profile/repositories';

export class GetProfile {
  static async execute(userId: Types.ObjectId) {
    return ProfileRepository.getProfileByUserId(userId);
  }
}