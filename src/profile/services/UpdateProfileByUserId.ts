import { Types } from 'mongoose';
import { ProfileRepository, UpdateProfilePayload } from '@/profile/repositories';

export class UpdateProfileByUserId {
  static async execute(userId: Types.ObjectId, payload: UpdateProfilePayload) {
    return ProfileRepository.updateProfileByUserId(userId, payload)
  }
}