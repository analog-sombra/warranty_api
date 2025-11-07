import { Injectable } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';
import { WhereTicketSearchInput } from './dto/search-ticket.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, ticket } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { TicketPagination } from './ticket.resolver';

@Injectable()
export class TicketService extends BaseService<
  ticket,
  typeof CreateTicketInput,
  typeof UpdateTicketInput,
  typeof WhereTicketSearchInput,
  typeof TicketPagination,
  Prisma.ticketDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Ticket', prisma.ticket);
  }
}
