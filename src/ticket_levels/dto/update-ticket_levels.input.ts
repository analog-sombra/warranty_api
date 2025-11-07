import { CreateTicketLevelsInput } from './create-ticket_levels.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsInt, IsString, IsBoolean } from 'class-validator';

@InputType()
export class UpdateTicketLevelsInput extends PartialType(
  CreateTicketLevelsInput,
) {
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
  @Field(() => Boolean, { nullable: true })
  approval_required?: boolean;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  approval_notes?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  approved_by_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;
}
