import {
  IsDate,
  IsEnum,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateTicketInput } from './create-ticket.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Priority, TicketStatus } from '@prisma/client';
import { WhereSalesSearchInput } from 'src/sales/dto/search-sales.input';

@InputType()
export class WhereTicketSearchInput extends PartialType(CreateTicketInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  ticket_number?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  product_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  sale_id?: number;

  @IsOptional()
  @IsObject()
  @Field(() => WhereSalesSearchInput, { nullable: true })
  sale?: WhereSalesSearchInput;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  customer_id?: number;

  @IsOptional()
  @IsEnum(TicketStatus)
  @Field(() => TicketStatus, { nullable: true })
  status?: TicketStatus;

  @IsOptional()
  @IsEnum(Priority)
  @Field(() => Priority, { nullable: true })
  priority?: Priority;

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
