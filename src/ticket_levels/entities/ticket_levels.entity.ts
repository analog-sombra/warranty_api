import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class TicketLevels {
  @Field(() => Int)
  id: number;

  @Field(() => Ticket)
  ticket: Ticket;

  @Field(() => Int)
  ticket_id: number;

  @Field(() => Int)
  level: number;

  @Field(() => User)
  assigned_to: User;

  @Field(() => Int)
  assigned_to_id: number;

  @Field(() => String, { nullable: true })
  diagnostic_notes?: string;

  @Field(() => String, { nullable: true })
  resolution_notes?: string;

  @Field(() => Boolean)
  approval_required: boolean;

  @Field(() => String, { nullable: true })
  approval_notes?: string;

  @Field(() => User, { nullable: true })
  approved_by?: User;

  @Field(() => Int, { nullable: true })
  approved_by_id?: number;

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
