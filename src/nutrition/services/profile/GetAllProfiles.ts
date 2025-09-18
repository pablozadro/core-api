import { NutritionProfileRepository } from '@/nutrition/repositories';

export class GetAllProfiles {
  static async execute() {
    return NutritionProfileRepository.getAllProfiles();
  }
}