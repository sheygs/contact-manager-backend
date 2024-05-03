import { Router } from 'express';
import { ContactController } from '../controllers';
import {
  contactIDSchema,
  contactSchema,
  updateContactSchema,
  validateRequest,
} from '../utils';
import { RequestPath } from '../interfaces';
import { protect } from '../middlewares';

const contactRouter: Router = Router();

contactRouter
  .route('/')
  .post(
    validateRequest(contactSchema, RequestPath.BODY),
    protect,
    ContactController.createContact,
  );

contactRouter.get('/', protect, ContactController.getContacts);

contactRouter.get(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  protect,
  ContactController.getContact,
);

contactRouter.patch(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  validateRequest(updateContactSchema, RequestPath.BODY),
  protect,
  ContactController.updateContact,
);

contactRouter.delete(
  '/:contact_id',
  validateRequest(contactIDSchema, RequestPath.PARAMS),
  protect,
  ContactController.deleteContact,
);

export default contactRouter;
