import { Body, Controller, Post, Get, Res } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { AdminDto } from '../dto';
import { Auth } from 'src/utils/guards/jwt-auth.guard';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Auth()
  @Post('add/user')
  async addUser(@Body() req: AdminDto): Promise<any> {
    return this.adminService.addUser(req);
  }

  @Auth()
  @Get('get/users')
  async getUsers(@Res() res) {
    return res.json(await this.adminService.getUsers());
  }
}
