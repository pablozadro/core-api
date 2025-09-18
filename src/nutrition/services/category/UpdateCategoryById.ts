import { Types } from 'mongoose';
import { NutritionCategoryRepository, UpdateCategoryPayload } from "@/nutrition/repositories/NutritionCategoryRepository";


export class UpdateCategoryById {

  static async execute(id: Types.ObjectId, payload: UpdateCategoryPayload) {
    return NutritionCategoryRepository.updateCategoryById(id, payload);
  }
}