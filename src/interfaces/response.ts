enum STATUS {
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
  status: STATUS;
  message: string;
  data: T | {};
}

interface FailureResponse {
  code: number;
  status: STATUS;
  error: {
    id: string;
    name: string;
    message: string;
    stack?: string;
  };
}

type NotFoundError = {
  code: number;
  status: STATUS;
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
  };
  DB: {
    DATABASE_DIALECT: string;
    DATABASE_URL: string | undefined;
  };
};

export {
  STATUS,
  AppResponse,
  SuccessResponse,
  FailureResponse,
  NotFoundResponse,
  Config,
};
