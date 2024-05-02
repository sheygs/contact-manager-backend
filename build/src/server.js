"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = require("http");
const config_1 = require("./config");
const utils_1 = require("./utils");
const { APP: { ENV, PORT }, } = config_1.config;
const startServer = (app) => {
    const httpServer = (0, http_1.createServer)(app);
    process
        .on('SIGINT', () => (0, utils_1.exitLog)(null, 'SIGINT'))
        .on('SIGQUIT', () => (0, utils_1.exitLog)(null, 'SIGQUIT'))
        .on('SIGTERM', () => (0, utils_1.exitLog)(null, 'SIGTERM'))
        .on('uncaughtException', (error) => (0, utils_1.exitLog)(error, 'uncaughtException'))
        .on('beforeExit', () => (0, utils_1.exitLog)(null, 'beforeExit'))
        .on('exit', () => (0, utils_1.exitLog)(null, 'exit'));
    return httpServer.listen({ port: PORT }, () => {
        process.stdout.write(`⚙️ Env: ${ENV}\n`);
        process.stdout.write(`⏱ Started on: ${Date.now()}\n`);
        process.stdout.write(`🚀 hux-api server ready at http://localhost:${PORT}\n`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map