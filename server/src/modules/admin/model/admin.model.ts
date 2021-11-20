import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type AdminDocument = AdminSchema & Document;

@Schema({ collection: 'admins' })
export class AdminSchema {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  image: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'posts',
  })
  addedPosts: { type: string }[];

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'admins',
  })
  addedAdmins: { type: string }[];
}

export const Admin = SchemaFactory.createForClass(AdminSchema);
