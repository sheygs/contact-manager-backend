"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const entities_1 = require("../entities");
const model_1 = __importDefault(require("../model"));
const config_1 = require("../config");
const utils_1 = require("../utils");
const protect = async (req, _, next) => {
    let token = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, config_1.config.APP.JWT_SECRET);
            const user = await new model_1.default(entities_1.User).findOne({
                where: { id: decoded._id },
            });
            req.user = user.id;
            next();
        }
        catch (error) {
            throw error;
        }
    }
    if (!token) {
        throw new utils_1.UnauthorizedException('Not authorized, no token');
    }
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map