import { IsEnum, IsInt, IsObject, IsOptional, IsString, Min } from "class-validator";
import { Category } from "@prisma/client";

export class CreateListingDto {
  @IsEnum(Category)
  category: Category;

  @IsString()
  city: string;

  @IsString()
  district: string;

  @IsInt()
  @Min(0)
  price: number;

  @IsOptional()
  @IsObject()
  attributes?: Record<string, unknown>;
}
