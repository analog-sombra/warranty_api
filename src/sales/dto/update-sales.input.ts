import { IsDate, IsInt, IsOptional } from 'class-validator';
import { CreateSalesInput } from './create-sales.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSalesInput extends PartialType(CreateSalesInput) {
  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  product_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  dealer_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  customer_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  company_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  warranty_till?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;
}