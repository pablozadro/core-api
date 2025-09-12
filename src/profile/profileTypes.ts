import { Types } from 'mongoose';

export type ProfileGender = 'FEMALE' | 'MALE';
export type ActivityLevel = 'SEDENTARY' | 'LIGHTLY_ACTIVE' | 'MODERATELY_ACTIVE' | 'VERY_ACTIVE' | 'SUPER_ACTIVE';

export interface Profile {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  weight: number;
  height: number;
  bornDate: Date;
  gender: ProfileGender;
  activityLevel: ActivityLevel;
}