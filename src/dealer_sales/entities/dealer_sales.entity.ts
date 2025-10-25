import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class DealerSales {
  @Field(() => Int)
  id: number;

  @Field(() => Product)
  product: Product;

  @Field(() => Int)
  product_id: number;

  @Field(() => Company)
  dealer: Company;

  @Field(() => Int)
  dealer_id: number;

  @Field(() => Company)
  company: Company;

  @Field(() => Int)
  company_id: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  warranty_till: number;

  @Field(() => String)
  batch_number: string;

  @Field(() => Date)
  sale_date: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  createdById: number;

  @Field(() => User)
  createdBy: User;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  updatedById?: number;

  @Field(() => User, { nullable: true })
  updatedBy?: User;
}