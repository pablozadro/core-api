import { NutritionItemModel } from "@/nutrition/models";

export class NutritionItemRepository {
  static getItems() {
    return NutritionItemModel.find();
  }
}