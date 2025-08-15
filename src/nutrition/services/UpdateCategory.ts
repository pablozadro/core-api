import { Types } from 'mongoose';
import { NutritionCategoryRepository, UpdateCategoryPayload } from "@/nutrition/repositories/NutritionCategoryRepository";


export class UpdateCategory {

  static async execute(id: Types.ObjectId, payload: UpdateCategoryPayload) {
    return NutritionCategoryRepository.updateCategory(id, payload);
  }
}