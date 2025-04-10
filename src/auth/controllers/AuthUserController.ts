import { Request, Response, NextFunction } from 'express';
import { LiteApiResponse } from '@/types';
import { AuthUserService } from '@/auth/services';

export class AuthUserController {

  static async register(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      await AuthUserService.register(body);
      const response: LiteApiResponse = { 
        msg: 'User Created Successfully', 
        payload: null, 
        error: null 
      }
      res.status(201).json(response);
    } catch(error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      const token = await AuthUserService.login(body);
      const response: LiteApiResponse = { 
        msg: 'User Login Successfully', 
        payload: { token }, 
        error: null 
      }
      res.json(response);
    } catch(error) {
      next(error);
    }
  }

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

  static async getUserById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const user = await AuthUserService.getUserById(id);
      const response: LiteApiResponse = { 
        msg: 'User Fetched Successfully', 
        payload: { user }, 
        error: null 
      }
      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async updateUserById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { body } = req;

    try {
      await AuthUserService.updateUserById(id, body);
      const response: LiteApiResponse = { 
        msg: 'User Updated Successfully', 
        payload: null, 
        error: null 
      }
      res.status(204).json(response);
    } catch(error) {
      next(error);
    }
  }

  static async deleteUserById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await AuthUserService.deleteUserById(id);
      const response: LiteApiResponse = { 
        msg: 'User Deleted Successfully', 
        payload: null, 
        error: null 
      }
      res.status(204).json(response);
    } catch(error) {
      next(error);
    }
  }
}