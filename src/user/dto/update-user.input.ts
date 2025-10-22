import { Role, Status } from '@prisma/client';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  name: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  contact1: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  contact2: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  address: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, {
    nullable: true,
  })
  zone_id: number;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, {
    nullable: true,
  })
  is_dealer: boolean;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, {
    nullable: true,
  })
  is_manufacturer: boolean;

  @IsOptional()
  @IsEnum(Role)
  @Field(() => Role, {
    nullable: true,
  })
  role: Role;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  email: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  password: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  otp: string;

  @IsOptional()
  @IsString()
  @Field(() => Date, {
    nullable: true,
  })
  dob: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  profile: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt: Date;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt: Date;
}
