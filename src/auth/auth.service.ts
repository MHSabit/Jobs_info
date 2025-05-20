import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/logIn.dto';
import { JwtModule, JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async signup(signuppayload) {
        const CreateUser = await this.usersService.createUser(signuppayload);
        if (!CreateUser) {
            return 'Failed to create user';
        }
        return CreateUser;
    }


    async login(loginpayload: LoginDto) {
        // return this.usersService.findOneByEmail(loginpayload.email);
        const user = await this.userRepository.findOneBy({ email: loginpayload.email });
        console.log(user);
        if (!user) {
            return 'User not found';
        }
        const password = loginpayload.password;
        const userPasscode = user.password.toString();
        const payload = { email: user.email, sub: user.id};


        if (await bcrypt.compare(password, userPasscode)) {
            const acccessToken = this.jwtService.sign(payload, { 
                secret: 'Jwt_access_secrect', // use process.env.JWT_SECRET in production
                expiresIn: '1h' 
            });

            const refreshToken = this.jwtService.sign(payload, { 
                secret: 'Jwt_refresh_secrect', // use process.env.JWT_SECRET in production
                expiresIn: '7d' 
            });
            console.log(acccessToken);
            return { 
                user,
                accessToken: acccessToken, 
                refreshToken: refreshToken };
        }
        return 'Invalid credentials';
    }
}
