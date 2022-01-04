import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

    /**
     * roleService: For Using RolesService You need export Service in Module(RolesModule) and add to imports RolesService in Module(UsersModule)
     **/
    constructor(@InjectModel(User) private userRepository: typeof User, private rolesService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue("USER");
        await user.$set('roles', [role]);
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }
}
