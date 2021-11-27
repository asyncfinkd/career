import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller
 */
@Controller()
export class AppController {
  /**
   * Creates an instance of app controller.
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Gets app controller
   * @returns hello
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
