import { Resolver, ObjectType } from '@nestjs/graphql';
import { TicketLevelsService } from './ticket_levels.service';
import { TicketLevels } from './entities/ticket_levels.entity';
import { CreateTicketLevelsInput } from './dto/create-ticket_levels.input';
import { UpdateTicketLevelsInput } from './dto/update-ticket_levels.input';
import { WhereTicketLevelsSearchInput } from './dto/search-ticket_levels.input';
import { createBaseResolver } from 'src/base/base.resolver';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { Prisma, ticket_levels as TicketLevelsModel } from '@prisma/client';

@ObjectType()
export class TicketLevelsPagination extends BasePaginated(TicketLevels) {}

const BaseTicketLevelsResolver = createBaseResolver<
  typeof TicketLevels,
  TicketLevelsModel,
  typeof CreateTicketLevelsInput,
  typeof UpdateTicketLevelsInput,
  typeof WhereTicketLevelsSearchInput,
  typeof TicketLevelsPagination,
  Prisma.ticket_levelsDelegate<any>
>(
  () => TicketLevels,
  'TicketLevels',
  () => CreateTicketLevelsInput,
  () => UpdateTicketLevelsInput,
  () => WhereTicketLevelsSearchInput,
  () => TicketLevelsPagination,
);

@Resolver(() => TicketLevels)
export class TicketLevelsResolver extends BaseTicketLevelsResolver {
  constructor(private readonly ticketLevelsService: TicketLevelsService) {
    super(ticketLevelsService);
  }
}
