import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = PostSchema & Document;

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

export const Post = SchemaFactory.createForClass(PostSchema);
