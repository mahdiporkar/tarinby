import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Role } from "@prisma/client";
import { CurrentUser } from "../auth/current-user.decorator";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { OfferDto } from "./dto/offer.dto";
import { MatchesService } from "./matches.service";

@Controller()
@UseGuards(JwtAuthGuard)
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get("buyer/matches")
  getBuyerMatches(@CurrentUser() user: { userId: string; role: Role }) {
    return this.matchesService.getBuyerMatches(user.userId);
  }

  @Get("seller/matches")
  getSellerMatches(@CurrentUser() user: { userId: string; role: Role }) {
    return this.matchesService.getSellerMatches(user.userId);
  }

  @Post("matches/:id/offer")
  sendOffer(
    @Param("id") matchId: string,
    @Body() body: OfferDto,
    @CurrentUser() user: { userId: string; role: Role }
  ) {
    return this.matchesService.sendOffer(matchId, user.userId, user.role, body.paymentConfirmed);
  }

  @Post("matches/:id/accept")
  acceptOffer(@Param("id") matchId: string, @CurrentUser() user: { userId: string; role: Role }) {
    return this.matchesService.acceptOffer(matchId, user.userId, user.role);
  }

  @Post("matches/:id/reject")
  rejectOffer(@Param("id") matchId: string, @CurrentUser() user: { userId: string; role: Role }) {
    return this.matchesService.rejectOffer(matchId, user.userId, user.role);
  }
}
