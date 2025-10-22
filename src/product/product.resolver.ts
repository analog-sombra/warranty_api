import { Resolver, ObjectType } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, product as ProductModel } from '@prisma/client';

@ObjectType()
export class ProductPagination extends BasePaginated(Product) {}

const BaseProductResolver = createBaseResolver<
  typeof Product,
  ProductModel,
  typeof CreateProductInput,
  typeof UpdateProductInput,
  typeof ProductPagination,
  Prisma.productDelegate<any>
>(
  () => Product,
  'Product',
  () => CreateProductInput,
  () => UpdateProductInput,
  () => ProductPagination,
);

@Resolver(() => Product)
export class ProductResolver extends BaseProductResolver {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }
}
