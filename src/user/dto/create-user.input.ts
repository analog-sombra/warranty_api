import { InputType, Int, Field } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
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

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  zone_id: number;

  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean)
  is_dealer: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean)
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
}
