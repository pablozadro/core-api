import { Types } from 'mongoose';
import { NutritionItemModel } from "@/nutrition/models";

export interface CreateItemPayload {
  title: string;
  detail?: string;
  proteins?: number;
  carbohydrates?: number;
  calories?: number;
  category: Types.ObjectId;
  group: Types.ObjectId;
}

export interface UpdateItemPayload {
  title?: string;
  detail?: string;
  proteins?: number;
  carbohydrates?: number;
  calories?: number;
  category: Types.ObjectId;
  group?: Types.ObjectId;
}

export class NutritionItemRepository {

  static getItems() {
    return NutritionItemModel.find();
  }

  static createItem(payload: CreateItemPayload) {
    return NutritionItemModel.create(payload);
  }

  static async getItemById(id: Types.ObjectId) {
    return NutritionItemModel.findById(id)
  }

  static async updateItem(id: Types.ObjectId, payload: UpdateItemPayload) {
    const item = await NutritionItemRepository.getItemById(id);

    if(!item) {
      throw new Error('Item doesn\'t exists');
    }

    return NutritionItemModel.findByIdAndUpdate(id, payload, { new: true });
  }

  static async deleteItem(id: Types.ObjectId) {
    const item = await NutritionItemRepository.getItemById(id);

    if(!item) {
      throw new Error('Item doesn\'t exists');
    }

    await NutritionItemModel.findByIdAndDelete(id);
    return item;
  }
}