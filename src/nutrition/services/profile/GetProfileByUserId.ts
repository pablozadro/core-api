import { Types } from 'mongoose';
import { NutritionProfileRepository } from '@/nutrition/repositories';

export class GetProfileByUserId {
  static async execute(userId: Types.ObjectId) {
    return NutritionProfileRepository.getProfileByUserId(userId);
  }
}