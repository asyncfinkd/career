import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = AdminSchema & Document;

/**
 * Schema
 */
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
}

export const Admin = SchemaFactory.createForClass(AdminSchema);
