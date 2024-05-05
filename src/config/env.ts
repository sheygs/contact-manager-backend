import pkg from '../../package.json';
import 'dotenv/config';
import { Env, Config } from '../interfaces';

const { TEST, DEVELOPMENT } = Env;

export const config: Config = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    VER: `v${pkg.version[0]}`,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.author,
    HOST: process.env.APP_HOST,
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.NODE_ENV === TEST ? 8080 : process.env.PORT ?? 80,
    ENV: process.env.NODE_ENV ?? DEVELOPMENT,
    JWT_SECRET: process.env.JWT_SECRET ?? '',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '',
    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN ?? '',
  },
  DB: {
    USER: process.env.PG_USER ?? 'postgres',
    PASSWORD: process.env.PG_PASSWORD ?? '',
    PG_PORT: process.env.PG_PORT ?? 5432,
    HOST: process.env.PG_HOST ?? 'localhost',
    DATABASE: process.env.PG_DATABASE ?? '',
  },
};
