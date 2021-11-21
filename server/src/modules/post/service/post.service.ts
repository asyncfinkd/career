import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, PostSchema } from '../model/post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostSchema.name) private postModel: Model<PostDocument>,
  ) {}

  getItem = async () => {
    try {
      const item = await this.postModel.find();

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };
}
