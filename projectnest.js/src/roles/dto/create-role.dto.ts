import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Unique value role'}) // For Request body Example block
    readonly value: string;

    @ApiProperty({example: 'Administrator', description: 'Description role'}) // For Request body Example block
    readonly description: string;
}