import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateTicketAttachmentsInput } from './create-ticket_attachments.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class WhereTicketAttachmentsSearchInput extends PartialType(
  CreateTicketAttachmentsInput,
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
  @IsString()
  @Field(() => String, { nullable: true })
  file_path?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  type?: string;

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
