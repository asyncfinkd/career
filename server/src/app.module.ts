import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { AppsModule } from './modules/apps/apps.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { PostModule } from './modules/post/post.module';

/**
 * Module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AdminModule,
    PostModule,
    AppsModule,
    AuthModule,
    ContactsModule,
    MongooseModule.forRoot(process.env.MONGO),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
