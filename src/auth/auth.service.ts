import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
    ) {}

    async signup(signuppayload) {
        
    }


    async login(loginpayload) {
        return this.usersService.findOneByEmail(loginpayload.email);
    }

}
