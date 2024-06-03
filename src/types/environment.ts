enum Env {
  PRODUCTION = 'production',
  TEST = 'test',
  DEVELOPMENT = 'development',
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

export { Env, Config };
