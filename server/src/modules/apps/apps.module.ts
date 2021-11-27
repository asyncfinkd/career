import { Module } from '@nestjs/common';
import { AppsController } from 'src/modules/apps/controllers/apps.controller';
import { AppsService } from 'src/modules/apps/service/apps.service';
import { useMongooseConnect } from 'src/shared/use-mongoose';
import { Apps, AppsSchema } from './model/apps.model';

/**
 * Module
 */
@Module({
  imports: [useMongooseConnect(AppsSchema, Apps)],
  controllers: [AppsController],
  providers: [AppsService],
})
export class AppsModule {}
