import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateTicketAttachmentsInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  ticket_id: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  file_path: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  type?: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
