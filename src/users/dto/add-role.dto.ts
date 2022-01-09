import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
     @ApiProperty({example: 'ADMIN', description: 'Role'}) // For Request body Example block
     @IsString({message: 'Field should be string'})
     readonly value: string;

     @ApiProperty({example: '1', description: 'User Id'}) // For Request body Example block
     @IsNumber({}, {message: 'Field should be number'})
     readonly userId: number;
}