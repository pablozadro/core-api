import { NutritionItemRepository } from "@/nutrition/repositories/NutritionItemRepository";

export class GetItems {
  static async execute() {
    return NutritionItemRepository.getItems();
  }
}