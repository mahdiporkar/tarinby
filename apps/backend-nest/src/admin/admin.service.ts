import { Injectable } from "@nestjs/common";
import { MatchStatus } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  listNeeds() {
    return this.prisma.need.findMany({ orderBy: { createdAt: "desc" } });
  }

  listListings() {
    return this.prisma.listing.findMany({ orderBy: { createdAt: "desc" } });
  }

  listMatches() {
    return this.prisma.match.findMany({
      include: { need: true, listing: true },
      orderBy: { createdAt: "desc" }
    });
  }

  async updateMatchStatus(matchId: string, status: MatchStatus) {
    return this.prisma.match.update({
      where: { id: matchId },
      data: { status }
    });
  }

  async listUsers() {
    const users = await this.prisma.user.findMany({ orderBy: { createdAt: "desc" } });
    return users.map((user) => ({
      id: user.id,
      role: user.role,
      phoneMasked: this.maskPhone(user.phone),
      createdAt: user.createdAt
    }));
  }

  private maskPhone(phone: string) {
    if (phone.length <= 4) {
      return "****";
    }
    return `${"*".repeat(Math.max(0, phone.length - 4))}${phone.slice(-4)}`;
  }
}
