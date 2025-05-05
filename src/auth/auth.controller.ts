import { Body, Controller, Get, Post } from '@nestjs/common';
import { Sign } from 'crypto';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';



@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }


    @Post('signup')
    signup(@Body() signuppayload: SignupDto) {
        return this.authService.signup(signuppayload);
    }


    @Get()
    getHello() {
        return 'Hello World';
    }

}
