import 'dotenv/config';
import pkg from '../../package.json';
import { Env, Config } from '../interfaces';

const { DEVELOPMENT } = Env;



export const config: Config = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    VER: `v${pkg.version[0]}`,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.author,
    HOST: process.env.APP_HOST,
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.PORT ?? 4000,
    ENV: process.env.NODE_ENV ?? DEVELOPMENT,
    JWT_SECRET: process.env.JWT_SECRET ?? '',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '',
    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN ?? '',
  },
  DB: {
    USER: process.env.POSTGRES_USER ?? 'postgres',
    PASSWORD: process.env.POSTGRES_PASSWORD ?? '',
    PG_PORT: process.env.POSTGRES_PORT ?? 5432,
    HOST: process.env.POSTGRES_HOST ?? 'localhost',
    DATABASE: process.env.POSTGRES_DB ?? '',
  },
};
