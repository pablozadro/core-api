import { Types } from 'mongoose';
import { NutritionProfileRepository, UpdateProfilePayload } from '@/nutrition/repositories';

export class UpdateProfileByUserId {
  static async execute(userId: Types.ObjectId, payload: UpdateProfilePayload) {
    return NutritionProfileRepository.updateProfileByUserId(userId, payload)
  }
}