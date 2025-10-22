import { Resolver, ObjectType } from '@nestjs/graphql';
import { ProductCategoryService } from './product_category.service';
import { ProductCategory } from './entities/product_category.entity';
import { CreateProductCategoryInput } from './dto/create-product_category.input';
import { UpdateProductCategoryInput } from './dto/update-product_category.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import {
  Prisma,
  product_category as ProductCategoryModel,
} from '@prisma/client';
import { createBaseResolver } from 'src/base/base.resolver';

@ObjectType()
export class ProductCategoryPagination extends BasePaginated(ProductCategory) {}

const BaseProductCategoryResolver = createBaseResolver<
  typeof ProductCategory,
  ProductCategoryModel,
  typeof CreateProductCategoryInput,
  typeof UpdateProductCategoryInput,
  typeof ProductCategoryPagination,
  Prisma.product_categoryDelegate<any>
>(
  () => ProductCategory,
  'ProductCategory',
  () => CreateProductCategoryInput,
  () => UpdateProductCategoryInput,
  () => ProductCategoryPagination,
);

@Resolver(() => ProductCategory)
export class ProductCategoryResolver extends BaseProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService) {
    super(productCategoryService);
  }
}
