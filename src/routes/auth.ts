import { Router } from 'express';
import { AuthController } from '../controllers';
import { authSchema, validateRequest } from '../utils';
import { RequestPath } from '../interfaces';

const authRouter: Router = Router();

authRouter
  .route('/signup')
  .post(validateRequest(authSchema, RequestPath.BODY), AuthController.register);

authRouter.post(
  '/login',
  validateRequest(authSchema, RequestPath.BODY),
  AuthController.login,
);

authRouter.get('/logout', AuthController.logOut);

export default authRouter;
