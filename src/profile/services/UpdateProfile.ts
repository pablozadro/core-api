import { Types } from 'mongoose';
import { ProfileRepository, UpdateProfilePayload } from '@/profile/repositories';

export class UpdateProfile {
  static async execute(userId: Types.ObjectId, payload: UpdateProfilePayload) {
    return ProfileRepository.updateProfile(userId, payload)
  }
}