import { Controller, Res, Get, Body, Delete, Post } from '@nestjs/common';
import { AppsDeleteDto } from '../dto';
import { AppsService } from '../service/apps.service';
import { TAppsPromiseInterface } from '../types';

/**
 * Controller
 */
@Controller()
export class AppsController {
  /**
   * Creates an instance of apps controller.
   * @param appsService
   */
  constructor(private readonly appsService: AppsService) {}

  /**
   * Gets apps controller
   * @param res
   * @returns items
   */
  @Get('get/apps')
  async getItems(@Res() res): Promise<TAppsPromiseInterface> {
    return res.json(await this.appsService.getItems());
  }

  /**
   * Posts apps controller
   * @param req
   * @returns item
   */
  @Post('add/apps')
  addItem(@Body() req): Promise<{ success: boolean; msg: string }> {
    return this.appsService.addItem(req);
  }

  /**
   * Deletes apps controller
   * @param req
   * @returns
   */
  @Delete('delete/app')
  async deleteItem(@Body() req: AppsDeleteDto) {
    return this.appsService.deleteItem(req._id);
  }
}
