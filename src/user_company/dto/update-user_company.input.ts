import { IsDate, IsEnum, IsInt, IsOptional } from 'class-validator';
import { CreateUserCompanyInput } from './create-user_company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateUserCompanyInput extends PartialType(CreateUserCompanyInput) {

  @IsOptional()
  @IsInt()
  @Field(() => Int)
  user_id: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int)
  company_id: number;

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
