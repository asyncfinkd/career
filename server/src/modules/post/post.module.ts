import { Module } from '@nestjs/common';
import { useMongooseConnect } from 'src/shared/use-mongoose';
import { PostController } from './controller/post.controller';
import { PostSchema, Post } from './model/post.model';
import { PostService } from './service/post.service';

@Module({
  imports: [useMongooseConnect(PostSchema, Post)],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
