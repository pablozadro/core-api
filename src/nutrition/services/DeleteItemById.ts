import { Types } from 'mongoose';
import { NutritionItemRepository } from "@/nutrition/repositories";


export class DeleteItemById {

  static async execute(id: Types.ObjectId) {
    return NutritionItemRepository.deleteItemById(id);
  }
}