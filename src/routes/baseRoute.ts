import { Response as Res, Request as Req } from 'express';
import { successResponse } from '../utils';
import { AppResponse } from '../interfaces';
import { OK } from 'http-status';
import config from '../config';

const baseRoute = (_: Req, res: Res): void => {
  const transform = Object.entries(config.APP).map(([key, value]) => [
    key.toLowerCase(),
    value,
  ]);

  const data = Object.fromEntries(transform) as AppResponse;

  successResponse<AppResponse>(res, OK, 'okay ✅', data);
};

export { baseRoute };
