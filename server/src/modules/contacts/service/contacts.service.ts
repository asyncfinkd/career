import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactsDocument, ContactsSchema } from '../model/contacts.model';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(ContactsSchema.name)
    private contactsModel: Model<ContactsDocument>,
  ) {}

  getItem = async (role: string) => {
    try {
      const item = await this.contactsModel
        .find()
        .select(role == 'user' && '-_id');

      if (!item) return { success: true, msg: 'not found' };

      return {
        success: true,
        msg: 'Congratulation, contacts is found!',
        item: item[0],
      };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };
}
