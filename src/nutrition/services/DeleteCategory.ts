import { Types } from 'mongoose';
import { NutritionCategoryRepository } from "@/nutrition/repositories/NutritionCategoryRepository";


export class DeleteCategory {

  static async execute(id: Types.ObjectId) {
    return NutritionCategoryRepository.deleteCategory(id);
  }
}