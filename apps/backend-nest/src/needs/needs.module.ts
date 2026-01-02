import { Module } from "@nestjs/common";
import { MatchesModule } from "../matches/matches.module";
import { NeedsController } from "./needs.controller";
import { NeedsService } from "./needs.service";

@Module({
  imports: [MatchesModule],
  controllers: [NeedsController],
  providers: [NeedsService]
})
export class NeedsModule {}
