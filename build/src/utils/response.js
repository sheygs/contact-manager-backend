"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundResponse = exports.failureResponse = exports.successResponse = void 0;
const lib_1 = __importStar(require("http-status/lib"));
const interfaces_1 = require("../interfaces");
const successResponse = (res, code = lib_1.OK, msg = lib_1.default[lib_1.OK], data) => {
    const response = {
        code: code,
        status: interfaces_1.STATUS.SUCCESS,
        message: msg,
        data: data ?? {},
    };
    return res.status(code).json(response);
};
exports.successResponse = successResponse;
const failureResponse = (error, res, code = lib_1.BAD_REQUEST) => {
    const response = {
        code,
        status: interfaces_1.STATUS.FAILURE,
        error: {
            id: Math.floor(Math.random() * 1000000000000).toString(),
            name: error.name,
            message: error.message,
            stack: error.stack,
        },
    };
    return res.status(code).send(response);
};
exports.failureResponse = failureResponse;
const notFoundResponse = (req, res) => {
    const notFoundError = {
        error: {
            code: lib_1.NOT_FOUND,
            status: interfaces_1.STATUS.FAILURE,
            message: lib_1.default[lib_1.NOT_FOUND],
            path: `🔍 - ${req.originalUrl}`,
        },
    };
    return res.status(lib_1.NOT_FOUND).json(notFoundError);
};
exports.notFoundResponse = notFoundResponse;
//# sourceMappingURL=response.js.map