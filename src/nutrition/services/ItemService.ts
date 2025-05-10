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

export interface GetItemsOptions {
  filter?: any;
  projection?: string[];
  sort?: any;
  limit?: number;
}



export class ItemService {
  static readonly DEFAULT_LIMIT = 500;
  static readonly DEFAULT_SORT = { title: 1 };
  static readonly DEFAULT_PROJECTION = ['title'];

  static async getItems(options?: GetItemsOptions) {
    const filter = options?.filter || {};
    const projection = options?.projection || this.DEFAULT_PROJECTION;
    const sort = options?.sort || this.DEFAULT_SORT;
    const limit = options?.limit || this.DEFAULT_LIMIT;

    return NutritionItemModel
      .find(filter)
      .select(projection)
      .sort(sort)
      .limit(limit);
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