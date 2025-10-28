import { NutritionItemRepository } from "@/nutrition/repositories/NutritionItemRepository";

interface GetItemsParams {
  orderBy?: string;
  orderDir?: string;
  category?: string;
  group?: string;
}

export class GetItems {
  static async execute({
    orderBy,
    orderDir,
    category,
    group
  }: GetItemsParams) {
    return NutritionItemRepository.getItems({ 
      orderBy, 
      orderDir,
      category,
      group
    });
  }
}