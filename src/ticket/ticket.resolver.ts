import { Resolver, ObjectType } from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { WhereTicketSearchInput } from './dto/search-ticket.input';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { Prisma, ticket as TicketModel } from '@prisma/client';

@ObjectType()
export class TicketPagination extends BasePaginated(Ticket) {}

const BaseTicketResolver = createBaseResolver<
  typeof Ticket,
  TicketModel,
  typeof CreateTicketInput,
  typeof UpdateTicketInput,
  typeof WhereTicketSearchInput,
  typeof TicketPagination,
  Prisma.ticketDelegate<any>
>(
  () => Ticket,
  'Ticket',
  () => CreateTicketInput,
  () => UpdateTicketInput,
  () => WhereTicketSearchInput,
  () => TicketPagination,
);

@Resolver(() => Ticket)
export class TicketResolver extends BaseTicketResolver {
  constructor(private readonly ticketService: TicketService) {
    super(ticketService);
  }
}
