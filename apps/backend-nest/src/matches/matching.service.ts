import { Injectable } from "@nestjs/common";
import { MatchStatus } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

const MATCH_THRESHOLD = 70;

@Injectable()
export class MatchingService {
  constructor(private readonly prisma: PrismaService) {}

  async matchForNeed(needId: string) {
    const need = await this.prisma.need.findUnique({ where: { id: needId } });
    if (!need) {
      return;
    }

    const listings = await this.prisma.listing.findMany({
      where: { category: need.category, status: "ACTIVE" }
    });

    for (const listing of listings) {
      await this.tryCreateMatch(need, listing);
    }
  }

  async matchForListing(listingId: string) {
    const listing = await this.prisma.listing.findUnique({ where: { id: listingId } });
    if (!listing) {
      return;
    }

    const needs = await this.prisma.need.findMany({
      where: { category: listing.category, status: "ACTIVE" }
    });

    for (const need of needs) {
      await this.tryCreateMatch(need, listing);
    }
  }

  private async tryCreateMatch(need: any, listing: any) {
    const existing = await this.prisma.match.findUnique({
      where: { needId_listingId: { needId: need.id, listingId: listing.id } }
    });

    if (existing) {
      return;
    }

    const priceScore = this.calculatePriceScore(need, listing);
    const locationScore = this.calculateLocationScore(need, listing);
    const attributeScore = this.calculateAttributeScore(need, listing);
    const matchScore = Math.min(100, priceScore + locationScore + attributeScore);

    if (matchScore < MATCH_THRESHOLD) {
      return;
    }

    await this.prisma.match.create({
      data: {
        needId: need.id,
        listingId: listing.id,
        matchScore,
        priceScore,
        riskScore: 0,
        status: MatchStatus.NEW
      }
    });
  }

  // 0-40 based on budget overlap.
  private calculatePriceScore(need: any, listing: any) {
    if (listing.price >= need.budgetMin && listing.price <= need.budgetMax) {
      return 40;
    }

    if (listing.price <= Math.round(need.budgetMax * 1.1)) {
      return 25;
    }

    return 0;
  }

  // 0-40 based on city/district match.
  private calculateLocationScore(need: any, listing: any) {
    if (need.city.toLowerCase() !== listing.city.toLowerCase()) {
      return 0;
    }

    if (need.district.toLowerCase() === listing.district.toLowerCase()) {
      return 40;
    }

    return 30;
  }

  // 0-20 based on attribute similarity.
  private calculateAttributeScore(need: any, listing: any) {
    const needAttributes = need.attributes ?? {};
    const listingAttributes = listing.attributes ?? {};
    const keys = Object.keys(needAttributes);

    if (keys.length === 0) {
      return 10;
    }

    let matches = 0;
    for (const key of keys) {
      if (!(key in listingAttributes)) {
        continue;
      }

      if (this.isValueMatch(needAttributes[key], listingAttributes[key])) {
        matches += 1;
      }
    }

    return Math.min(20, Math.round((matches / keys.length) * 20));
  }

  private isValueMatch(needValue: any, listingValue: any) {
    if (Array.isArray(needValue) && Array.isArray(listingValue)) {
      return needValue.some((value) => listingValue.includes(value));
    }

    if (
      typeof needValue === "object" &&
      needValue !== null &&
      typeof listingValue === "object" &&
      listingValue !== null
    ) {
      return JSON.stringify(needValue) === JSON.stringify(listingValue);
    }

    return needValue === listingValue;
  }
}
