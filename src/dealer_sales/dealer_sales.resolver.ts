import { Resolver, ObjectType } from '@nestjs/graphql';
import { DealerSalesService } from './dealer_sales.service';
import { DealerSales } from './entities/dealer_sales.entity';
import { CreateDealerSalesInput } from './dto/create-dealer_sales.input';
import { UpdateDealerSalesInput } from './dto/update-dealer_sales.input';
import { WhereDealerSalesSearchInput } from './dto/search-dealer_sales.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, dealer_sales as DealerSalesModel } from '@prisma/client';

@ObjectType()
export class DealerSalesPagination extends BasePaginated(DealerSales) {}

const BaseDealerSalesResolver = createBaseResolver<
  typeof DealerSales,
  DealerSalesModel,
  typeof CreateDealerSalesInput,
  typeof UpdateDealerSalesInput,
  typeof WhereDealerSalesSearchInput,
  typeof DealerSalesPagination,
  Prisma.dealer_salesDelegate<any>
>(
  () => DealerSales,
  'DealerSales',
  () => CreateDealerSalesInput,
  () => UpdateDealerSalesInput,
  () => WhereDealerSalesSearchInput,
  () => DealerSalesPagination,
);

@Resolver(() => DealerSales)
export class DealerSalesResolver extends BaseDealerSalesResolver {
  constructor(private readonly dealerSalesService: DealerSalesService) {
    super(dealerSalesService);
  }
}