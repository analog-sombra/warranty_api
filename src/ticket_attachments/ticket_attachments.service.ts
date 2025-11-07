import { Injectable } from '@nestjs/common';
import { CreateTicketAttachmentsInput } from './dto/create-ticket_attachments.input';
import { UpdateTicketAttachmentsInput } from './dto/update-ticket_attachments.input';
import { WhereTicketAttachmentsSearchInput } from './dto/search-ticket_attachments.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, ticket_attachments } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { TicketAttachmentsPagination } from './ticket_attachments.resolver';

@Injectable()
export class TicketAttachmentsService extends BaseService<
  ticket_attachments,
  typeof CreateTicketAttachmentsInput,
  typeof UpdateTicketAttachmentsInput,
  typeof WhereTicketAttachmentsSearchInput,
  typeof TicketAttachmentsPagination,
  Prisma.ticket_attachmentsDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('TicketAttachments', prisma.ticket_attachments);
  }
}
