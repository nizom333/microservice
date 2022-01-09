import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'}) // For Request body Example block
    @IsString({message: 'Field should be string'})
    @IsEmail({}, {message: 'In correct email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'}) // For Request body Example block
    @IsString({message: 'Field should be string'})
    @Length(4, 16, {message: 'Password should be min 4 symbols max 16 symbols'})
    readonly password: string;
}