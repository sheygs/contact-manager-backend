import pkg from '../../package.json';
import 'dotenv/config';
import { ENV, Config } from '../interfaces';

const { TEST, DEVELOPMENT } = ENV;

const config: Config = {
  APP: {
    NAME: pkg.name,
    VERSION: pkg.version,
    VER: `v${pkg.version[0]}`,
    DESCRIPTION: pkg.description,
    AUTHORS: pkg.author,
    HOST: process.env.APP_HOST,
    BASE_URL: process.env.BASE_URL,
    PORT: process.env.NODE_ENV === TEST ? 8080 : process.env.PORT ?? 3000,
    ENV: process.env.NODE_ENV ?? DEVELOPMENT,
  },
  DB: {
    DATABASE_DIALECT: process.env.DATABASE_DIALECT ?? 'postgres',
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default config;
