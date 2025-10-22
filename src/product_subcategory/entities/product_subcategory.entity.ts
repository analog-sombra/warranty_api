import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { ProductCategory } from 'src/product_category/entities/product_category.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class ProductSubcategory {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  pic?: string;

  @Field(() => Int)
  priority: number;

  @Field(() => ProductCategory)
  product_category: ProductCategory;

  @Field(() => Int)
  product_category_id: number;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  createdById: number;

  @Field(() => User)
  createdBy: User;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  updatedById: number;

  @Field(() => User, { nullable: true })
  updatedBy: User;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  deletedById: number;

  @Field(() => User, { nullable: true })
  deletedBy: User;
}
