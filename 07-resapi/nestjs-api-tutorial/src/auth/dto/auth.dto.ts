import {
    IsEmail,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class AuthDto {
    // From the class validator package, we can use decorators to validate the data that is coming in.
    @IsEmail()
    @IsNotEmpty()
    email: string;

    // The password is a string and it cannot be empty.
    @IsString()
    @IsNotEmpty()
    password: string;
}