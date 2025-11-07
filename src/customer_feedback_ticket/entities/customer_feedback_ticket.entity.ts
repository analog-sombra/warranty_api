import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class CustomerFeedbackTicket {
  @Field(() => Int)
  id: number;

  @Field(() => Ticket)
  ticket: Ticket;

  @Field(() => Int)
  ticket_id: number;

  @Field(() => Int)
  rating: number;

  @Field(() => String, { nullable: true })
  comments?: string;

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
