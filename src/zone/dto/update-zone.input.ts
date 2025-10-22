import { Status } from '@prisma/client';
import { CreateZoneInput } from './create-zone.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateZoneInput extends PartialType(CreateZoneInput) {
  @IsOptional()
  @IsNumber()
  @Field(() => Int, {
    nullable: true,
  })
  city_id: number;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  name: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;
}
