import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { PostDto, PostDeleteDto } from '../dto';
import { PostService } from '../service/post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('get/posts')
  async getItem(@Res() res) {
    return res.json(await this.postService.getItem());
  }

  @Get('get/post/:_id')
  getOnceItem(@Param('_id') _id: string) {
    return this.postService.getOnceItem(_id);
  }

  @Post('add/post')
  addItem(@Body() req: PostDto): Promise<{ success: boolean; msg: string }> {
    return this.postService.addItem(req);
  }

  @Delete('delete/post')
  deleteItem(@Body() req: PostDeleteDto) {
    return this.postService.deleteItem(req._id);
  }
}
