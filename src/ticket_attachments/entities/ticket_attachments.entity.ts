import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { TicketType } from '@prisma/client';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(TicketType, {
  name: 'TicketType',
});

@ObjectType()
export class TicketAttachments {
  @Field(() => Int)
  id: number;

  @Field(() => Ticket)
  ticket: Ticket;

  @Field(() => Int)
  ticket_id: number;

  @Field(() => String)
  file_path: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  status: string;

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
