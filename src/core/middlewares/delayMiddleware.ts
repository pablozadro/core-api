import { Request, Response, NextFunction } from 'express';
import debug from 'debug';


export function getRandomDecimal(min:number, max:number) {
  return Math.random() * (max - min) + min;
}

export const delayMiddleware = async (req: Request, res: Response, next: NextFunction)  => {
    const log = debug('core-api:core:delay-middleware');
    const delay = getRandomDecimal(500, 1000);

    log(`${delay} ms delay`);

    setTimeout(() => {
      next();
    }, delay)
}