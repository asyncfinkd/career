import { Controller, Get, Res, Post, Body, Delete } from '@nestjs/common';
import { PostDto, PostDeleteDto } from '../dto';
import { PostService } from '../service/post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('get/posts')
  async getItem(@Res() res) {
    return res.json(await this.postService.getItem());
  }

  @Post('add/post')
  addItem(@Body() req: PostDto) {
    return this.postService.addItem(req);
  }

  @Delete('delete/post')
  deleteItem(@Body() req: PostDeleteDto) {
    return this.postService.deleteItem(req._id);
  }
}
