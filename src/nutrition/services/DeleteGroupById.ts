import { Types } from 'mongoose';
import { NutritionGroupRepository } from "@/nutrition/repositories/NutritionGroupRepository";


export class DeleteGroupById {

  static async execute(id: Types.ObjectId) {
    return NutritionGroupRepository.deleteGroupById(id);
  }
}