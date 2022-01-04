import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'}) // For Request body Example block
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'Password'}) // For Request body Example block
    readonly password: string;
}