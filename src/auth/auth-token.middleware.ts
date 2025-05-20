import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable()
export class AuthTokenMiddleware implements NestMiddleware {
    use(req : Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const bearer = token.split(' ');
        if (bearer[0] !== 'Bearer' || !bearer[1]) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }
}