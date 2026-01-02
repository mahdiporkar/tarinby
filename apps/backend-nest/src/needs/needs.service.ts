import { ForbiddenException, Injectable } from "@nestjs/common";
import { NeedStatus, Role } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { MatchingService } from "../matches/matching.service";
import { CreateNeedDto } from "./dto/create-need.dto";

@Injectable()
export class NeedsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly matchingService: MatchingService
  ) {}

  async create(dto: CreateNeedDto, userId: string, role: Role) {
    if (role !== Role.BUYER) {
      throw new ForbiddenException("Only buyers can create needs.");
    }

    const need = await this.prisma.need.create({
      data: {
        userId,
        category: dto.category,
        city: dto.city,
        district: dto.district,
        budgetMin: dto.budgetMin,
        budgetMax: dto.budgetMax,
        attributes: dto.attributes ?? {},
        status: NeedStatus.ACTIVE
      }
    });

    await this.matchingService.matchForNeed(need.id);
    return need;
  }
}
