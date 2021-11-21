import { Controller, Res, Get } from '@nestjs/common';
import { AppsService } from '../service/apps.service';
import { TAppsPromiseInterface } from '../types';

@Controller()
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get('get/apps')
  async getItems(@Res() res): Promise<TAppsPromiseInterface> {
    return res.json(await this.appsService.getItems());
  }
}
