import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateUserCompanyInput {
  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  company_id: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;
}
