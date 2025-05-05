import { IsEmail, IsEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {

    @IsEmail()
    @IsString()
    email : String;

    @IsString()
    password : String;

    @IsString()
    phone : String;

}