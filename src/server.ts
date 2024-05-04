import { Server, createServer } from 'http';
import express from 'express';
import { config } from './config';
import { exitLog } from './utils';

const {
  APP: { ENV, PORT },
} = config;

export const startServer = (app: express.Application): Server => {
  const httpServer = createServer(app);

  process
    .on('SIGINT', () => exitLog(null, 'SIGINT'))
    .on('SIGQUIT', () => exitLog(null, 'SIGQUIT'))
    .on('SIGTERM', () => exitLog(null, 'SIGTERM'))
    .on('uncaughtException', (error) => exitLog(error, 'uncaughtException'))
    .on('beforeExit', () => exitLog(null, 'beforeExit'))
    .on('exit', () => exitLog(null, 'exit'));

  return httpServer.listen(PORT, (): void => {
    process.stdout.write(`⚙️ Env: ${ENV}\n`);
    process.stdout.write(`⏱ Started on: ${Date.now()}\n`);
    process.stdout.write(`🚀 hux-api server ready at http://localhost:${PORT}\n`);
  });
};
