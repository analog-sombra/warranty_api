import { Resolver, ObjectType } from '@nestjs/graphql';
import { TicketAttachmentsService } from './ticket_attachments.service';
import { TicketAttachments } from './entities/ticket_attachments.entity';
import { CreateTicketAttachmentsInput } from './dto/create-ticket_attachments.input';
import { UpdateTicketAttachmentsInput } from './dto/update-ticket_attachments.input';
import { WhereTicketAttachmentsSearchInput } from './dto/search-ticket_attachments.input';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import {
  Prisma,
  ticket_attachments as TicketAttachmentsModel,
} from '@prisma/client';

@ObjectType()
export class TicketAttachmentsPagination extends BasePaginated(
  TicketAttachments,
) {}

const BaseTicketAttachmentsResolver = createBaseResolver<
  typeof TicketAttachments,
  TicketAttachmentsModel,
  typeof CreateTicketAttachmentsInput,
  typeof UpdateTicketAttachmentsInput,
  typeof WhereTicketAttachmentsSearchInput,
  typeof TicketAttachmentsPagination,
  Prisma.ticket_attachmentsDelegate<any>
>(
  () => TicketAttachments,
  'TicketAttachments',
  () => CreateTicketAttachmentsInput,
  () => UpdateTicketAttachmentsInput,
  () => WhereTicketAttachmentsSearchInput,
  () => TicketAttachmentsPagination,
);

@Resolver(() => TicketAttachments)
export class TicketAttachmentsResolver extends BaseTicketAttachmentsResolver {
  constructor(
    private readonly ticketAttachmentsService: TicketAttachmentsService,
  ) {
    super(ticketAttachmentsService);
  }
}
