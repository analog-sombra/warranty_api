import { CreateCustomerFeedbackTicketInput } from './create-customer_feedback_ticket.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateCustomerFeedbackTicketInput extends PartialType(
  CreateCustomerFeedbackTicketInput,
) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  rating?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  comments?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;
}
