import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AdminDocument, AdminSchema } from '../model/admin.model';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(AdminSchema.name) private adminModel: Model<AdminDocument>,
  ) {}

  addUser = async (req: any) => {
    try {
      const newUser = new this.adminModel(req);

      return newUser.save().then(() => {
        return { success: true, msg: 'Congratulation, New Admin is added!' };
      });
    } catch (err) {
      return { success: false, err };
    }
  };
}
