import { dataSource } from './data-source';
import { logger } from '../utils';

export const connectDataSource = async () => {
  try {
    await dataSource.initialize();

    logger.info('Data source connected ✅');
  } catch (error) {
    logger.error(`Data source connection failed ❌ - ${JSON.stringify(error)}`);

    process.exit(1);
  }
};
