import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ContactsService } from '../service/contacts.service';

/**
 * Controller
 */
@Controller()
export class ContactsController {
  /**
   * Creates an instance of contacts controller.
   * @param contactsService
   */
  constructor(private readonly contactsService: ContactsService) {}

  /**
   * Gets contacts controller
   * @param res
   * @param role
   */
  @Get('get/contacts/:role')
  async getContacts(@Res() res, @Param('role') role: string) {
    res.json(await this.contactsService.getItem(role));
  }

  /**
   * Posts contacts controller
   * @param req
   * @returns
   */
  @Post('edit/contacts/by/email')
  async editEmail(@Body() req) {
    return this.contactsService.editEmail(req._id, req.email);
  }

  /**
   * Posts contacts controller
   * @param req
   * @returns
   */
  @Post('edit/contacts/by/phone')
  async editPhone(@Body() req) {
    return this.contactsService.editPhone(req._id, req.phone);
  }
}
