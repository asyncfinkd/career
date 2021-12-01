import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactsDocument, ContactsSchema } from '../model/contacts.model';

/**
 * Injectable
 */
@Injectable()
export class ContactsService {
  /**
   * Creates an instance of contacts service.
   * @param contactsModel
   */
  constructor(
    @InjectModel(ContactsSchema.name)
    private contactsModel: Model<ContactsDocument>,
  ) {}

  /**
   * Get item of contacts service
   */

  /**
   * Roles get item
   * @param role
   * @returns
   */
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

  /**
   * Edit email of contacts service
   */

  /**
   * edit email
   * @param _id
   * @param email
   * @returns
   */
  editEmail = async (_id: string, email: string) => {
    try {
      return this.contactsModel.findById({ _id: _id }).then((result) => {
        result.email = email;

        result.save().then(() => {
          return {
            success: true,
            msg: 'Congratulation, you edit email successfuly',
          };
        });
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  /**
   * Edit phone of contacts service
   */

  /**
   * edit phone
   * @param _id
   * @param phone
   * @returns
   */
  editPhone = async (_id: string, phone: string) => {
    try {
      return this.contactsModel.findById({ _id: _id }).then((result) => {
        result.phone = phone;

        result.save().then(() => {
          return {
            success: true,
            msg: 'Congratulation, you edit phone successfuly',
          };
        });
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };
}
