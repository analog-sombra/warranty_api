import { Resolver, ObjectType } from '@nestjs/graphql';
import { DealerStockService } from './dealer_stock.service';
import { DealerStock } from './entities/dealer_stock.entity';
import { CreateDealerStockInput } from './dto/create-dealer_stock.input';
import { UpdateDealerStockInput } from './dto/update-dealer_stock.input';
import { WhereDealerStockSearchInput } from './dto/search-dealer_stock.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';

@ObjectType()
export class DealerStockPagination extends BasePaginated(DealerStock) {}

// TODO: Run `npx prisma generate` to generate dealer_stock model types
const BaseDealerStockResolver = createBaseResolver<
  typeof DealerStock,
  any, // DealerStockModel - will be available after prisma generate
  typeof CreateDealerStockInput,
  typeof UpdateDealerStockInput,
  typeof WhereDealerStockSearchInput,
  typeof DealerStockPagination,
  any // Prisma.dealer_stockDelegate<any>
>(
  () => DealerStock,
  'DealerStock',
  () => CreateDealerStockInput,
  () => UpdateDealerStockInput,
  () => WhereDealerStockSearchInput,
  () => DealerStockPagination,
);

@Resolver(() => DealerStock)
export class DealerStockResolver extends BaseDealerStockResolver {
  constructor(private readonly dealerStockService: DealerStockService) {
    super(dealerStockService);
  }
}