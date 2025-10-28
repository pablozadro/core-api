import { Request, Response } from 'express';
import { Core } from 'core-types';

export class HealthController {

  static async getHealthCheck(req: Request, res: Response) {
    const response: Core.ApiResponse<null> = { 
      msg: 'Health Check OK', 
      payload: null, 
      error: null 
    }
    res.json(response);
  }
}