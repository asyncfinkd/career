import { Module } from '@nestjs/common';
import { useMongooseConnect } from 'src/shared/use-mongoose';
import { ContactsController } from './controllers/contacts.controllers';
import { Contacts, ContactsSchema } from './model/contacts.model';
import { ContactsService } from './service/contacts.service';

@Module({
  imports: [useMongooseConnect(ContactsSchema, Contacts)],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
