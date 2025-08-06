import { NutritionGroupRepository } from "@/nutrition/repositories/NutritionGroupRepository";

export class GetGroups {
  static async execute() {
    return NutritionGroupRepository.getGroups();
  }
}