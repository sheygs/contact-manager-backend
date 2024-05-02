import cors from 'cors';
import express, { Application, Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import indexRoute from './routes';
import { defaultErrorHandler } from './middlewares';
import { config, connectDataSource } from './config';

export const createApp = (): Application => {
  connectDataSource();

  const app: Express = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json({ limit: '100mb' }));
  app.use(
    express.urlencoded({
      extended: true,
      limit: '100mb',
    }),
  );

  if (config.APP.ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.use(indexRoute);
  app.use(defaultErrorHandler);

  return app;
};
