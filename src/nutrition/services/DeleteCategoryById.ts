import { Types } from 'mongoose';
import { NutritionCategoryRepository } from "@/nutrition/repositories/NutritionCategoryRepository";


export class DeleteCategoryById {

  static async execute(id: Types.ObjectId) {
    return NutritionCategoryRepository.deleteCategoryById(id);
  }
}