import { Types } from 'mongoose';
import { NutritionItemModel } from "@/nutrition/models";
import { ORDER_DIR_ASC } from '@/core/config';
import debug from 'debug';

const log = debug('core-api:nutrition:item-repository');

export interface CreateItemPayload {
  title: string;
  detail?: string;
  group: Types.ObjectId;
  category: Types.ObjectId;
  calories?: number;
  totalFats?: number;
  saturatedFats?: number;
  cholesterol?: number;
  sodium?: number;
  carbohydrates?: number;
  fiber?: number;
  proteins?: number;
}

export interface UpdateItemPayload {
  title?: string;
  detail?: string;
  group: Types.ObjectId;
  category: Types.ObjectId;
  calories?: number;
  total_fats?: number;
  saturated_fats?: number;
  cholesterol?: number;
  sodium?: number;
  carbohydrates?: number;
  fiber?: number;
  proteins?: number;
}

interface GetItemsParams {
  orderBy?: string,
  orderDir?: string,
}

export class NutritionItemRepository {

  static getItems({
    orderBy,
    orderDir
  }: GetItemsParams) {
    log({ orderBy, orderDir });
    const query = NutritionItemModel.find().lean();
    
    if(orderBy && orderDir) {
      const sort: any = {};
      sort[orderBy] = orderDir === ORDER_DIR_ASC ? 1 : -1;
      log({ sort });
      query.sort(sort);
    }

    return query.exec();
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