import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
    ) {}

    async signup(signuppayload) {
        const CreateUser = await this.usersService.createUser(signuppayload);
        if (!CreateUser) {
            return 'Failed to create user';
        }
        return CreateUser;
    }


    async login(loginpayload) {
        // return this.usersService.findOneByEmail(loginpayload.email);
        return null;
    }

}
