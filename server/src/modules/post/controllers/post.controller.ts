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
import { OPostInterface, TPostInterface } from '../types';

/**
 * Controller
 */
@Controller()
export class PostController {
  /**
   * Creates an instance of post controller.
   * @param postService
   */
  constructor(private readonly postService: PostService) {}

  /**
   * Gets post controller
   * @param res
   * @returns item
   */
  @Get('get/posts')
  async getItem(@Res() res): Promise<TPostInterface> {
    return res.json(await this.postService.getItem());
  }

  /**
   * Gets post controller
   * @param _id
   * @returns once item
   */
  @Get('get/post/:_id')
  getOnceItem(@Param('_id') _id: string): Promise<OPostInterface> {
    return this.postService.getOnceItem(_id);
  }

  /**
   * Posts post controller
   * @param req
   * @returns item
   */
  @Post('add/post')
  addItem(@Body() req: PostDto): Promise<{ success: boolean; msg: string }> {
    return this.postService.addItem(req);
  }

  /**
   * Deletes post controller
   * @param req
   * @returns item
   */
  @Delete('delete/post')
  deleteItem(
    @Body() req: PostDeleteDto,
  ): Promise<{ success: boolean; msg: string }> {
    return this.postService.deleteItem(req._id);
  }
}
