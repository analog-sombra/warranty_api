import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateCustomerFeedbackTicketInput } from './create-customer_feedback_ticket.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class WhereCustomerFeedbackTicketSearchInput extends PartialType(
  CreateCustomerFeedbackTicketInput,
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
  rating?: number;

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
