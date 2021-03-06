import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Injectable()
export class UsersService {

    /**
     * roleService: For Using RolesService You need export Service in Module(RolesModule) and add to imports RolesService in Module(UsersModule)
     **/
    constructor(@InjectModel(User) private userRepository: typeof User, private rolesService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        let role = await this.rolesService.getRoleByValue("USER");
        if (user.email == 'admin@admin.com')
        {
            role = await this.rolesService.getRoleByValue("ADMIN");
        }
        await user.$set('roles', [role]);
        user.roles = [role];
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}});
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.rolesService.getRoleByValue(dto.value)
        if (user && role) {
             await user.$add('role',  role.id);
             return dto;
        }
        throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
