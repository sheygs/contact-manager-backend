"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDataSource = void 0;
const data_source_1 = require("./data-source");
const utils_1 = require("../utils");
const connectDataSource = async () => {
    try {
        await data_source_1.dataSource.initialize();
        utils_1.logger.info('Data source connected ✅');
    }
    catch (error) {
        utils_1.logger.info(`Data source connection failed ❌ - ${JSON.stringify(error)}`);
        process.exit(1);
    }
};
exports.connectDataSource = connectDataSource;
//# sourceMappingURL=db-pool.js.map