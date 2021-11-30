import { Body, Controller, Post, Get, Res, Delete } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { AdminDeleteDto, AdminDto, AdminEditDto } from '../dto';
import { Auth } from 'src/utils/guards/jwt-auth.guard';

/**
 * Controller
 */
@Controller()
export class AdminController {
  /**
   * Creates an instance of admin controller.
   * @param adminService
   */
  constructor(private readonly adminService: AdminService) {}

  /**
   * Auths admin controller
   * @param req
   * @returns user
   */
  @Auth()
  @Post('add/user')
  async addUser(@Body() req: AdminDto): Promise<any> {
    return this.adminService.addUser(req);
  }

  /**
   * Auths admin controller
   * @param res
   * @returns
   */
  @Auth()
  @Get('get/users')
  async getUsers(@Res() res) {
    return res.json(await this.adminService.getUsers());
  }

  /**
   * Auths admin controller
   * @param req
   * @returns
   */
  @Auth()
  @Post('edit/users')
  editUsers(@Body() req: AdminEditDto) {
    return this.adminService.editItem(req);
  }

  /**
   * Auths admin controller
   * @param req
   * @returns
   */
  @Auth()
  @Post('delete/users')
  deleteUser(@Body() req: AdminDeleteDto) {
    return this.adminService.deleteItem(req._id);
  }
}
