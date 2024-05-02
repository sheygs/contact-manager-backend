"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const env_1 = require("../config/env");
const { DB: { HOST, PG_PORT, PASSWORD, USER, DATABASE }, } = env_1.config;
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: HOST,
    port: +PG_PORT,
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    entities: ['build/src/entities/*.js'],
    logging: env_1.config.APP.ENV === 'development',
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map