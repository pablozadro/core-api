import { ProfileRepository, CreateProfilePayload } from "@/profile/repositories";

export class CreateProfile {
  static async execute(payload: CreateProfilePayload) {
    return ProfileRepository.createProfile(payload)
  }
}