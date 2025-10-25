import { Module } from '@nestjs/common';
import { DealerStockService } from './dealer_stock.service';
import { DealerStockResolver } from './dealer_stock.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DealerStockResolver, DealerStockService],
})
export class DealerStockModule {}