"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = require("./middlewares");
const config_1 = require("./config");
const db_1 = require("./db");
const createApp = () => {
    (0, db_1.connectDataSource)();
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use(express_1.default.json({ limit: '100mb' }));
    app.use(express_1.default.urlencoded({
        extended: true,
        limit: '100mb',
    }));
    if (config_1.config.APP.ENV !== 'test') {
        app.use((0, morgan_1.default)('dev'));
    }
    app.use(routes_1.default);
    (0, middlewares_1.defaultErrorHandler)(app);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map