"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const utils_1 = require("../utils");
const entities_1 = require("../entities");
const model_1 = __importDefault(require("../model"));
class ContactService {
    static async createContact(request) {
        try {
            const contact = await new model_1.default(entities_1.Contact).insert({
                user_id: request.user,
                ...request.body,
            });
            return contact;
        }
        catch (error) {
            throw error;
        }
    }
    static async getContacts() {
        try {
            return await new model_1.default(entities_1.Contact).findAll({});
        }
        catch (error) {
            throw error;
        }
    }
    static async getContactByID(contact_id) {
        try {
            const contact = await new model_1.default(entities_1.Contact).findOne({
                where: { id: contact_id },
            });
            if (!contact) {
                throw new utils_1.NotFoundException('contact not found');
            }
            return contact;
        }
        catch (error) {
            throw error;
        }
    }
    static async updateContact(req) {
        const { body, params: { contact_id }, } = req;
        try {
            const existingContact = await ContactService.getContactByID(contact_id);
            if (!existingContact) {
                throw new utils_1.NotFoundException('contact not found');
            }
            const updated = await new model_1.default(entities_1.Contact).update(existingContact.id, body);
            return updated;
        }
        catch (error) {
            throw error;
        }
    }
    static async softDeleteContact(contact_id) {
        try {
            const found = await ContactService.getContactByID(contact_id);
            if (!found) {
                throw new utils_1.NotFoundException('contact not found');
            }
            const contact = await new model_1.default(entities_1.Contact).remove(contact_id);
            return contact;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=contact.js.map