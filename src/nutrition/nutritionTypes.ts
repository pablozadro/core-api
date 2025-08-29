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