import { Module } from '@nestjs/common';
import { TicketLevelsService } from './ticket_levels.service';
import { TicketLevelsResolver } from './ticket_levels.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TicketLevelsResolver, TicketLevelsService],
})
export class TicketLevelsModule {}
