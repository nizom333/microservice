import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: "Creating User"}) // For Swagger
    @ApiResponse({status: 200, type: User}) // For Swagger
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: "Get all users"}) // For Swagger
    @ApiResponse({status: 200, type: [User]}) // For Swagger
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
