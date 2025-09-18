import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  CreateGroup,
  UpdateGroupById,
  DeleteGroupById,
  GetGroups,
} from '@/nutrition/services/group';



export class NutritionGroupController {

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

  static async updateGroupById(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const group = await UpdateGroupById.execute(parsedId, body);

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

  static async deleteGroupById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const parsedId = new Types.ObjectId(id);

    try {
      const group = await DeleteGroupById.execute(parsedId);

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
}