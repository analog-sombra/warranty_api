import { Module } from '@nestjs/common';
import { TicketAttachmentsService } from './ticket_attachments.service';
import { TicketAttachmentsResolver } from './ticket_attachments.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TicketAttachmentsResolver, TicketAttachmentsService],
})
export class TicketAttachmentsModule {}
