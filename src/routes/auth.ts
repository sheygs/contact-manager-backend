import { Router } from 'express';
import { AuthController } from '../controllers';
import { authSchema, signInSchema, validateRequest } from '../utils';
import { RequestPath } from '../interfaces';
import { protect } from '../middlewares';

const authRouter: Router = Router();

authRouter
  .route('/signup')
  .post(validateRequest(signInSchema, RequestPath.BODY), AuthController.register);

authRouter.post(
  '/login',
  validateRequest(authSchema, RequestPath.BODY),
  AuthController.login,
);

authRouter.get('/logout', AuthController.logOut);

authRouter.get('/me', protect, AuthController.userLoggedIn);

export default authRouter;
