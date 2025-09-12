import { Request, Response, NextFunction } from 'express';
import { CoreApiResponse } from '@/types';
import { 
  DeleteUserById,
  GetAllUsers,
  GetUserById,
  Login,
  Register,
  UpdateUserById,
} from '@/auth/services';

export class AuthUserController {

  static async register(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    try {
      await Register.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Auth] User Created Successfully', 
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
      const token = await Login.execute(body);

      const response: CoreApiResponse = { 
        msg: '[Auth] User Login Successfully', 
        payload: { token }, 
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
      const user = await GetUserById.execute(id);

      const response: CoreApiResponse = { 
        msg: '[Auth] User Fetched Successfully', 
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
      await UpdateUserById.execute(id, body);

      const response: CoreApiResponse = { 
        msg: '[Auth] User Updated Successfully', 
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
      await DeleteUserById.execute(id);

      const response: CoreApiResponse = { 
        msg: '[Auth] User Deleted Successfully', 
        payload: null, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }

  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await GetAllUsers.execute();

      const response: CoreApiResponse = { 
        msg: '[Auth] Users Fetched Successfully', 
        payload: { users }, 
        error: null 
      }

      res.json(response);
    } catch(error) {
      next(error);
    }
  }
}