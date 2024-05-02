"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const utils_1 = require("../utils");
const handleGlobalError = (error, _, res, _next) => {
    (0, utils_1.failureResponse)(error, res, error.code);
};
const defaultErrorHandler = (app) => app.use(handleGlobalError);
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=error.js.map