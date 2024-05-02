"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const utils_1 = require("../utils");
const interfaces_1 = require("../interfaces");
const middlewares_1 = require("../middlewares");
const contactRouter = (0, express_1.Router)();
contactRouter
    .route('/')
    .post((0, utils_1.validateRequest)(utils_1.contactSchema, interfaces_1.RequestPath.BODY), middlewares_1.protect, controllers_1.ContactController.createContact);
contactRouter.get('/', middlewares_1.protect, controllers_1.ContactController.getContacts);
contactRouter.get('/:contact_id', (0, utils_1.validateRequest)(utils_1.contactIDSchema, interfaces_1.RequestPath.PARAMS), middlewares_1.protect, controllers_1.ContactController.getContact);
contactRouter.patch('/:contact_id', (0, utils_1.validateRequest)(utils_1.contactIDSchema, interfaces_1.RequestPath.PARAMS), (0, utils_1.validateRequest)(utils_1.updateContactSchema, interfaces_1.RequestPath.BODY), controllers_1.ContactController.updateContact);
contactRouter.delete('/:contact_id', (0, utils_1.validateRequest)(utils_1.contactIDSchema, interfaces_1.RequestPath.PARAMS), middlewares_1.protect, controllers_1.ContactController.softDeleteContact);
exports.default = contactRouter;
//# sourceMappingURL=contact.js.map