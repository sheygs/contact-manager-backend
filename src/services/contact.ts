// import { BadRequestException, ConflictException, UtilService } from '../utils';
import { NotFoundException } from '../utils';
import { Contact } from '../entities';
import UniversalModel from '../model';
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

  static async getContacts(): Promise<any[]> {
    try {
      return await new UniversalModel(Contact).findAll({});
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
      body,
      params: { contact_id },
    } = req;

    try {
      const existingContact = await ContactService.getContactByID(contact_id);

      if (!existingContact) {
        throw new NotFoundException('contact not found');
      }

      const updated = await new UniversalModel(Contact).update(existingContact.id, body);

      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async softDeleteContact(contact_id: string): Promise<void> {
    try {
      const found = await ContactService.getContactByID(contact_id);

      if (!found) {
        throw new NotFoundException('contact not found');
      }

      const contact = await new UniversalModel(Contact).remove(contact_id);

      return contact;
    } catch (error) {
      throw error;
    }
  }
}

export { ContactService };
