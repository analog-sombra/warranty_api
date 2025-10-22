import { IsDate, IsEnum, IsInt, IsOptional, IsString, IsNumber } from 'class-validator';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  subcategory_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  warranty_time?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Float, { nullable: true })
  price?: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  deletedById?: number;
}
