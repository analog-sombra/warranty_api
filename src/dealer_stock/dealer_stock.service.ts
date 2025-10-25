import { Injectable } from '@nestjs/common';
import { CreateDealerStockInput } from './dto/create-dealer_stock.input';
import { UpdateDealerStockInput } from './dto/update-dealer_stock.input';
import { WhereDealerStockSearchInput } from './dto/search-dealer_stock.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { DealerStockPagination } from './dealer_stock.resolver';
import { Prisma, dealer_stock } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';


// TODO: Run `npx prisma generate` to generate dealer_stock model
@Injectable()
export class DealerStockService extends BaseService<
  dealer_stock,
  typeof CreateDealerStockInput,
  typeof UpdateDealerStockInput,
  typeof WhereDealerStockSearchInput,
  typeof DealerStockPagination,
  Prisma.dealer_stockDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('DealerStock', (prisma as any).dealer_stock);
  }
}