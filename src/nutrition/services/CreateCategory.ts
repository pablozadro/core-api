import { NutritionCategoryRepository, CreateCategoryPayload } from "@/nutrition/repositories/NutritionCategoryRepository";


export class CreateCategory {

  static async execute(payload: CreateCategoryPayload) {
    return NutritionCategoryRepository.createCategory(payload);
  }
}