import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../utils';
import { OK, CREATED, NO_CONTENT } from 'http-status';
import { ContactService } from '../services';

class ContactController {
  static async createContact(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ContactService.createContact(req);

      successResponse<any>(res, CREATED, 'User Registered ✅', response);
    } catch (error) {
      next(error);
    }
  }

  static async getContacts(_: Request, res: Response, next: NextFunction) {
    try {
      const response = await ContactService.getContacts();

      successResponse<any>(res, OK, 'Contacts retrieved ✅', response);
    } catch (error) {
      next(error);
    }
  }

  static async getContact(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ContactService.getContactByID(req.params.contact_id);

      successResponse<any>(res, OK, 'contact retrieved ✅', response);
    } catch (error) {
      next(error);
    }
  }

  static async softDeleteContact(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ContactService.softDeleteContact(req.params.contact_id);

      successResponse<any>(res, NO_CONTENT, 'contact deleted ✅', response);
    } catch (error) {
      next(error);
    }
  }

  static async updateContact(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ContactService.updateContact(req);

      successResponse<any>(res, OK, 'contact updated ✅', response);
    } catch (error) {
      next(error);
    }
  }
}

export { ContactController };
