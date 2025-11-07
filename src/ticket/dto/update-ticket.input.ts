import { CreateTicketInput } from './create-ticket.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Priority, TicketStatus } from '@prisma/client';
import { IsOptional, IsInt, IsString, IsDate, IsEnum } from 'class-validator';

@InputType()
export class UpdateTicketInput extends PartialType(CreateTicketInput) {
  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  resolved_at?: Date;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  diagnostic_notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  resolution_notes?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;

  @IsOptional()
  @IsEnum(TicketStatus)
  @Field(() => TicketStatus, { nullable: true })
  status?: TicketStatus;

  @IsOptional()
  @IsEnum(Priority)
  @Field(() => Priority, { nullable: true })
  priority?: Priority;
}
