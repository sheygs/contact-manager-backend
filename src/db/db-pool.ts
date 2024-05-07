import { dataSource } from './data-source';
import { logger } from '../utils';

export const connectDataSource = async (): Promise<void> => {
  try {
    await dataSource.initialize();

    logger.info('Data source connection: success ✅');
  } catch (error) {
    logger.error(`Data source connection: failed ❌ - ${JSON.stringify(error)}`);

    process.exit(1);
  }
};
