import { NextFunction, Request, RequestHandler, Response } from 'express';
import { getCurrentTime } from '../utils';

export const time = (req: Request, res: Response, next: NextFunction): void => {
    const epochTime = getCurrentTime();
    res.json({ epochTime });
}
