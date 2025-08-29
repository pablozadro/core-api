import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
  GetCategories,
} from '@/nutrition/services';



export class NutritionCategoryController {

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

  static async updateCategory(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const category = await UpdateCategory.execute(parsedId, body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Category Updated Successfully', 
        payload: { category }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async deleteCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const category = await DeleteCategory.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Category Deleted Successfully', 
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
}