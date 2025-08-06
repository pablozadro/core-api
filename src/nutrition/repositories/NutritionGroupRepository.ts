import { NutritionGroupModel } from "@/nutrition/models";

export class NutritionGroupRepository {

  static getGroups() {
    return NutritionGroupModel.find();
  }
}