import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";


@ApiTags("Authorization")
@Controller("auth")
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: "Login"}) // For Swagger
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: "Sign up"}) // For Swagger
    @Post('/signup')
    signup(@Body() userDto: CreateUserDto) {
        return this.authService.signup(userDto);
    }
}
