import { Request, Response } from 'express';
import { CoreApiResponse } from '@/types';

export class HealthController {

  static async getHealthCheck(req: Request, res: Response) {
    const response: CoreApiResponse = { 
      msg: 'Health Check OK', 
      payload: null, 
      error: null 
    }
    res.json(response);
  }
}