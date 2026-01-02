import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { Role } from "@prisma/client";
import { CurrentUser } from "../auth/current-user.decorator";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateNeedDto } from "./dto/create-need.dto";
import { NeedsService } from "./needs.service";

@Controller("needs")
@UseGuards(JwtAuthGuard)
export class NeedsController {
  constructor(private readonly needsService: NeedsService) {}

  @Post()
  create(@Body() dto: CreateNeedDto, @CurrentUser() user: { userId: string; role: Role }) {
    return this.needsService.create(dto, user.userId, user.role);
  }
}
