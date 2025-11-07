import { Resolver, ObjectType } from '@nestjs/graphql';
import { CustomerFeedbackTicketService } from './customer_feedback_ticket.service';
import { CustomerFeedbackTicket } from './entities/customer_feedback_ticket.entity';
import { CreateCustomerFeedbackTicketInput } from './dto/create-customer_feedback_ticket.input';
import { UpdateCustomerFeedbackTicketInput } from './dto/update-customer_feedback_ticket.input';
import { WhereCustomerFeedbackTicketSearchInput } from './dto/search-customer_feedback_ticket.input';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import {
  Prisma,
  customer_feedback_ticket as CustomerFeedbackTicketModel,
} from '@prisma/client';

@ObjectType()
export class CustomerFeedbackTicketPagination extends BasePaginated(
  CustomerFeedbackTicket,
) {}

const BaseCustomerFeedbackTicketResolver = createBaseResolver<
  typeof CustomerFeedbackTicket,
  CustomerFeedbackTicketModel,
  typeof CreateCustomerFeedbackTicketInput,
  typeof UpdateCustomerFeedbackTicketInput,
  typeof WhereCustomerFeedbackTicketSearchInput,
  typeof CustomerFeedbackTicketPagination,
  Prisma.customer_feedback_ticketDelegate<any>
>(
  () => CustomerFeedbackTicket,
  'CustomerFeedbackTicket',
  () => CreateCustomerFeedbackTicketInput,
  () => UpdateCustomerFeedbackTicketInput,
  () => WhereCustomerFeedbackTicketSearchInput,
  () => CustomerFeedbackTicketPagination,
);

@Resolver(() => CustomerFeedbackTicket)
export class CustomerFeedbackTicketResolver extends BaseCustomerFeedbackTicketResolver {
  constructor(
    private readonly customerFeedbackTicketService: CustomerFeedbackTicketService,
  ) {
    super(customerFeedbackTicketService);
  }
}
