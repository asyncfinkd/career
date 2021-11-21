import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppsDocument, AppsInterface, AppsSchema } from '../model/apps.model';
import { Model } from 'mongoose';

@Injectable()
export class AppsService {
  constructor(
    @InjectModel(AppsSchema.name) private appsModel: Model<AppsDocument>,
  ) {}

  getItems = async () => {
    try {
      const item = await this.appsModel.find();

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

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
}
