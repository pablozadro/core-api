import { Types } from 'mongoose';
import { NutritionItemRepository } from "@/nutrition/repositories/NutritionItemRepository";

interface GetItemParams {
  id: Types.ObjectId
}

export class GetItemById {
  static async execute({
    id,
  }: GetItemParams) {
    return NutritionItemRepository.getItemById(id);
  }
}