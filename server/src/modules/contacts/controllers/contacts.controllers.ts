import { Controller, Get, Param, Res } from '@nestjs/common';
import { ContactsService } from '../service/contacts.service';

@Controller()
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('get/contacts/:role')
  async getContacts(@Res() res, @Param('role') role: string) {
    res.json(await this.contactsService.getItem(role));
  }
}
