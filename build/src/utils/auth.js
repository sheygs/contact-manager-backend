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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const { APP: { JWT_EXPIRES_IN, JWT_SECRET }, } = config_1.config;
class UtilService {
    static saltOrRounds = 10;
    static async hashPassword(password) {
        return await bcrypt.hash(password, this.saltOrRounds);
    }
    static async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
    static generateToken(userID) {
        return jsonwebtoken_1.default.sign({
            id: userID,
        }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
    }
    static signJWT(userID, email, role) {
        return jsonwebtoken_1.default.sign({
            _id: userID,
            email,
            role,
        }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
    }
}
exports.UtilService = UtilService;
//# sourceMappingURL=auth.js.map