import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, PostInterface, PostSchema } from '../model/post.model';

/**
 * Injectable
 */
@Injectable()
export class PostService {
  /**
   * Creates an instance of post service.
   * @param postModel
   */
  constructor(
    @InjectModel(PostSchema.name) private postModel: Model<PostDocument>,
  ) {}

  /**
   * Get item of post service
   */

  /**
   * Items get item
   * @returns
   */
  getItem = async () => {
    try {
      const item = await (
        await this.postModel.find().select('title time location')
      ).reverse();

      if (!item) return { success: true, msg: 'not found' };

      return { success: true, item };
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  /**
   * get once item
   * @param _id
   * @returns
   */

  /**
   * Param  of post service
   */
  getOnceItem = async (_id: string) => {
    try {
      return await this.postModel.findOne({ _id: _id }).then((result) => {
        return { success: true, result };
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };

  /**
   * Add item of post service
   */

  /**
   * Reqs add item
   * @param req
   * @returns
   */
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

  /**
   * delete item
   * @param _id
   * @returns
   */

  /**
   * Param  of post service
   */
  deleteItem = async (_id: string) => {
    try {
      return this.postModel.findByIdAndRemove({ _id: _id }).then(() => {
        return { success: true, msg: 'Congratulation, you delete post!' };
      });
    } catch (err) {
      return { success: false, msg: 'something is wrong.', err };
    }
  };
}
