import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateProductSubcategoryInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  pic: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  priority: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_category_id: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
