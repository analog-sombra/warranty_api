import {
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  IsBoolean,
} from 'class-validator';
import { CreateTicketLevelsInput } from './create-ticket_levels.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class WhereTicketLevelsSearchInput extends PartialType(
  CreateTicketLevelsInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  ticket_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  level?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  assigned_to_id?: number;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  approval_required?: boolean;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  approved_by_id?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  status?: string;

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
}
