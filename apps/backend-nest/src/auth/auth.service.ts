import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Role } from "@prisma/client";
import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(dto: LoginDto) {
    const existing = await this.usersService.findByPhone(dto.phone);

    if (existing && existing.role !== dto.role) {
      throw new BadRequestException("Role mismatch for this phone number.");
    }

    const user = existing ?? (await this.usersService.create(dto.phone, dto.role));
    const payload = { sub: user.id, role: user.role };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: { id: user.id, role: user.role, phone: user.phone }
    };
  }
}
