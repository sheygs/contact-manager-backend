import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../db/entities';
import { config } from '../config';
import { UniversalModel } from '../db';
import {
  BadRequestException,
  bearerTokenSchema,
  UnauthorizedException,
} from '../utils';

const verifyAuthToken = async (req: Req, _: Res, next: Next): Promise<void> => {
  const { authorization } = req.headers;

  const { error } = bearerTokenSchema.validate(req.headers);

  if (error) {
    return next(new BadRequestException(error.details[0].message));
  }

  try {
    const [, token] = authorization!.split('Bearer ');

    let decoded: any;

    if (!token) {
      throw new BadRequestException('No token provided');
    }

    try {
      decoded = jwt.verify(token, config.APP.JWT_SECRET);
    } catch (error) {
      throw new UnauthorizedException('Invalid authorization token');
    }

    const user = await new UniversalModel(User).findOne({
      where: { id: decoded._id },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid authorization token');
    }

    req.user = user.id;

    next();
  } catch (error) {
    next(error);
  }
};

export { verifyAuthToken };
