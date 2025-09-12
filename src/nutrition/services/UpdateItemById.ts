import { Types } from 'mongoose';
import { NutritionItemRepository, UpdateItemPayload } from "@/nutrition/repositories";

export class UpdateItemById {

  static async execute(id: Types.ObjectId, payload: UpdateItemPayload) {
    return NutritionItemRepository.updateItemById(id, payload);
  }
}