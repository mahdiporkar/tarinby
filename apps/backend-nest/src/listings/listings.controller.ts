import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { Role } from "@prisma/client";
import { CurrentUser } from "../auth/current-user.decorator";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateListingDto } from "./dto/create-listing.dto";
import { ListingsService } from "./listings.service";

@Controller("listings")
@UseGuards(JwtAuthGuard)
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  create(
    @Body() dto: CreateListingDto,
    @CurrentUser() user: { userId: string; role: Role }
  ) {
    return this.listingsService.create(dto, user.userId, user.role);
  }
}
