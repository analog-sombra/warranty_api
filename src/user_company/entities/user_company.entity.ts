import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class UserCompany {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  user_id: number;

  @Field(() => User)
  user: User;

  @Field(() => Int)
  company_id: number;

  @Field(() => Company)
  company: Company;

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
