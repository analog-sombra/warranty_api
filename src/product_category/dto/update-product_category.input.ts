import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProductCategoryInput } from './create-product_category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateProductCategoryInput extends PartialType(
  CreateProductCategoryInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  pic: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, {
    nullable: true,
  })
  priority: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;

  @IsOptional()
  @IsDate()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, {
    nullable: true,
  })
  updatedById: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, {
    nullable: true,
  })
  deletedById: number;
}
