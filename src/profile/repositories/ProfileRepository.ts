import { Types } from 'mongoose';
import { Profile } from '@/profile/models';

export type ProfileGender = 'FEMALE' | 'MALE';
export type ActivityLevel = 'SEDENTARY' | 'LIGHTLY_ACTIVE' | 'MODERATELY_ACTIVE' | 'VERY_ACTIVE' | 'SUPER_ACTIVE';

export interface CreateProfilePayload {
  user: Types.ObjectId;
  weight?: number;
  height?: number;
  bornDate?: Date;
  gender?: ProfileGender;
  activityLevel?: ActivityLevel;
}

export interface UpdateProfilePayload {
  user?: Types.ObjectId;
  weight?: number;
  height?: number;
  bornDate?: Date;
  gender?: ProfileGender;
  activityLevel?: ActivityLevel;
}


export class ProfileRepository {

  static async getProfileByUserId(userId: Types.ObjectId) {
    return Profile.findOne({ user: userId });
  }

  static async createProfile(payload: CreateProfilePayload) {
    const profile = await ProfileRepository.getProfileByUserId(payload.user);

    if(profile) {
      throw new Error('Profile already exists');
    }

    return Profile.create(payload);
  }

  static updateProfile(userId: Types.ObjectId, payload: UpdateProfilePayload) {
    return Profile.findOneAndUpdate({ user: userId }, payload, { new: true })
  }

  static deleteProfile(userId: Types.ObjectId) {
    return Profile.findOneAndDelete({ user: userId })
  }
}