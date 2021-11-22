import { Body, Controller, Post, Put, Delete } from '@nestjs/common';
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
}
