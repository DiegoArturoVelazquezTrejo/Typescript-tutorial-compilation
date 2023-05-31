import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

// Body allows us to access the request body

@Post('signup')
signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
}

// HttpCode allows us to set the response status code
@HttpCode(HttpStatus.OK)
// Req allows us to access the request object
@Post('signin')
// We use the @Body decorator to access the request body
signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
    }
}