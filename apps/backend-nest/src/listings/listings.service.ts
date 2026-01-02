import { ForbiddenException, Injectable } from "@nestjs/common";
import { ListingStatus, Role } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { MatchingService } from "../matches/matching.service";
import { CreateListingDto } from "./dto/create-listing.dto";

@Injectable()
export class ListingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly matchingService: MatchingService
  ) {}

  async create(dto: CreateListingDto, userId: string, role: Role) {
    if (role !== Role.SELLER) {
      throw new ForbiddenException("Only sellers can create listings.");
    }

    const listing = await this.prisma.listing.create({
      data: {
        userId,
        category: dto.category,
        city: dto.city,
        district: dto.district,
        price: dto.price,
        attributes: dto.attributes ?? {},
        status: ListingStatus.ACTIVE
      }
    });

    await this.matchingService.matchForListing(listing.id);
    return listing;
  }
}
