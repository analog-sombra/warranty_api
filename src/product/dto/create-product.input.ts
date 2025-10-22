import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  image?: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  subcategory_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  warranty_time: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Float)
  price: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
