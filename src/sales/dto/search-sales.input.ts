import { IsDate, IsInt, IsObject, IsOptional, IsString } from 'class-validator';
import { CreateSalesInput } from './create-sales.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { WhereProductSearchInput } from 'src/product/dto/search-product.input';

@InputType()
export class WhereSalesSearchInput extends PartialType(CreateSalesInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  product_id?: number;

  @IsOptional()
  @IsObject()
  @Field(() => WhereProductSearchInput, { nullable: true })
  product?: WhereProductSearchInput;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  dealer_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  company_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  customer_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  warranty_till?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  sale_date?: Date;

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
