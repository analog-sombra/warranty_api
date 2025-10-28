import { Injectable } from '@nestjs/common';
import { CreateSalesInput } from './dto/create-sales.input';
import { UpdateSalesInput } from './dto/update-sales.input';
import { WhereSalesSearchInput } from './dto/search-sales.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, sales } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { SalesPagination } from './sales.resolver';

@Injectable()
export class SalesService extends BaseService<
  sales,
  typeof CreateSalesInput,
  typeof UpdateSalesInput,
  typeof WhereSalesSearchInput,
  typeof SalesPagination,
  Prisma.salesDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Sales', prisma.sales);
  }
}
