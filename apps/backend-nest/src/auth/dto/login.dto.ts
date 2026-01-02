import { IsEnum, IsString, Length } from "class-validator";
import { Role } from "@prisma/client";

export class LoginDto {
  @IsString()
  @Length(6, 24)
  phone: string;

  @IsEnum(Role)
  role: Role;
}
