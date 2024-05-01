import winston, { format } from 'winston';
const { combine, printf, timestamp } = format;

// define logger configuration
const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const exitLog = (error: Error | null, event: string): never => {
  let msg: string = '';

  if (error) {
    msg = `\n[!ERROR][${event}] => ${error}`;
    process.stdout.write(msg);
    logger.error(msg);
  } else {
    msg = `\n![${event}] EVENT CAUSE EXIT`;
    process.stdout.write(msg);
    logger.info(msg);
  }

  process.exit(error ? 1 : 0);
};

export { logger, exitLog };
