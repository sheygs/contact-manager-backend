import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities';
import UniversalModel from '../model';
import { config } from '../config';
import { UnauthorizedException } from '../utils';

const protect = async (req: Req, _: Res, next: Next) => {
  let token: string = '';

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      if (!token) {
        throw new UnauthorizedException('Not authorized, no token');
      }

      const decoded: any = jwt.verify(token, config.APP.JWT_SECRET);

      const user = await new UniversalModel(User).findOne({
        where: { id: decoded._id },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid authorization token');
      }

      req.user = user.id;

      next();
    } catch (error) {
      throw error;
    }
  }

  if (!token) {
    throw new UnauthorizedException('Not authorized, no token');
  }
};

export { protect };
