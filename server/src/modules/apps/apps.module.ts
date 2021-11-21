import { Module } from '@nestjs/common';
import { AppsController } from 'src/modules/apps/controllers/apps.controller';
import { AppsService } from 'src/modules/apps/service/apps.service';

@Module({
  imports: [],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
