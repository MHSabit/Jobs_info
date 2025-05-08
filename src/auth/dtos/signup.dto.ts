import { IsEmail, IsString } from "class-validator";

export class SignupDto {

    @IsEmail()
    @IsString()
    email : String;

    @IsString()
    password : String;

    @IsString()
    phone : String;
}