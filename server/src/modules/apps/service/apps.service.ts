import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppsDocument, AppsInterface, AppsSchema } from '../model/apps.model';
import { Model } from 'mongoose';

/**
 * Injectable
 */
@Injectable()
export class AppsService {
  /**
   * Creates an instance of apps service.
   * @param appsModel
   */
  constructor(
    @InjectModel(AppsSchema.name) private appsModel: Model<AppsDocument>,
  ) {}

  /**
   * Get items of apps service
   */

  /**
   * Items get items
   * @returns
   */
  getItems = async () => {
    try {
      const item = await this.appsModel.find().populate('applicationId');

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  /**
   * Reqs add item
   * @param req
   * @returns
   */

  /**
   * Param  of apps service
   */
  addItem = async (req: AppsInterface) => {
    try {
      const newItem = new this.appsModel(req);

      return newItem.save().then(() => {
        return { success: true, msg: 'Congratulation, you add new app!' };
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  /**
   * Delete item of apps service
   */

  /**
   * delete item
   * @param _id
   * @returns
   */
  deleteItem = async (_id: string) => {
    try {
      return this.appsModel.findByIdAndRemove({ _id: _id }).then(() => {
        return { success: true, msg: 'Congratulation, you delete app!' };
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };
}
