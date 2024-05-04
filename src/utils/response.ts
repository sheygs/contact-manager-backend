import HttpStatus, { OK, NOT_FOUND, BAD_REQUEST } from 'http-status/lib';
import { Response as Res, Request as Req } from 'express';
import { config } from '../config';
import {
  FailureResponse,
  Status,
  SuccessResponse,
  NotFoundResponse,
} from '../interfaces';

export const successResponse = <T = unknown>(
  res: Res,
  code: number = OK,
  msg: string = HttpStatus[OK] as string,
  data?: T,
): Res => {
  const response: SuccessResponse<T> = {
    code: code,
    status: Status.SUCCESS,
    message: msg,
    data: data ?? {},
  };

  return res.status(code).json(response);
};

export const failureResponse = (
  error: any,
  res: Res,
  code: number = BAD_REQUEST,
): Res => {
  const response: FailureResponse = {
    code,
    status: Status.FAILURE,
    error: {
      id: Math.floor(Math.random() * 1000000000000).toString(),
      name: error.name,
      message: error.message,
      ...(config.APP.ENV === 'production' ? null : { stack: error.stack }),
    },
  };

  return res.status(code).send(response);
};

/**
 * @description Error response middleware for 404 not found. This middleware function should be at the very bottom of the stack.
 * @param req Express.Request
 * @param res Express.Response
 */

export const notFoundResponse = (req: Req, res: Res): Res => {
  const notFoundError: NotFoundResponse = {
    error: {
      code: NOT_FOUND,
      status: Status.FAILURE,
      message: HttpStatus[NOT_FOUND],
      path: `🔍 - ${req.originalUrl}`,
    },
  };

  return res.status(NOT_FOUND).json(notFoundError);
};
