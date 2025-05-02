import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        ) {}

    createUser() {
        
    }


    getAllUsers() {
        return 'Hello World!';
    }


    getUserById() {
        return 'Hello World!';
    }

    deleteUser() {
        return 'Hello World!';
    }
}