import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import {
  CreateProfile,
  DeleteProfileByUserId,
  GetProfileByUserId,
  UpdateProfileByUserId,
  GetAllProfiles
} from '@/nutrition/services/profile';

export class NutritionProfileController {

  static async createProfile(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      const profile = await CreateProfile.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Profile Created Successfully', 
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
      const profile = await GetProfileByUserId.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Profile Fetched Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getAllProfiles(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles = await GetAllProfiles.execute();

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Profiles Fetched Successfully', 
        payload: { profiles }, 
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
      const profile = await UpdateProfileByUserId.execute(parsedId, body);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Profile Updated Successfully', 
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
      const profile = await DeleteProfileByUserId.execute(parsedId);

      const response: CoreApiResponse = { 
        msg: '[Nutrition] Profile Deleted Successfully', 
        payload: { profile }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }
}