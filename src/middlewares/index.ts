import {
  Application,
  Request as Req,
  Response as Res,
  NextFunction as NextFunc,
} from 'express';

import { BAD_REQUEST } from 'http-status';

import { BaseException, failureResponse } from '../utils';

const handleGlobalError = (error: Error, _: Req, res: Res, next: NextFunc): void => {
  let code: number;

  if (error instanceof BaseException) {
    failureResponse(error, res, error.code);
  } else {
    error.message = error.message ?? 'Error occured. Please try again';

    code = BAD_REQUEST;

    error.name = 'Unknown Error';

    failureResponse(error, res, code);
  }

  next();
};

export const defaultErrorHandler = (app: Application): Application =>
  app.use(handleGlobalError);
