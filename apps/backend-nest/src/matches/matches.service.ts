import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { MatchStatus, Role } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class MatchesService {
  constructor(private readonly prisma: PrismaService) {}

  async getBuyerMatches(userId: string) {
    const matches = await this.prisma.match.findMany({
      where: { need: { userId } },
      include: {
        need: true,
        listing: { include: { user: { select: { phone: true } } } }
      },
      orderBy: { createdAt: "desc" }
    });

    return matches.map((match) => {
      const contactPhone = match.status === MatchStatus.ACCEPTED ? match.listing.user.phone : null;
      return {
        id: match.id,
        status: match.status,
        matchScore: match.matchScore,
        priceScore: match.priceScore,
        riskScore: match.riskScore,
        createdAt: match.createdAt,
        need: match.need,
        listing: {
          id: match.listing.id,
          category: match.listing.category,
          city: match.listing.city,
          district: match.listing.district,
          price: match.listing.price,
          attributes: match.listing.attributes,
          status: match.listing.status,
          createdAt: match.listing.createdAt
        },
        contactPhone
      };
    });
  }

  async getSellerMatches(userId: string) {
    const matches = await this.prisma.match.findMany({
      where: { listing: { userId } },
      include: {
        listing: true,
        need: { include: { user: { select: { phone: true } } } }
      },
      orderBy: { createdAt: "desc" }
    });

    return matches.map((match) => {
      const contactPhone = match.status === MatchStatus.ACCEPTED ? match.need.user.phone : null;
      return {
        id: match.id,
        status: match.status,
        matchScore: match.matchScore,
        priceScore: match.priceScore,
        riskScore: match.riskScore,
        createdAt: match.createdAt,
        listing: match.listing,
        need: {
          id: match.need.id,
          category: match.need.category,
          city: match.need.city,
          district: match.need.district,
          budgetMin: match.need.budgetMin,
          budgetMax: match.need.budgetMax,
          attributes: match.need.attributes,
          status: match.need.status,
          createdAt: match.need.createdAt
        },
        contactPhone
      };
    });
  }

  async sendOffer(matchId: string, userId: string, role: Role, paymentConfirmed: boolean) {
    if (role !== Role.SELLER) {
      throw new ForbiddenException("Only sellers can send offers.");
    }

    if (!paymentConfirmed) {
      throw new BadRequestException("Mock payment is required before sending an offer.");
    }

    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      include: { listing: true }
    });

    if (!match) {
      throw new NotFoundException("Match not found.");
    }

    if (match.listing.userId !== userId) {
      throw new ForbiddenException("You do not own this listing.");
    }

    if (match.status !== MatchStatus.NEW) {
      throw new BadRequestException("Offer can only be sent for NEW matches.");
    }

    return this.prisma.match.update({
      where: { id: matchId },
      data: { status: MatchStatus.OFFER_SENT }
    });
  }

  async acceptOffer(matchId: string, userId: string, role: Role) {
    if (role !== Role.BUYER) {
      throw new ForbiddenException("Only buyers can accept offers.");
    }

    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      include: { need: true }
    });

    if (!match) {
      throw new NotFoundException("Match not found.");
    }

    if (match.need.userId !== userId) {
      throw new ForbiddenException("You do not own this need.");
    }

    if (match.status !== MatchStatus.OFFER_SENT) {
      throw new BadRequestException("Offer must be sent before acceptance.");
    }

    return this.prisma.match.update({
      where: { id: matchId },
      data: { status: MatchStatus.ACCEPTED }
    });
  }

  async rejectOffer(matchId: string, userId: string, role: Role) {
    if (role !== Role.BUYER) {
      throw new ForbiddenException("Only buyers can reject offers.");
    }

    const match = await this.prisma.match.findUnique({
      where: { id: matchId },
      include: { need: true }
    });

    if (!match) {
      throw new NotFoundException("Match not found.");
    }

    if (match.need.userId !== userId) {
      throw new ForbiddenException("You do not own this need.");
    }

    if (match.status !== MatchStatus.OFFER_SENT) {
      throw new BadRequestException("Offer must be sent before rejection.");
    }

    return this.prisma.match.update({
      where: { id: matchId },
      data: { status: MatchStatus.REJECTED }
    });
  }
}
