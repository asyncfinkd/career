import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { AdminDto } from '../dto';

@Controller('api')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('add/user')
  async addUser(@Body() req: AdminDto): Promise<any> {
    return this.adminService.addUser(req);
  }
}
