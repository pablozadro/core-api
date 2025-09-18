import { NutritionItemRepository } from "@/nutrition/repositories/NutritionItemRepository";

interface GetItemsParams {
  orderBy?: string,
  orderDir?: string,
}

export class GetItems {
  static async execute({
    orderBy,
    orderDir,
  }: GetItemsParams) {
    return NutritionItemRepository.getItems({ orderBy, orderDir });
  }
}