import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
     @ApiProperty({example: 'ADMIN', description: 'Role'}) // For Request body Example block
     readonly value: string;

     @ApiProperty({example: '1', description: 'User Id'}) // For Request body Example block
     readonly userId: number;
}