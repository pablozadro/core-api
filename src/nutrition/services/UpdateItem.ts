import { Types } from 'mongoose';
import { NutritionItemRepository, UpdateItemPayload } from "@/nutrition/repositories";

export class UpdateItem {

  static async execute(id: Types.ObjectId, payload: UpdateItemPayload) {
    return NutritionItemRepository.updateItem(id, payload);
  }
}