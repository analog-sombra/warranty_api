import { Resolver, ObjectType } from '@nestjs/graphql';
import { ProductSubcategoryService } from './product_subcategory.service';
import { ProductSubcategory } from './entities/product_subcategory.entity';
import { CreateProductSubcategoryInput } from './dto/create-product_subcategory.input';
import { UpdateProductSubcategoryInput } from './dto/update-product_subcategory.input';
import { WhereProductSubcategorySearchInput } from './dto/search-product_subcategory.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import {
  Prisma,
  product_subcategory as ProductSubcategoryModel,
} from '@prisma/client';

@ObjectType()
export class ProductSubcategoryPagination extends BasePaginated(
  ProductSubcategory,
) {}

const BaseProductSubcategoryResolver = createBaseResolver<
  typeof ProductSubcategory,
  ProductSubcategoryModel,
  typeof CreateProductSubcategoryInput,
  typeof UpdateProductSubcategoryInput,
  typeof WhereProductSubcategorySearchInput,
  typeof ProductSubcategoryPagination,
  Prisma.product_subcategoryDelegate<any>
>(
  () => ProductSubcategory,
  'ProductSubcategory',
  () => CreateProductSubcategoryInput,
  () => UpdateProductSubcategoryInput,
  () => WhereProductSubcategorySearchInput,
  () => ProductSubcategoryPagination,
);

@Resolver(() => ProductSubcategory)
export class ProductSubcategoryResolver extends BaseProductSubcategoryResolver {
  constructor(
    private readonly productSubcategoryService: ProductSubcategoryService,
  ) {
    super(productSubcategoryService);
  }
}
