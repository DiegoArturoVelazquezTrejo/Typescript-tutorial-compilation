import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
    // imports is an array of modules that this module depends on
    imports: [JwtModule.register({})],
    // controllers is an array of controllers that are part of this module
    controllers: [AuthController],
    // providers is an array of services that are part of this module
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}