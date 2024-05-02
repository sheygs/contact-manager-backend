"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const utils_1 = require("../utils");
const http_status_1 = require("http-status");
const services_1 = require("../services");
class ContactController {
    static async createContact(req, res, next) {
        try {
            const response = await services_1.ContactService.createContact(req);
            (0, utils_1.successResponse)(res, http_status_1.CREATED, 'User Registered ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async getContacts(_, res, next) {
        try {
            const response = await services_1.ContactService.getContacts();
            (0, utils_1.successResponse)(res, http_status_1.OK, 'Contacts retrieved ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async getContact(req, res, next) {
        try {
            const response = await services_1.ContactService.getContactByID(req.params.contact_id);
            (0, utils_1.successResponse)(res, http_status_1.OK, 'contact retrieved ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async softDeleteContact(req, res, next) {
        try {
            const response = await services_1.ContactService.softDeleteContact(req.params.contact_id);
            (0, utils_1.successResponse)(res, http_status_1.NO_CONTENT, 'contact deleted ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
    static async updateContact(req, res, next) {
        try {
            const response = await services_1.ContactService.updateContact(req);
            (0, utils_1.successResponse)(res, http_status_1.OK, 'contact updated ✅', response);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=contact.js.map