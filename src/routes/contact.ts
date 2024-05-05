import { Router } from 'express';
import { ContactController } from '../controllers';
import { RequestPath } from '../interfaces';
import { verifyAuthToken } from '../middlewares';
import {
  contactIDSchema,
  contactSchema,
  updateContactSchema,
  validateRequest,
} from '../utils';

const contactRouter: Router = Router();

contactRouter
  .route('/')
  .post(
    validateRequest(contactSchema, RequestPath.BODY),
    verifyAuthToken,
    ContactController.createContact,
  );

contactRouter.get('/', verifyAuthToken, ContactController.getContacts);

contactRouter.get(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  verifyAuthToken,
  ContactController.getContact,
);

contactRouter.patch(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  validateRequest(updateContactSchema, RequestPath.BODY),
  verifyAuthToken,
  ContactController.updateContact,
);

contactRouter.delete(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  verifyAuthToken,
  ContactController.deleteContact,
);

export default contactRouter;
