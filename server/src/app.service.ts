import { Injectable } from '@nestjs/common';

/**
 * Injectable
 */
@Injectable()
export class AppService {
  /**
   * Gets hello
   * @returns hello
   */
  getHello(): string {
    return 'Hello World!';
  }
}
