import { IsBoolean } from "class-validator";

export class OfferDto {
  @IsBoolean()
  paymentConfirmed: boolean;
}
