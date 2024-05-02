"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactSchema = exports.contactIDSchema = exports.contactSchema = exports.authSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
exports.authSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
exports.contactSchema = joi_1.default.object({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    phone_number: joi_1.default.string().min(11).required(),
});
exports.contactIDSchema = joi_1.default.object({
    contact_id: joi_1.default.string().required().regex(uuidRegex).message('contact_id invalid'),
});
exports.updateContactSchema = joi_1.default.object({
    first_name: joi_1.default.string().optional(),
    last_name: joi_1.default.string().optional(),
    phone_number: joi_1.default.string().min(11).optional(),
});
//# sourceMappingURL=request.js.map