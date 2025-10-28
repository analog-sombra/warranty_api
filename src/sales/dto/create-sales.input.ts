import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSalesInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  dealer_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  company_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  customer_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  warranty_till: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
