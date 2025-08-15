import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  CreateCategory,
  GetCategories,
  GetGroups, 
  GetItems, 
} from '@/nutrition/services';


export class NutritionController {

  static async createCategory(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const category = await CreateCategory.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Category Created Successfully', 
        payload: { category }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await GetCategories.execute();

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Categories Fetched Successfully', 
        payload: { categories }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getGroups(req: Request, res: Response, next: NextFunction) {
    try {
      const groups = await GetGroups.execute();

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Groups Fetched Successfully', 
        payload: { groups }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getItems(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await GetItems.execute();

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
}