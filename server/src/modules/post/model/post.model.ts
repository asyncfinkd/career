import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = PostSchema & Document;

/**
 * Schema
 */
@Schema({ collection: 'posts' })
export class PostSchema {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  time: string;
}

/**
 * Post interface
 */
export interface PostInterface {
  _id: string;
  title: string;
  description: string;
  location: string;
  time: string;
}

export const Post = SchemaFactory.createForClass(PostSchema);
