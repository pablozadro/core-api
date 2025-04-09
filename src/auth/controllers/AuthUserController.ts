import { Request, Response, NextFunction } from 'express';
import { LiteApiResponse } from '@/types';
import { AuthUserService } from '@/auth/services';

export class AuthUserController {

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await AuthUserService.getAll();
      const response: LiteApiResponse = { 
        msg: 'Users Fetched Successfully', 
        payload: { users }, 
        error: null 
      }
      res.json(response);
    } catch(error) {
      next(error);
    }
  }
}