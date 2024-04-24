import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { GoogleOAuthGuard } from './guards/googleAuth.guard';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('/google')
  @UseGuards(GoogleOAuthGuard)
  async googleLogin(): Promise<void> {}

  @Get('/google/calback')
  @UseGuards(GoogleOAuthGuard)
  async googleLoginCallback(@Req() req) {
    const user = req.user;
    return {
      user: user,
      message: 'Google login successful',
    };
  }
}
