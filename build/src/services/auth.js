"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const utils_1 = require("../utils");
const entities_1 = require("../entities");
const model_1 = __importDefault(require("../model"));
class AuthService {
    static async register(request) {
        const { email, password } = request;
        try {
            const existingUser = await new model_1.default(entities_1.User).findOne({ where: { email } });
            if (existingUser) {
                throw new utils_1.ConflictException('An account with this email already exists');
            }
            const hashed = await utils_1.UtilService.hashPassword(password);
            const user = await new model_1.default(entities_1.User).insert({ email, password: hashed });
            const token = utils_1.UtilService.generateToken(user.id);
            delete user.password;
            return { user, token };
        }
        catch (error) {
            throw error;
        }
    }
    static async login(request) {
        const { email, password } = request;
        try {
            const user = await new model_1.default(entities_1.User).findOne({
                where: { email },
            });
            if (!user) {
                throw new utils_1.BadRequestException('Invalid login credentials');
            }
            const isValidPassword = utils_1.UtilService.comparePassword(password, user.password);
            if (!isValidPassword) {
                throw new utils_1.BadRequestException('Invalid login credentials');
            }
            delete user.password;
            const token = utils_1.UtilService.signJWT(user.id, user.email, user.role);
            return { user, token };
        }
        catch (error) {
            throw error;
        }
    }
    static async logOut() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.js.map