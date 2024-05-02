import {
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  BAD_REQUEST,
  FORBIDDEN,
  UNPROCESSABLE_ENTITY,
  CONFLICT,
} from 'http-status/lib';

export class BaseException extends Error {
  readonly code: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);

    // restore prototype chain since we are
    // extending the built -in Error class
    Object.setPrototypeOf(this, new.target.prototype);

    this.code = statusCode;

    Error.captureStackTrace(this);
  }
}

export class NotFoundException extends BaseException {
  constructor(message: string) {
    super(message, NOT_FOUND);
    this.name = NotFoundException.name;
  }
}

export class BadRequestException extends BaseException {
  constructor(message: string) {
    super(message, BAD_REQUEST);
    this.name = BadRequestException.name;
  }
}

export class UnprocessableEntityException extends BaseException {
  constructor(message: string) {
    super(message, UNPROCESSABLE_ENTITY);
    this.name = UnprocessableEntityException.name;
  }
}

export class UnauthorizedException extends BaseException {
  constructor(message: string) {
    super(message, UNAUTHORIZED);
    this.name = UnauthorizedException.name;
  }
}

export class ForbiddenException extends BaseException {
  constructor(message: string) {
    super(message, FORBIDDEN);
    this.name = ForbiddenException.name;
  }
}

export class InternalServerException extends BaseException {
  constructor(message: string) {
    super(message, INTERNAL_SERVER_ERROR);
    this.name = InternalServerException.name;
  }
}

export class ConflictException extends BaseException {
  constructor(message: string) {
    super(message, CONFLICT);
    this.name = ConflictException.name;
  }
}
