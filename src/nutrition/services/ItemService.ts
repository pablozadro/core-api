import { NutritionItemModel } from "@/nutrition/models";
import createError from "http-errors";

export interface CreateItemBody {
  title: string;
  category?: string;
}

export interface UpdateItemBody {
  title: string;
  category?: string;
}


export class ItemService {

  static async getItems(query: any, sort:any={}) {
    return NutritionItemModel.find(query).sort(sort)
  }

  static async getItemById(id: string) {
    return NutritionItemModel.findById(id)
  }

  static async createItem(body: CreateItemBody) {
    const count = await NutritionItemModel.findOne({ title: body.title }).countDocuments();

    if (count) {
     throw createError(400, 'Bad Request', { cause: 'Item already exists' });
    }

    return NutritionItemModel.create(body);
  }

  static async updateItemById(id: string, body: UpdateItemBody) {
    return NutritionItemModel.findByIdAndUpdate(id, body, { new: true })
  }

  static async deleteItemById(id: string) {
    return NutritionItemModel.findByIdAndDelete(id)
  }
}