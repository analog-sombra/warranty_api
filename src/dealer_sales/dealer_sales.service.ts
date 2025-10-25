import { Injectable } from '@nestjs/common';
import { CreateDealerSalesInput } from './dto/create-dealer_sales.input';
import { UpdateDealerSalesInput } from './dto/update-dealer_sales.input';
import { WhereDealerSalesSearchInput } from './dto/search-dealer_sales.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, dealer_sales } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { DealerSalesPagination } from './dealer_sales.resolver';


@Injectable()
export class DealerSalesService extends BaseService<
  dealer_sales,
  typeof CreateDealerSalesInput,
  typeof UpdateDealerSalesInput,
  typeof WhereDealerSalesSearchInput,
  typeof DealerSalesPagination,
  Prisma.dealer_salesDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('DealerSales', prisma.dealer_sales);
  }
}