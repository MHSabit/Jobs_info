import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUserDto';
import { UpdateUserDto } from './dtos/updateUserDto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Patch(':id')
    updateUser(@Body() user: UpdateUserDto, @Param('id') id: number) {
    return this.userService.updateUser(id, user);
    }

    @Delete(':id')      
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }
}
