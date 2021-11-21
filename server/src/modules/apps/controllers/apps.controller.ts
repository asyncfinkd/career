import { Controller, Res, Get } from '@nestjs/common';
import { AppsService } from '../service/apps.service';

@Controller()
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get('get/apps')
  async getItems(@Res() res) {
    return res.json(await this.appsService.getItems());
  }
}
