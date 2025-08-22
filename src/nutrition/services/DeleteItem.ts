import { Types } from 'mongoose';
import { NutritionItemRepository } from "@/nutrition/repositories";


export class DeleteItem {

  static async execute(id: Types.ObjectId) {
    return NutritionItemRepository.deleteItem(id);
  }
}