import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor() {}

    // @Post('login')
    // login(@Body() loginDto: LoginDto) {
    //     return this.authService.login(loginDto);
    // }

    // @Post('register')
    // register(@Body() registerDto: RegisterDto) {
    //     return this.authService.register(registerDto);
    // }


    // @Post('signup')
    // signup(@Body() registerDto: RegisterDto) {
    //     return this.authService.signup(registerDto);
    // }


    @Get()
    getHello() {
        return 'Hello World';
    }

}
