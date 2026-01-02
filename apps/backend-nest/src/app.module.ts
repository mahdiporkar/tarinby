import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { ListingsModule } from "./listings/listings.module";
import { MatchesModule } from "./matches/matches.module";
import { NeedsModule } from "./needs/needs.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AuthModule,
    NeedsModule,
    ListingsModule,
    MatchesModule,
    AdminModule,
    HealthModule
  ]
})
export class AppModule {}
