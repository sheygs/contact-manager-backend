import { createApp } from './app';
import { startServer } from './server';
import { Env } from './interfaces';

if (process.env.NODE_ENV !== Env.TEST) {
  const app = createApp();
  startServer(app);
}
