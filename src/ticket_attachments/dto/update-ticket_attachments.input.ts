import { CreateTicketAttachmentsInput } from './create-ticket_attachments.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateTicketAttachmentsInput extends PartialType(
  CreateTicketAttachmentsInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  file_path?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  type?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;
}
