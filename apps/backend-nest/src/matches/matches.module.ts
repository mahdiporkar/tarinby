import { Module } from "@nestjs/common";
import { MatchesController } from "./matches.controller";
import { MatchingService } from "./matching.service";
import { MatchesService } from "./matches.service";

@Module({
  controllers: [MatchesController],
  providers: [MatchesService, MatchingService],
  exports: [MatchingService]
})
export class MatchesModule {}
