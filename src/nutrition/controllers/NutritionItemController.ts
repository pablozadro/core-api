import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  GetItems, 
  CreateItem,
  UpdateItemById,
  DeleteItemById,
  GetItemById,
} from '@/nutrition/services/items';


export class NutritionItemController {

  static async getItems(req: Request, res: Response, next: NextFunction) {
    const { orderBy, orderDir } = req.query;

    try {
      const items = await GetItems.execute({
        orderBy: orderBy?.toString(),
        orderDir: orderDir?.toString(),
      });

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Items Fetched Successfully', 
        payload: { items }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const item = await GetItemById.execute({
        id: parsedId
      });

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Item Fetched Successfully', 
        payload: { item }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async createItem(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const item = await CreateItem.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Item Created Successfully', 
        payload: { item }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async updateItemById(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const item = await UpdateItemById.execute(parsedId, body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Item Updated Successfully', 
        payload: { item }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async deleteItemById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const item = await DeleteItemById.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Item Deleted Successfully', 
        payload: { item }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

}