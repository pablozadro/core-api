import { Types } from 'mongoose';
import { NutritionGroupRepository, UpdateGroupPayload } from "@/nutrition/repositories/NutritionGroupRepository";

export class UpdateGroup {

  static async execute(id: Types.ObjectId, payload: UpdateGroupPayload) {
    return NutritionGroupRepository.updateGroup(id, payload);
  }
}