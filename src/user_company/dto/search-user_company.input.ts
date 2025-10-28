import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { CreateUserCompanyInput } from './create-user_company.input';

@InputType()
export class WhereUserCompanySearchInput extends PartialType(
  CreateUserCompanyInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  user_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  company_id?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  createdById?: number;

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
