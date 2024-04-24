import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './stratagies/google.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule],
  providers: [GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
