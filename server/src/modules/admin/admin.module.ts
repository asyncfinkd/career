import { Module } from '@nestjs/common';
import { useMongooseConnect } from 'src/shared/use-mongoose';
import { AdminController } from './controllers/admin.controller';
import { Admin, AdminSchema } from './model/admin.model';
import { AdminService } from './service/admin.service';

/**
 * Module
 */
@Module({
  imports: [useMongooseConnect(AdminSchema, Admin)],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
