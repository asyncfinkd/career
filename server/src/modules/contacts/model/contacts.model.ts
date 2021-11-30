import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactsDocument = ContactsSchema & Document;

@Schema({ collection: 'contacts' })
export class ContactsSchema {
  @Prop()
  email: string;

  @Prop()
  phone: string;
}

export const Contacts = SchemaFactory.createForClass(ContactsSchema);
