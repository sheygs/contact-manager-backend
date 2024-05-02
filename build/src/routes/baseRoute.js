"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRoute = void 0;
const utils_1 = require("../utils");
const http_status_1 = require("http-status");
const config_1 = require("../config");
const baseRoute = (_, res) => {
    const transform = Object.entries(config_1.config.APP).map(([key, value]) => [
        key.toLowerCase(),
        value,
    ]);
    const data = Object.fromEntries(transform);
    (0, utils_1.successResponse)(res, http_status_1.OK, 'okay ✅', data);
};
exports.baseRoute = baseRoute;
//# sourceMappingURL=baseRoute.js.map