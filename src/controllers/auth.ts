import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils';
import { OK, CREATED } from 'http-status';
import { AuthService } from '../services';
import { config } from '../config';
import { IUserResponse } from '../interfaces';

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.register(req.body);

      successResponse<IUserResponse>(res, CREATED, 'User Registered ✅', response);
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.login(req.body);

      res.cookie('jwt', response.token, {
        expires: new Date(
          Date.now() + Number(config.APP.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
        secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
      });

      successResponse<IUserResponse>(res, OK, 'User logged in ✅', response);
    } catch (error) {
      next(error);
    }
  }
  static async logOut(_: Request, res: Response, next: NextFunction) {
    try {
      res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
      });

      successResponse<{}>(res, OK, 'User logged out ✅');
    } catch (error) {
      next(error);
    }
  }

  static async userLoggedIn(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthService.userLoggedIn(req);

      successResponse<any>(res, OK, 'user retrieved  ✅', response);
    } catch (error) {
      next(error);
    }
  }
}

export { AuthController };
