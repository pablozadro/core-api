import { NutritionGroupRepository, CreateGroupPayload } from "@/nutrition/repositories/NutritionGroupRepository";


export class CreateGroup {

  static async execute(payload: CreateGroupPayload) {
    return NutritionGroupRepository.createGroup(payload);
  }
}