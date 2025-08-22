import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
  GetCategories,
  CreateGroup,
  UpdateGroup,
  DeleteGroup,
  GetGroups,
  GetItems, 
  CreateItem,
  UpdateItem,
  DeleteItem,
} from '@/nutrition/services';


export class NutritionController {

  // Categories

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


  // Groups

  static async createGroup(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const group = await CreateGroup.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Group Created Successfully', 
        payload: { group }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async updateGroup(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const group = await UpdateGroup.execute(parsedId, body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Group Updated Successfully', 
        payload: { group }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async deleteGroup(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const group = await DeleteGroup.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Group Deleted Successfully', 
        payload: { group }, 
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


  // Items

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

  static async updateItem(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const item = await UpdateItem.execute(parsedId, body);

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

  static async deleteItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const item = await DeleteItem.execute(parsedId);

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