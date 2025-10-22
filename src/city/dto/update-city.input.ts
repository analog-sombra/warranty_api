import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CreateCityInput } from './create-city.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status: Status;
}
