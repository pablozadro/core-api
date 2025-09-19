import { Types } from 'mongoose';

export interface NutritionItem {
  _id: Types.ObjectId;
  title: string;
  detail: string;
  proteins: number;
  calories: number;
  carbohydrates: number;
  group: Types.ObjectId;
}

export interface NutritionGroup {
  _id: Types.ObjectId;
  title: string;
}

export interface NutritionCategory {
  _id: Types.ObjectId;
  title: string;
}

export type NutritionProfileGender = 'FEMALE' | 'MALE';
export type NutritionActivityLevel = 'SEDENTARY' | 'LIGHTLY_ACTIVE' | 'MODERATELY_ACTIVE' | 'VERY_ACTIVE' | 'SUPER_ACTIVE';
export type NutritionCaloriesGoal = 'MAINTAIN' | 'LOOSE' | 'GAIN';

export interface NutritionProfile {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  weight: number;
  height: number;
  bornYear: number;
  gender: NutritionProfileGender;
  activityLevel: NutritionActivityLevel;
}