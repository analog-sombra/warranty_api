import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';
import { Zone } from 'src/zone/entities/zone.entity';

registerEnumType(Role, {
  name: 'Role',
});
@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  contact1: string;

  @Field(() => String, { nullable: true })
  contact2?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Zone)
  zone: Zone;

  @Field(() => Int)
  zone_id: number;

  @Field(() => Boolean)
  is_dealer: boolean;

  @Field(() => Boolean)
  is_manufacturer: boolean;

  @Field(() => Role)
  role: Role;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  password: string;

  @Field(() => String, { nullable: true })
  otp?: string;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => String, { nullable: true })
  profile?: string;

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
