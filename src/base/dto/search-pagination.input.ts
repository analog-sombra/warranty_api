import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchPaginationInput {
  @IsNumber()
  @Field(() => Int)
  skip: number;

  @IsString()
  @Field(() => Int)
  take: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  search: string;
}
