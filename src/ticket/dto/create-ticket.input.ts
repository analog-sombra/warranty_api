import { InputType, Field, Int, registerEnumType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { TicketStatus, Priority } from '@prisma/client';

registerEnumType(TicketStatus, {
  name: 'TicketStatus',
});

registerEnumType(Priority, {
  name: 'Priority',
  description: 'Priority levels for tickets',
});

@InputType()
export class CreateTicketInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  ticket_number: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  customer_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  sale_id: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  issue_description: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  issue_category: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  preferred_contact_time: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  diagnostic_notes?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  resolution_notes?: string;

  @IsOptional()
  @IsEnum(Priority)
  @Field(() => Priority, { nullable: true })
  priority?: Priority;

  @IsOptional()
  @IsEnum(TicketStatus)
  @Field(() => TicketStatus, { nullable: true })
  status?: TicketStatus;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
