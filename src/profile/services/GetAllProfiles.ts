import { ProfileRepository } from '@/profile/repositories';

export class GetAllProfiles {
  static async execute() {
    return ProfileRepository.getAllProfiles();
  }
}