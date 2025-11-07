import { Injectable } from '@nestjs/common';
import { CreateTicketLevelsInput } from './dto/create-ticket_levels.input';
import { UpdateTicketLevelsInput } from './dto/update-ticket_levels.input';
import { WhereTicketLevelsSearchInput } from './dto/search-ticket_levels.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, ticket_levels } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { TicketLevelsPagination } from './ticket_levels.resolver';

@Injectable()
export class TicketLevelsService extends BaseService<
  ticket_levels,
  typeof CreateTicketLevelsInput,
  typeof UpdateTicketLevelsInput,
  typeof WhereTicketLevelsSearchInput,
  typeof TicketLevelsPagination,
  Prisma.ticket_levelsDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('TicketLevels', prisma.ticket_levels);
  }
}
