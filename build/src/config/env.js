"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const package_json_1 = __importDefault(require("../../package.json"));
require("dotenv/config");
const interfaces_1 = require("../interfaces");
const { TEST, DEVELOPMENT } = interfaces_1.ENV;
exports.config = {
    APP: {
        NAME: package_json_1.default.name,
        VERSION: package_json_1.default.version,
        VER: `v${package_json_1.default.version[0]}`,
        DESCRIPTION: package_json_1.default.description,
        AUTHORS: package_json_1.default.author,
        HOST: process.env.APP_HOST,
        BASE_URL: process.env.BASE_URL,
        PORT: process.env.NODE_ENV === TEST ? 8080 : process.env.PORT ?? 80,
        ENV: process.env.NODE_ENV ?? DEVELOPMENT,
        JWT_SECRET: process.env.JWT_SECRET ?? '',
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '',
        JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN ?? '',
    },
    DB: {
        USER: process.env.PG_USER ?? 'postgres',
        PASSWORD: process.env.PG_PASSWORD ?? '',
        PG_PORT: process.env.PG_PORT ?? 5432,
        HOST: process.env.PG_HOST ?? 'localhost',
        DATABASE: process.env.PG_DATABASE ?? '',
    },
};
//# sourceMappingURL=env.js.map