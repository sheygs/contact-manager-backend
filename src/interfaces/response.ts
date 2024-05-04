enum Status {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

type AppResponse = {
  name: string;
  version: string;
  ver: string;
  description: string;
  authors: string;
  host: string;
  base_url?: string;
  port: number;
  environment: string;
};

interface SuccessResponse<T> {
  code: number;
  status: Status;
  message: string;
  data: T | {};
}

interface FailureResponse {
  code: number;
  status: Status;
  error: {
    id: string;
    name: string;
    message: string;
    stack?: string;
  };
}

export enum RequestPath {
  BODY = 'body',
  QUERY = 'query',
  PARAMS = 'params',
}

export interface ObjectLiteral {
  [props: string]: any;
}

type NotFoundError = {
  code: number;
  status: Status;
  message: string;
  path: string;
};

interface NotFoundResponse {
  error: NotFoundError;
}

type Config = {
  APP: {
    NAME: string;
    VERSION: string;
    VER: string;
    DESCRIPTION: string;
    AUTHORS: string;
    HOST: string | undefined;
    BASE_URL: string | undefined;
    PORT: string | number;
    ENV: string;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    JWT_COOKIE_EXPIRES_IN: string;
  };
  DB: {
    USER: string;
    PASSWORD: string;
    PG_PORT: string | number;
    HOST: string;
    DATABASE: string;
  };
};

type IUser = {
  id: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
};

type IUserResponse = {
  user: IUser;
  token?: string;
};

export {
  Status,
  AppResponse,
  SuccessResponse,
  FailureResponse,
  NotFoundResponse,
  Config,
  IUserResponse,
};
