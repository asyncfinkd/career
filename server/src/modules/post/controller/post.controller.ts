import { Controller, Get, Res } from '@nestjs/common';
import { PostService } from '../service/post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('get/posts')
  async getItem(@Res() res) {
    return res.json(await this.postService.getItem());
  }
}
