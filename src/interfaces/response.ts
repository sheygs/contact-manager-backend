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
    USER: string;
    PASSWORD: string;
    PG_PORT: string | number;
    HOST: string;
    DATABASE: string;
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
