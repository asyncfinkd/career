import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { GetCurrentUserById } from 'src/utils';
import { Auth } from 'src/utils/guards/jwt-auth.guard';
import { AuthService } from '../service/auth.service';
import { TAuth } from '../types';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signinLocal(
    @Body() dto: TAuth,
  ): Promise<{ success: boolean; msg: string; access_token: string }> {
    return this.authService.signinLocal(dto);
  }

  @Auth()
  @Post('check/logged')
  checkLogged(@Res() res, @GetCurrentUserById() user: any) {
    res.json({ success: true, user });
  }
}
