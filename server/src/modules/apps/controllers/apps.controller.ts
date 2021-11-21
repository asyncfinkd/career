import { Controller, Res, Get, Body, Delete } from '@nestjs/common';
import { AppsDeleteDto } from '../dto';
import { AppsService } from '../service/apps.service';
import { TAppsPromiseInterface } from '../types';

@Controller()
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get('get/apps')
  async getItems(@Res() res): Promise<TAppsPromiseInterface> {
    return res.json(await this.appsService.getItems());
  }

  @Delete('delete/app')
  async deleteItem(@Body() req: AppsDeleteDto) {
    return this.appsService.deleteItem(req._id);
  }
}
