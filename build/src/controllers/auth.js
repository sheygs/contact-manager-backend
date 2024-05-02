"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const utils_1 = require("../utils");
const http_status_1 = require("http-status");
const services_1 = require("../services");
const config_1 = require("../config");
class AuthController {
    static async register(req, res, next) {
        try {
            const response = await services_1.AuthService.register(req.body);
            res.cookie('jwt', response.token, {
                expires: new Date(Date.now() + +config_1.config.APP.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
            });
            (0, utils_1.successResponse)(res, http_status_1.CREATED, 'User Registered ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const response = await services_1.AuthService.login(req.body);
            res.cookie('jwt', response.token, {
                expires: new Date(Date.now() + Number(config_1.config.APP.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
            });
            (0, utils_1.successResponse)(res, http_status_1.OK, 'User logged in ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async logOut(_, res, next) {
        try {
            res.cookie('jwt', 'loggedout', {
                expires: new Date(Date.now() + 10 * 1000),
                httpOnly: true,
            });
            (0, utils_1.successResponse)(res, http_status_1.OK, 'User logged out ✅');
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.js.map