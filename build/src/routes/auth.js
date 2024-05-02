"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const utils_1 = require("../utils");
const interfaces_1 = require("../interfaces");
const authRouter = (0, express_1.Router)();
authRouter
    .route('/signup')
    .post((0, utils_1.validateRequest)(utils_1.authSchema, interfaces_1.RequestPath.BODY), controllers_1.AuthController.register);
authRouter.post('/login', (0, utils_1.validateRequest)(utils_1.authSchema, interfaces_1.RequestPath.BODY), controllers_1.AuthController.login);
authRouter.get('/logout', controllers_1.AuthController.logOut);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map