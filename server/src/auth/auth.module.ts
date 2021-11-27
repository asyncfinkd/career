import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AdminSchema, Admin } from 'src/modules/admin/model/admin.model';
import { useMongooseConnect } from 'src/shared/use-mongoose';

/**
 * Module
 */
@Module({
  imports: [
    useMongooseConnect(AdminSchema, Admin),
    JwtModule.register({
      secret: 'super-secret-cat',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
