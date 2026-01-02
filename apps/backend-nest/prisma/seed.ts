import { PrismaClient, Role, Category, NeedStatus, ListingStatus, MatchStatus } from "@prisma/client";

const prisma = new PrismaClient();

function calculateMatchScore(need: any, listing: any) {
  const priceScore =
    listing.price >= need.budgetMin && listing.price <= need.budgetMax
      ? 40
      : listing.price <= Math.round(need.budgetMax * 1.1)
        ? 25
        : 0;

  const locationScore =
    need.city.toLowerCase() === listing.city.toLowerCase()
      ? need.district.toLowerCase() === listing.district.toLowerCase()
        ? 40
        : 30
      : 0;

  const needAttributes = need.attributes ?? {};
  const listingAttributes = listing.attributes ?? {};
  const keys = Object.keys(needAttributes);
  let attributeScore = 0;
  if (keys.length > 0) {
    let matches = 0;
    for (const key of keys) {
      if (needAttributes[key] === listingAttributes[key]) {
        matches += 1;
      }
    }
    attributeScore = Math.min(20, Math.round((matches / keys.length) * 20));
  }

  const matchScore = Math.min(100, priceScore + locationScore + attributeScore);
  return { matchScore, priceScore };
}

async function main() {
  const buyer = await prisma.user.create({
    data: { phone: "5550001001", role: Role.BUYER }
  });

  const seller = await prisma.user.create({
    data: { phone: "5550002002", role: Role.SELLER }
  });

  const need = await prisma.need.create({
    data: {
      userId: buyer.id,
      category: Category.PROPERTY,
      city: "Tehran",
      district: "1",
      budgetMin: 80000,
      budgetMax: 120000,
      attributes: { beds: 2, size: 90 },
      status: NeedStatus.ACTIVE
    }
  });

  const listing = await prisma.listing.create({
    data: {
      userId: seller.id,
      category: Category.PROPERTY,
      city: "Tehran",
      district: "1",
      price: 110000,
      attributes: { beds: 2, size: 95 },
      status: ListingStatus.ACTIVE
    }
  });

  const { matchScore, priceScore } = calculateMatchScore(need, listing);
  if (matchScore >= 70) {
    await prisma.match.create({
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
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
