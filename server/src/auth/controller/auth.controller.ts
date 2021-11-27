import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { GetCurrentUserById } from 'src/utils';
import { Auth } from 'src/utils/guards/jwt-auth.guard';
import { AuthService } from '../service/auth.service';
import { TAuth } from '../types';

/**
 * Controller
 */
@Controller()
export class AuthController {
  /**
   * Creates an instance of auth controller.
   * @param authService
   */
  constructor(private authService: AuthService) {}

  /**
   * Posts auth controller
   * @param dto
   * @returns local
   */
  @Post('login')
  signinLocal(
    @Body() dto: TAuth,
  ): Promise<{ success: boolean; msg: string; access_token: string }> {
    return this.authService.signinLocal(dto);
  }

  /**
   * Auths auth controller
   * @param res
   * @param user
   */
  @Auth()
  @Post('check/logged')
  checkLogged(@Res() res, @GetCurrentUserById() user: any) {
    res.json({ success: true, user });
  }
}
