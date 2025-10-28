import { Types } from 'mongoose';
import { NutritionProfile } from '@/nutrition/models';
import {
  NutritionProfileGender,
  NutritionActivityLevel
} from '@/nutrition/types';




export interface CreateProfilePayload {
  user: Types.ObjectId;
  weight?: number;
  height?: number;
  bornYear?: number;
  gender?: NutritionProfileGender;
  activityLevel?: NutritionActivityLevel;
}

export interface UpdateProfilePayload {
  user?: Types.ObjectId;
  weight?: number;
  height?: number;
  bornYear?: number;
  gender?: NutritionProfileGender;
  activityLevel?: NutritionActivityLevel;
}


export class NutritionProfileRepository {

  static async getProfileByUserId(userId: Types.ObjectId) {
    return NutritionProfile.findOne({ user: userId });
  }

  static async createProfile(payload: CreateProfilePayload) {
    const profile = await NutritionProfileRepository.getProfileByUserId(payload.user);

    if(profile) {
      throw new Error('Profile already exists');
    }

    return NutritionProfile.create(payload);
  }

  static async updateProfileByUserId(userId: Types.ObjectId, payload: UpdateProfilePayload) {
    const profile = await NutritionProfileRepository.getProfileByUserId(userId);

    if(!profile) {
      return NutritionProfile.create(payload);
    }

    return NutritionProfile.findOneAndUpdate({ user: userId }, payload, { new: true })
  }

  static deleteProfileByUserId(userId: Types.ObjectId) {
    return NutritionProfile.findOneAndDelete({ user: userId })
  }

  static getAllProfiles() {
    return NutritionProfile.find();
  }
}