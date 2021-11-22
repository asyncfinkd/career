import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-guard.guard';

export function Auth() {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
