import { Injectable } from '@nestjs/common';
import { CreateProductCategoryInput } from './dto/create-product_category.input';
import { UpdateProductCategoryInput } from './dto/update-product_category.input';
import { WhereProductCategorySearchInput } from './dto/search-product_category.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, product_category } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from 'generated/prisma/runtime/library';
import { ProductCategoryPagination } from './product_category.resolver';

@Injectable()
export class ProductCategoryService extends BaseService<
  product_category,
  typeof CreateProductCategoryInput,
  typeof UpdateProductCategoryInput,
  typeof WhereProductCategorySearchInput,
  typeof ProductCategoryPagination,
  Prisma.product_categoryDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('ProductCategory', prisma.product_category);
  }
}
