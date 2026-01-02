import { Body, Controller, Get, Param, Patch, UseGuards } from "@nestjs/common";
import { MatchStatus } from "@prisma/client";
import { AdminGuard } from "./admin.guard";
import { AdminService } from "./admin.service";

@Controller("admin")
@UseGuards(AdminGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get("needs")
  listNeeds() {
    return this.adminService.listNeeds();
  }

  @Get("listings")
  listListings() {
    return this.adminService.listListings();
  }

  @Get("matches")
  listMatches() {
    return this.adminService.listMatches();
  }

  @Patch("matches/:id/status")
  updateMatchStatus(@Param("id") matchId: string, @Body() body: { status: MatchStatus }) {
    return this.adminService.updateMatchStatus(matchId, body.status);
  }

  @Get("users")
  listUsers() {
    return this.adminService.listUsers();
  }
}
