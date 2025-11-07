import { Injectable } from '@nestjs/common';
import { CreateCustomerFeedbackTicketInput } from './dto/create-customer_feedback_ticket.input';
import { UpdateCustomerFeedbackTicketInput } from './dto/update-customer_feedback_ticket.input';
import { WhereCustomerFeedbackTicketSearchInput } from './dto/search-customer_feedback_ticket.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, customer_feedback_ticket } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { CustomerFeedbackTicketPagination } from './customer_feedback_ticket.resolver';

@Injectable()
export class CustomerFeedbackTicketService extends BaseService<
  customer_feedback_ticket,
  typeof CreateCustomerFeedbackTicketInput,
  typeof UpdateCustomerFeedbackTicketInput,
  typeof WhereCustomerFeedbackTicketSearchInput,
  typeof CustomerFeedbackTicketPagination,
  Prisma.customer_feedback_ticketDelegate<
    DefaultArgs,
    Prisma.PrismaClientOptions
  >
> {
  constructor(private readonly prisma: PrismaService) {
    super('CustomerFeedbackTicket', prisma.customer_feedback_ticket);
  }
}
