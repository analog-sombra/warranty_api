import { InputType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateProductCategoryInput {
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
