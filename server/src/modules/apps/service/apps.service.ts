import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppsDocument, AppsSchema } from '../model/apps.model';
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
}
