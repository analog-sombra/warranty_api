import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Company } from 'src/company/entities/company.entity';
import { ProductSubcategory } from 'src/product_subcategory/entities/product_subcategory.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  image: string;

  @Field(() => Int)
  subcategory_id: number;

  @Field(() => Int)
  company_id: number;

  @Field(() => Company)
  company: Company;

  @Field(() => ProductSubcategory)
  subcategory: ProductSubcategory;

  @Field(() => Int)
  warranty_time: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Float)
  price: number;

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

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  deletedById?: number;

  @Field(() => User, { nullable: true })
  deletedBy?: User;
}
