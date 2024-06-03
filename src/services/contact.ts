import { NotFoundException, UnauthorizedException } from '../utils';
import { Contact, UniversalModel } from '../db';
import { Request as Req } from 'express';

class ContactService {
  static async createContact(request: Req): Promise<any> {
    try {
      const contact = await new UniversalModel(Contact).insert({
        user_id: request.user,
        ...request.body,
      });
      return contact;
    } catch (error) {
      throw error;
    }
  }

  static async getContacts(req: Req): Promise<any[]> {
    const { user } = req;

    try {
      return await new UniversalModel(Contact).findAll({
        where: {
          user_id: user,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getContactByID(contact_id: string) {
    try {
      const contact = await new UniversalModel(Contact).findOne({
        where: { id: contact_id },
      });

      if (!contact) {
        throw new NotFoundException('contact not found');
      }

      return contact;
    } catch (error) {
      throw error;
    }
  }

  static async updateContact(req: Req): Promise<void> {
    const {
      user,
      body,
      params: { contact_id },
    } = req;

    try {
      const existingContact = await ContactService.getContactByID(contact_id);

      if (!existingContact) {
        throw new NotFoundException('contact not found');
      }

      if (user.toString() !== existingContact.user_id.toString()) {
        throw new UnauthorizedException("You can't edit other people's contacts");
      }

      const updated = await new UniversalModel(Contact).update(
        existingContact.id,
        body,
      );

      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteContact(req: Req): Promise<any[]> {
    const {
      user,
      params: { contact_id },
    } = req;

    try {
      const existingContact = await ContactService.getContactByID(contact_id);

      if (!existingContact) {
        throw new NotFoundException('contact not found');
      }

      if (user.toString() !== existingContact.user_id.toString()) {
        throw new UnauthorizedException("You can't delete other people's contacts");
      }

      await new UniversalModel(Contact).remove(contact_id);

      return await new UniversalModel(Contact).findAll({
        where: {
          user_id: user,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export { ContactService };
