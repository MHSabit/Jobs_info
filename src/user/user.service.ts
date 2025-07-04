import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
const bcrypt = require('bcrypt');


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        ) {}

    async createUser(user: CreateUserDto) {
       try {
            const existingUser = await this.userRepository.findOneBy({ email: user.email });
            if (existingUser) {
                return 'User already exists';
            }
            const passcode = user.password;
            const hashedPasscode = await bcrypt.hash(passcode, 10);

            let newUser = {
                ...user,
                password: hashedPasscode,
            };
            newUser = this.userRepository.create(newUser);
            return this.userRepository.save(newUser);
        }
        catch (error) {
            console.log(error);
            throw new BadRequestException({
            message: 'Failed to create user',
            error: error.message,
          });
        }
    }

    async updateUser(id: number, user: UpdateUserDto) {
        try {
            const updateUser = this.userRepository.update(id, user);
            return updateUser;
        }
        catch (error) {
            console.log(error);
            throw new BadRequestException({
                message: 'Failed to update user',
                error: error.message,
            });
        }
        
    }


    async getAllUsers() {
        return  await this.userRepository.find();
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            return `user not found given user ID : ${id}`;
        }
        return user;
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            return `user not found given user ID : ${id}`;
        }
        return this.userRepository.delete(id);
        
    }
}