import { dataSource } from './data-source';
import { logger } from '../utils';

export const connectDataSource = async (): Promise<void> => {
  try {
    await dataSource.initialize();

    logger.info('DB connection: success ✅');
  } catch (error) {
    logger.error(`DB connection failed: ${JSON.stringify(error)}`);

    process.exit(1);
  }
};
