import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppsDocument = AppsSchema & Document;

@Schema({ collection: 'apps' })
export class AppsSchema {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  cityOrRegion: string;

  @Prop()
  country: string;

  @Prop()
  lastHired: string;

  @Prop()
  lastPosition: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  resume: string;

  @Prop()
  motivationMessage: string;
}

export interface AppsInterface {
  _id: string;
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  country: string;
  lastHired: string;
  lastPosition: string;
  email: string;
  phone: string;
  resume: string;
  motivitationMessage: string;
}

export const Apps = SchemaFactory.createForClass(AppsSchema);
