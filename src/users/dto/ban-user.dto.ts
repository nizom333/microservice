import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
     @ApiProperty({example: '1', description: 'User Id'}) // For Request body Example block
     readonly userId: number;

     @ApiProperty({example: 'Banned user by Admin', description: 'Ban Reason'}) // For Request body Example block
     readonly banReason: string;
}