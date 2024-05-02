"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseRoute_1 = require("./baseRoute");
const utils_1 = require("../utils");
const auth_1 = __importDefault(require("./auth"));
const contact_1 = __importDefault(require("./contact"));
const router = (0, express_1.Router)();
router.get('/', baseRoute_1.baseRoute);
router.use('/api/v1/auth', auth_1.default);
router.use('/api/v1/contacts', contact_1.default);
router.all('*', utils_1.notFoundResponse);
exports.default = router;
//# sourceMappingURL=index.js.map