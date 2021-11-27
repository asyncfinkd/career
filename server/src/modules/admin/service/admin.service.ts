import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdminDocument, AdminSchema } from '../model/admin.model';
import { Model } from 'mongoose';

/**
 * Injectable
 */
@Injectable()
export class AdminService {
  /**
   * Creates an instance of admin service.
   * @param adminModel
   */
  constructor(
    @InjectModel(AdminSchema.name) private adminModel: Model<AdminDocument>,
  ) {}

  /**
   * Add user of admin service
   */

  /**
   * Reqs add user
   * @param req
   * @returns
   */
  addUser = async (req: any) => {
    try {
      const newUser = new this.adminModel(req);

      return newUser.save().then((doc) => {
        return {
          success: true,
          msg: 'Congratulation, New Admin is added!',
          item: doc._id,
        };
      });
    } catch (err) {
      return { success: false, err };
    }
  };

  /**
   * Get users of admin service
   */

  /**
   * Items get users
   * @returns
   */
  getUsers = async () => {
    try {
      const item = await this.adminModel.find();

      if (!item) return { success: true, msg: 'Item is not found.' };

      return { success: true, item };
    } catch (err) {
      return { success: false, err };
    }
  };

  /**
   * Edit item of admin service
   */

  /**
   * Reqs edit item
   * @param req
   * @returns
   */
  editItem = async (req: any) => {
    try {
      return this.adminModel.findById({ _id: req._id }).then((result) => {
        result.fullName = req.fullName;
        result.email = req.email;
        result.password = req.password;
        result.role = req.role;
        result.image = req.image;
      });
    } catch (err) {
      return { success: false, err };
    }
  };
}
