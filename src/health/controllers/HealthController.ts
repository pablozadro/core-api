import { Request, Response, NextFunction } from 'express';
import { LiteApiResponse } from '@/types';

export class HealthController {

  static async getHealthCheck(req: Request, res: Response, next: NextFunction) {
    const response: LiteApiResponse = { 
      msg: 'Health Check OK', 
      payload: null, 
      error: null 
    }
    res.json(response);
  }
}