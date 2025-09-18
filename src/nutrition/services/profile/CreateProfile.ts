import { NutritionProfileRepository, CreateProfilePayload } from "@/nutrition/repositories";

export class CreateProfile {
  static async execute(payload: CreateProfilePayload) {
    return NutritionProfileRepository.createProfile(payload)
  }
}