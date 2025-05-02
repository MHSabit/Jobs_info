import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    createUser() {
        return 'Hello World!';
    }

    @Get()
    getAllUsers() {
        return 'Hello World!';
    }


    @Get(':id')
    getUserById() {
        return 'Hello World!';
    }


    @Delete(':id')      
    deleteUser() {
        return 'Hello World!';
    }
}
