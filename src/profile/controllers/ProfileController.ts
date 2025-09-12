import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import {
  CreateProfile,
  DeleteProfile,
  GetProfile,
  UpdateProfile,
} from '@/profile/services';

export class ProfileController {

  static async createProfile(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const profile = await CreateProfile.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Profile] Profile Created Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getProfile(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const parsedId = new Types.ObjectId(userId);

    try {
      const profile = await GetProfile.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Profile] Profile Fetched Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const { userId } = req.params;
    const parsedId = new Types.ObjectId(userId);

    try {
      const profile = await UpdateProfile.execute(parsedId, body);

      const response: CoreApiResponse = { 
        msg: '[Profile] Profile Updated Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async deleteProfile(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const parsedId = new Types.ObjectId(userId);

    try {
      const profile = await DeleteProfile.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Profile] Profile Deleted Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }
}