import { Types } from 'mongoose';
import { NutritionGroupRepository } from "@/nutrition/repositories/NutritionGroupRepository";


export class DeleteGroup {

  static async execute(id: Types.ObjectId) {
    return NutritionGroupRepository.deleteGroup(id);
  }
}