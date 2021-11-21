import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, PostInterface, PostSchema } from '../model/post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostSchema.name) private postModel: Model<PostDocument>,
  ) {}

  getItem = async () => {
    try {
      const item = await this.postModel.find().select('title time location');

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  getOnceItem = async (_id: string) => {
    try {
      return await this.postModel.findOne({ _id: _id }).then((result) => {
        return { success: true, result };
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  addItem = async (req: PostInterface) => {
    try {
      const newItem = new this.postModel(req);

      return newItem.save().then(() => {
        return { success: true, msg: 'Congratulation, you add new post!' };
      });
    } catch (error) {
      return { success: false, msg: 'something is wrong.', error };
    }
  };

  deleteItem = (_id: string) => {
    return this.postModel.findByIdAndRemove({ _id: _id }).then(() => {
      return { success: true, msg: 'Congratulation, you delete post!' };
    });
  };
}
