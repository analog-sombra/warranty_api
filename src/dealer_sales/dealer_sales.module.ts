import { Module } from '@nestjs/common';
import { DealerSalesService } from './dealer_sales.service';
import { DealerSalesResolver } from './dealer_sales.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DealerSalesResolver, DealerSalesService],
})
export class DealerSalesModule {}