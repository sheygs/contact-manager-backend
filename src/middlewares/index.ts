import {
  Application,
  Request as Req,
  Response as Res,
  NextFunction as NextFunc,
} from 'express';

import { BaseException, failureResponse } from '../utils';

const handleGlobalError = (
  error: BaseException,
  _: Req,
  res: Res,
  _next: NextFunc,
): void => {
  failureResponse(error, res, error.code);
};

export const defaultErrorHandler = (app: Application): Application =>
  app.use(handleGlobalError);
