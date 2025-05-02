import { IsEmail, IsEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    
    @MinLength(3)
    name : String;

    @MinLength(3)
    @MaxLength(10)
    username : String;

    @IsEmail()
    @IsString()
    email : String;

    @IsString()
    address : String;

    @IsString()
    password : String;

    @IsString()
    phone : String;

}