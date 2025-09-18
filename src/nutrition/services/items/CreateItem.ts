import { NutritionItemRepository, CreateItemPayload } from "@/nutrition/repositories/NutritionItemRepository";


export class CreateItem {

  static async execute(payload: CreateItemPayload) {
    return NutritionItemRepository.createItem(payload);
  }
}