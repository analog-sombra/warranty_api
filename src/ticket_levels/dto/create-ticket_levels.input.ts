import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
} from 'class-validator';

@InputType()
export class CreateTicketLevelsInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  ticket_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  level: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  assigned_to_id: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  diagnostic_notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  resolution_notes?: string;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { defaultValue: false })
  approval_required?: boolean;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  approval_notes?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  approved_by_id?: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
