import { Resolver, ObjectType } from '@nestjs/graphql';
import { SalesService } from './sales.service';
import { Sales } from './entities/sales.entity';
import { CreateSalesInput } from './dto/create-sales.input';
import { UpdateSalesInput } from './dto/update-sales.input';
import { WhereSalesSearchInput } from './dto/search-sales.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, sales as SalesModel } from '@prisma/client';

@ObjectType()
export class SalesPagination extends BasePaginated(Sales) {}

const BaseSalesResolver = createBaseResolver<
  typeof Sales,
  SalesModel,
  typeof CreateSalesInput,
  typeof UpdateSalesInput,
  typeof WhereSalesSearchInput,
  typeof SalesPagination,
  Prisma.salesDelegate<any>
>(
  () => Sales,
  'Sales',
  () => CreateSalesInput,
  () => UpdateSalesInput,
  () => WhereSalesSearchInput,
  () => SalesPagination,
);

@Resolver(() => Sales)
export class SalesResolver extends BaseSalesResolver {
  constructor(private readonly salesService: SalesService) {
    super(salesService);
  }
}
