import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateCustomerFeedbackTicketInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  ticket_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  rating: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  comments?: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
