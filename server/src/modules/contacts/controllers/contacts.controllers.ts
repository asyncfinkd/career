import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ContactsService } from '../service/contacts.service';

@Controller()
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('get/contacts/:role')
  async getContacts(@Res() res, @Param('role') role: string) {
    res.json(await this.contactsService.getItem(role));
  }

  @Post('edit/user/by/email')
  async editEmail(@Body() req) {
    return this.contactsService.editEmail(req.email);
  }
}
