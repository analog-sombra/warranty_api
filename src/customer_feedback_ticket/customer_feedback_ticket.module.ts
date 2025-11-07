import { Module } from '@nestjs/common';
import { CustomerFeedbackTicketService } from './customer_feedback_ticket.service';
import { CustomerFeedbackTicketResolver } from './customer_feedback_ticket.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CustomerFeedbackTicketResolver, CustomerFeedbackTicketService],
})
export class CustomerFeedbackTicketModule {}
