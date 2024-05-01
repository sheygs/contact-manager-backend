import { createApp } from './app';
import { startServer } from './server';
import { ENV } from './interfaces';

if (process.env.NODE_ENV !== ENV.TEST) {
  const app = createApp();
  startServer(app);
}
