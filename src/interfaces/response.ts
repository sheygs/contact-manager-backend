enum Status {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export enum RequestPath {
  BODY = 'body',
  QUERY = 'query',
  PARAMS = 'params',
  HEADERS = 'headers',
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


type NotFoundError = {
  code: number;
  status: Status;
  message: string;
  path: string;
};

interface NotFoundResponse {
  error: NotFoundError;
}

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
  IUserResponse,
};
