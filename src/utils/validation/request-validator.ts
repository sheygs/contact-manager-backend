import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import { ObjectLiteral, RequestPath } from '../../interfaces';
import { UnprocessableEntityException } from '../error';

export const requestValidatorHandler = (schema: any, input: ObjectLiteral) => {
  const { error } = schema.validate(input);

  if (error) {
    throw new UnprocessableEntityException(error.details[0].message);
  }
};

function validateRequest(schema: ObjectSchema<any>, requestPath: RequestPath) {
  return (req: Request, _: Response, next: NextFunction) => {
    const input = req[requestPath];

    requestValidatorHandler(schema, input);

    next();
  };
}

export { validateRequest };
