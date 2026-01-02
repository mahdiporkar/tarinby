import { Module } from "@nestjs/common";
import { MatchesModule } from "../matches/matches.module";
import { ListingsController } from "./listings.controller";
import { ListingsService } from "./listings.service";

@Module({
  imports: [MatchesModule],
  controllers: [ListingsController],
  providers: [ListingsService]
})
export class ListingsModule {}
