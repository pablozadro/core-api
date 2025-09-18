import { NutritionCategoryRepository } from "@/nutrition/repositories/NutritionCategoryRepository";

export class GetCategories {
  static async execute() {
    return NutritionCategoryRepository.getCategories();
  }
}