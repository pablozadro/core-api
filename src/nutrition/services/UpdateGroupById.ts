import { Types } from 'mongoose';
import { NutritionGroupRepository, UpdateGroupPayload } from "@/nutrition/repositories/NutritionGroupRepository";

export class UpdateGroupById {

  static async execute(id: Types.ObjectId, payload: UpdateGroupPayload) {
    return NutritionGroupRepository.updateGroupById(id, payload);
  }
}